import { Request } from "express";

export interface EmptyRequest extends Request<{}, {}, {}, {}> {}

export interface OverlapShiftsRequest extends Request<{}, {}, {}, QueryParametersOverlapShifts> {}

export interface QueryParametersOverlapShifts {
  firstShift: string;
  secondShift: string;
}