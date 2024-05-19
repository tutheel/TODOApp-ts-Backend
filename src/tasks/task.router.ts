import { Router, Request, Response } from 'express';
import { createvalidator } from './tasks.validator';
import { validationResult } from 'express-validator';
import { taskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', taskController.getAll);

tasksRouter.post(
  '/tasks',
  createvalidator,

  //@ts-ignore
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
  },
);
