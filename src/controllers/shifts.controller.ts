import { Response } from "express";
import { ShiftsService } from "../services";
import { EmptyRequest, OverlapShiftsRequest } from "../constants";

class ShiftsController {
  public shiftsService = new ShiftsService();

  public async listingShifts(req: EmptyRequest, res: Response): Promise<void> {
    const response = await this.shiftsService.listingShifts();
    res.status(response.statusCode).json(response);
  }

  public async overlapShifts(req: OverlapShiftsRequest, res: Response): Promise<void> {
    const response = await this.shiftsService.overlapShifts(req);
    res.status(response.statusCode).json(response);
  }
}

export const shiftsController = new ShiftsController();
