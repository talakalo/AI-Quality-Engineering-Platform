export type Brand<TValue, TBrand extends string> = TValue & {
  readonly __brand: TBrand;
};

export type OrganizationId = Brand<string, "OrganizationId">;
export type ProjectId = Brand<string, "ProjectId">;
export type ApplicationId = Brand<string, "ApplicationId">;
export type CapabilityId = Brand<`CAP-${number}`, "CapabilityId">;
export type QualityRunId = Brand<string, "QualityRunId">;
export type CorrelationId = Brand<string, "CorrelationId">;

const CAPABILITY_ID_PATTERN = /^CAP-\d+$/;

export function capabilityId(value: string): CapabilityId {
  if (!CAPABILITY_ID_PATTERN.test(value)) {
    throw new Error(`Invalid capability ID: ${value}`);
  }

  return value as CapabilityId;
}
