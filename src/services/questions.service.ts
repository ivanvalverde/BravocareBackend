import { getCoWorkers, getRemainingSpots } from "../config/queries";
import { CoWorkersRequest, STATUS_MESSAGES } from "../constants";
import { ValidatedResponse } from "../constants";

export class QuestionsService {
    public async listingRemainingSpots(): Promise<ValidatedResponse> {
      try {
        const response = await getRemainingSpots();
        return {
          statusCode: 200,
          message: STATUS_MESSAGES.FETCHED_SUCCESSFULLY,
          error: false,
          data: response,
        };
      } catch {
        return {
          statusCode: 500,
          message: STATUS_MESSAGES.INTERNAL_SERVER_ERROR,
          error: true,
        };
      }
    }

    public async listingCoWorkers(req: CoWorkersRequest): Promise<ValidatedResponse> {
        try {
          const response = await getCoWorkers(req.query.facilityName, req.query.nurseName);
          return {
            statusCode: 200,
            message: STATUS_MESSAGES.FETCHED_SUCCESSFULLY,
            error: false,
            data: response,
          };
        } catch {
          return {
            statusCode: 500,
            message: STATUS_MESSAGES.INTERNAL_SERVER_ERROR,
            error: true,
          };
        }
      }
}