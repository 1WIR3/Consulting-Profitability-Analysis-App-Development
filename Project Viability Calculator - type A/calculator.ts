import { Scenario, ScenarioConsultant, ConsultantRole } from '../types';
import { CONSULTANT_PROFILES, WORK_DAYS_PER_YEAR } from '../constants';

export interface CostBreakdownItem {
  role: string;
  count: number;
  days: number;
  dailyRate: number;
  totalVariableCost: number;
  totalFixedCost: number;
  totalRoleCost: number;
}

export interface MarginHealth {
    level: 'Critical' | 'Caution' | 'Healthy' | 'Excellent';
    colorClass: string;
    description: string;
    guidance?: string;
}

export interface Risk {
    type: 'Financial' | 'Resource' | 'Scope';
    message: string;
}

export interface PricingRecommendations {
    breakEven: number;
    target20: number;
    optimal30: number;
}

export interface Financials {
  totalCost: number;
  profit: number;
  margin: number;
  costBreakdown: CostBreakdownItem[];
  marginHealth: MarginHealth;
  risks: Risk[];
  pricingRecommendations: PricingRecommendations;
  // BPPAF Metrics
  totalProjectDays: number;
  teamSize: number;
  seniorityMix: number; // as a percentage
  costPerDay: number;
}

const formatCurrencyForGuidance = (value: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
};

const getMarginHealth = (margin: number, totalCost: number, revenue: number): MarginHealth => {
    if (margin < 10) return { level: 'Critical', colorClass: 'text-brand-red', description: 'High risk - reject or renegotiate.' };
    if (margin < 20) {
        const targetRevenue = totalCost / 0.8;
        const priceIncrease = targetRevenue > revenue ? targetRevenue - revenue : 0;
        const guidance = `Consider increasing the price by ${formatCurrencyForGuidance(priceIncrease)} to reach the 20% margin target.`;
        return { 
            level: 'Caution', 
            colorClass: 'text-amber-500', 
            description: 'Acceptable for strategic reasons only.',
            guidance: guidance,
        };
    }
    if (margin >= 30) return { level: 'Excellent', colorClass: 'text-emerald-600', description: 'Strong profitability - ideal.' };
    return { level: 'Healthy', colorClass: 'text-emerald-600', description: 'Target range for standard projects.' };
};

const assessRisks = (scenario: Pick<Scenario, 'consultants'>, margin: number, totalProjectDays: number, totalConsultants: number): Risk[] => {
    const risks: Risk[] = [];
    if (margin < 15) {
        risks.push({ type: 'Financial', message: 'Thin Margin (<15%): Low buffer for unexpected costs or scope creep.' });
    }
    
    if (totalProjectDays < 10 && totalProjectDays > 0) {
        risks.push({ type: 'Scope', message: 'Duration Risk: Very short project (<10 days) may have high overhead or rushed delivery.' });
    }

    if (totalProjectDays > 100) {
        risks.push({ type: 'Scope', message: 'Duration Risk: Very long project (>100 days) may face scope creep and management challenges.' });
    }

    if (totalConsultants === 0) return risks;

    const seniorRoles = [ConsultantRole.SENIOR_IT, ConsultantRole.SENIOR_STRATEGY];
    const seniorConsultants = scenario.consultants
        .filter(c => c.role && seniorRoles.includes(c.role));
    const seniorConsultantCount = seniorConsultants.reduce((sum, c) => sum + c.count, 0);

    if (totalConsultants === 1) {
        risks.push({ type: 'Resource', message: 'Single Point of Failure: Project relies on only one consultant.' });
    } else if (totalConsultants > 2 && seniorConsultantCount === 1) {
         risks.push({ type: 'Resource', message: `Single Senior Point of Failure: Only one senior consultant is assigned, which could be a bottleneck.` });
    }

    const seniorMix = (seniorConsultantCount / totalConsultants) * 100;

    if (seniorMix > 70) {
        risks.push({ type: 'Resource', message: `Over-seniored (>70%): High cost, potentially inefficient team mix.` });
    }

    if (totalConsultants > 2 && seniorMix < 30) {
         risks.push({ type: 'Resource', message: `Under-seniored (<30%): Potential risk to quality, delivery, or client management.` });
    }
    
    return risks;
};


export const calculateFinancials = (scenario: Pick<Scenario, 'revenue' | 'consultants'>): Financials => {
  const costBreakdown: CostBreakdownItem[] = scenario.consultants.map((consultant) => {
    const profile = CONSULTANT_PROFILES[consultant.role];
    const dailyRate = profile.annualSalary / WORK_DAYS_PER_YEAR;
    const totalVariableCost = dailyRate * consultant.days * consultant.count;
    const totalFixedCost = profile.fixedCost * consultant.count;
    const totalRoleCost = totalVariableCost + totalFixedCost;

    return {
      role: consultant.role,
      count: consultant.count,
      days: consultant.days,
      dailyRate,
      totalVariableCost,
      totalFixedCost,
      totalRoleCost,
    };
  });

  const totalCost = costBreakdown.reduce((acc, item) => acc + item.totalRoleCost, 0);

  const profit = scenario.revenue - totalCost;
  const margin = scenario.revenue > 0 ? (profit / scenario.revenue) * 100 : 0;
  
  const teamSize = scenario.consultants.reduce((sum, c) => sum + c.count, 0);
  const totalProjectDays = scenario.consultants.reduce((sum, c) => sum + (c.days * c.count), 0);
  const costPerDay = totalProjectDays > 0 ? totalCost / totalProjectDays : 0;
  
  const seniorRoles = [ConsultantRole.SENIOR_IT, ConsultantRole.SENIOR_STRATEGY];
  const seniorConsultants = scenario.consultants
      .filter(c => c.role && seniorRoles.includes(c.role))
      .reduce((sum, c) => sum + c.count, 0);
  const seniorityMix = teamSize > 0 ? (seniorConsultants / teamSize) * 100 : 0;


  const marginHealth = getMarginHealth(margin, totalCost, scenario.revenue);
  const risks = assessRisks(scenario, margin, totalProjectDays, teamSize);
  const pricingRecommendations: PricingRecommendations = {
      breakEven: totalCost,
      target20: totalCost / 0.8,
      optimal30: totalCost / 0.7,
  };


  return { 
      totalCost, 
      profit, 
      margin, 
      costBreakdown, 
      marginHealth, 
      risks, 
      pricingRecommendations,
      totalProjectDays,
      teamSize,
      seniorityMix,
      costPerDay,
    };
};
