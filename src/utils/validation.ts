import { STATUS_MESSAGES } from "../constants/enums";
import { ValidatedResponse } from "../constants/types";

class Validation {
  public validateIfQueryParamsArentEmpty(
    firstParam: string,
    secondParam: string
  ): ValidatedResponse {
    const response: ValidatedResponse = {
      statusCode: 200,
      message:
        STATUS_MESSAGES.FETCHED_SUCCESSFULLY,
        error: false
    };
    if (!firstParam || !secondParam) {
        response.error = true;
        response.message = STATUS_MESSAGES.EMPTY_PARAMETERS_ERROR;
        response.statusCode = 400;
    }
    return response;
  }
}

export const validation = new Validation();
