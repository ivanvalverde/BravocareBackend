import { Response } from "express";
import { CoWorkersRequest, EmptyRequest } from "../constants";
import { QuestionsService } from "../services";

class QuestionsController {
  public questionsService = new QuestionsService();

  public async listingRemainingSpots(req: EmptyRequest, res: Response): Promise<void> {
    const response = await this.questionsService.listingRemainingSpots();
    res.status(response.statusCode).json(response);
  }

  public async listingCoWorkers(req: CoWorkersRequest, res: Response): Promise<void> {
    const response = await this.questionsService.listingCoWorkers(req);
    res.status(response.statusCode).json(response);
  }
}

export const questionsController = new QuestionsController();
