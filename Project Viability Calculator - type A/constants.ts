import { ConsultantProfile, ConsultantRole } from './types';

export const WORK_DAYS_PER_YEAR = 220;

export const CONSULTANT_PROFILES: Record<ConsultantRole, ConsultantProfile> = {
  [ConsultantRole.STRATEGY]: {
    annualSalary: 27000,
    fixedCost: 500,
  },
  [ConsultantRole.SENIOR_STRATEGY]: {
    annualSalary: 40000,
    fixedCost: 1000,
  },
  [ConsultantRole.IT]: {
    annualSalary: 24000,
    fixedCost: 500,
  },
  [ConsultantRole.SENIOR_IT]: {
    annualSalary: 37000,
    fixedCost: 1000,
  },
};
