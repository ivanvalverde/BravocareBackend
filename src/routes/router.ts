import { Router, Response } from 'express';
import { EmptyRequest, OverlapShiftsRequest } from '../constants/interfaces';
import { shiftsController } from '../controllers/shifts.controller';

const router: Router = Router();

router.get('/shifts', (req: EmptyRequest, res: Response) => {
    shiftsController.listingShifts(req, res);
});

router.get('/shifts/overlap', (req: OverlapShiftsRequest, res: Response) => {
    shiftsController.overlapShifts(req, res);
});

export { router };