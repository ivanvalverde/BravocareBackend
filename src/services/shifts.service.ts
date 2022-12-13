import { getShift, getShifts } from "../config/queries";
import { STATUS_MESSAGES } from "../constants/enums";
import { OverlapShiftsRequest } from "../constants/interfaces";
import { Shifts, Time, ValidatedResponse } from "../constants/types";
import { validation } from "../utils/validation";

export class ShiftsService {
  public async listingShifts(): Promise<ValidatedResponse> {
    try {
      const response = await getShifts();
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

  public async overlapShifts(req: OverlapShiftsRequest): Promise<ValidatedResponse> {
    const emptyParamsResponse = validation.validateIfQueryParamsArentEmpty(
      req.query.firstShift,
      req.query.secondShift
    );
    if (emptyParamsResponse.error) return emptyParamsResponse;
    let firstShiftData: Shifts[];
    let secondShiftData: Shifts[];
    try {
      firstShiftData = await getShift(Number(req.query.firstShift));
      secondShiftData = await getShift(Number(req.query.secondShift));
    } catch {
      return {
        statusCode: 500,
        message: STATUS_MESSAGES.INTERNAL_SERVER_ERROR,
        error: true,
      };
    }
    const maxOverlapthreshold =
      firstShiftData[0]?.facility_id === secondShiftData[0]?.facility_id
        ? 30
        : 0;

    const firstStartHours = Number(firstShiftData[0].start_time.slice(0, 2));
    const secondStartHours = Number(secondShiftData[0].start_time.slice(0, 2));
    const firstStartMinutes = Number(firstShiftData[0].start_time.slice(3, 5));
    const secondStartMinutes = Number(
      secondShiftData[0].start_time.slice(3, 5)
    );
    let firstShift: string[];
    let secondShift: string[];

    if (
      firstStartHours > secondStartHours ||
      (firstStartHours === secondStartHours &&
        firstStartMinutes > secondStartMinutes)
    ) {
      firstShift = [secondShiftData[0].start_time, secondShiftData[0].end_time];
      secondShift = [firstShiftData[0].start_time, firstShiftData[0].end_time];
    } else {
      firstShift = [firstShiftData[0].start_time, firstShiftData[0].end_time];
      secondShift = [
        secondShiftData[0].start_time,
        secondShiftData[0].end_time,
      ];
    }

    const firstShiftEndTime: Time = {
      hours: Number(firstShift[1].slice(0, 2)),
      minutes: Number(firstShift[1].slice(3, 5)),
    };
    const secondShiftStartTime: Time = {
      hours: Number(secondShift[0].slice(0, 2)),
      minutes: Number(firstShift[0].slice(3, 5)),
    };

    const overlapHours = firstShiftEndTime.hours - secondShiftStartTime.hours;
    const overlapMinutes =
      firstShiftEndTime.minutes - secondShiftStartTime.minutes;
    const overlapTime = overlapHours * 60 + overlapMinutes;
    return {
      statusCode: 200,
      message: STATUS_MESSAGES.CALCULATED_SUCCESSFULY,
      error: false,
      data: {
        maxOverlapthreshold,
        overlapTime: overlapTime < 0 ? 0 : overlapTime,
        exceedsOverlapThreshold: overlapTime > maxOverlapthreshold,
      },
    };
  }
}
