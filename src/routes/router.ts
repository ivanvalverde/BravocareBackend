import { Router, Response } from 'express';
import { CoWorkersRequest, EmptyRequest, OverlapShiftsRequest } from '../constants';
import { questionsController, shiftsController } from '../controllers';

const router: Router = Router();

router.get('/shifts', (req: EmptyRequest, res: Response) => {
    shiftsController.listingShifts(req, res);
});

router.get('/shifts/overlap', (req: OverlapShiftsRequest, res: Response) => {
    shiftsController.overlapShifts(req, res);
});

router.get('/remaining-spots', (req: EmptyRequest, res: Response) => {
    questionsController.listingRemainingSpots(req, res);
});

router.get('/co-workers', (req: CoWorkersRequest, res: Response) => {
    questionsController.listingCoWorkers(req, res);
});

export { router };