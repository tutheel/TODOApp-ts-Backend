import {
  createValidator,
  updateValidator,
} from './tasks.validator';

import { Router } from 'express';
import { taskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', taskController.getAll);

tasksRouter.post(
  '/tasks',
  createValidator,
  taskController.create,
);

tasksRouter.put(
  '/tasks',
  updateValidator,
  taskController.update,
);
