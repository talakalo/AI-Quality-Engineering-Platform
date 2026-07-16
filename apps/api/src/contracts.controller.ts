import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from "@nestjs/common";
import { validateDomainEvent } from "@autoqa/contracts";

export interface ValidationResponse {
  readonly valid: true;
}

@Controller("v1/contracts")
export class ContractsController {
  @Post("domain-events/validate")
  validateEvent(@Body() body: unknown): ValidationResponse {
    const result = validateDomainEvent(body);
    if (!result.valid) {
      throw new UnprocessableEntityException({
        code: "invalid_domain_event",
        errors: result.errors.map(({ instancePath, keyword, message }) => ({
          instancePath,
          keyword,
          message,
        })),
      });
    }
    return { valid: true };
  }
}
