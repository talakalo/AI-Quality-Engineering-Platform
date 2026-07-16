import {
  Ajv2020,
  type ErrorObject,
  type ValidateFunction,
} from "ajv/dist/2020.js";

import capabilityContractSchema from "../schemas/capability-contract.schema.json" with { type: "json" };
import domainEventSchema from "../schemas/domain-event.schema.json" with { type: "json" };

export interface ContractValidationResult<T> {
  readonly valid: boolean;
  readonly value?: T;
  readonly errors: readonly ErrorObject[];
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat("date-time", {
  type: "string",
  validate: (value: string) => !Number.isNaN(Date.parse(value)),
});
const validators = {
  capabilityContract: ajv.compile(capabilityContractSchema),
  domainEvent: ajv.compile(domainEventSchema),
} satisfies Record<string, ValidateFunction>;

function validate<T>(
  validator: ValidateFunction,
  value: unknown,
): ContractValidationResult<T> {
  if (validator(value)) {
    return { valid: true, value: value as T, errors: [] };
  }
  return { valid: false, errors: validator.errors ?? [] };
}

export function validateCapabilityContract<T>(
  value: unknown,
): ContractValidationResult<T> {
  return validate<T>(validators.capabilityContract, value);
}

export function validateDomainEvent<T>(
  value: unknown,
): ContractValidationResult<T> {
  return validate<T>(validators.domainEvent, value);
}
