import { Request } from "express";

export interface EmptyRequest extends Request<{}, {}, {}, {}> {}

export interface OverlapShiftsRequest extends Request<{}, {}, {}, QueryParametersOverlapShifts> {}

export interface CoWorkersRequest extends Request<{}, {}, {}, QueryParametersCoWorkers> {}

export interface QueryParametersOverlapShifts {
  firstShift: string;
  secondShift: string;
}

export interface QueryParametersCoWorkers {
  facilityName?: string;
  nurseName?: string;
}