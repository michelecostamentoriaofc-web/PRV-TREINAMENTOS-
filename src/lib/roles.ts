export type UserRole =
  | "GLOBAL_ADMIN"
  | "COMPANY_ADMIN"
  | "INSTRUCTOR"
  | "STUDENT"
  | "AFFILIATE"
  | "BUSINESS_PARTNER"
  | "SUPPORT";

export const roleLabels: Record<UserRole, string> = {
  GLOBAL_ADMIN: "Global Administrator",
  COMPANY_ADMIN: "Company Administrator",
  INSTRUCTOR: "Instructor",
  STUDENT: "Student",
  AFFILIATE: "Affiliate",
  BUSINESS_PARTNER: "Business Partner",
  SUPPORT: "Support",
};

export const ownerOnlyRoles: UserRole[] = ["GLOBAL_ADMIN"];
