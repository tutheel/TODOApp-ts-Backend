import { Router, Request, Response } from 'express';
import { TaskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get(
  '/tasks',
  async (req: Request, res: Response) => {
    const taskController = new TaskController();
    const alltasks = await taskController.getAll();
    res.json(alltasks).status(200);
  },
);

tasksRouter.post(
  '/tasks',
  async (req: Request, res: Response) => {},
);
