import { Request, Response } from 'express';
import { Task } from './task.entity';
import { AppDataSource } from '../..';
import { instanceToPlain } from 'class-transformer';

class TaskController {
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Declare a variablet to hold all the tasks
    let allTasks: Task[];

    //fetch all the tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',
        },
      });

      //Convert the tasks instance to the array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (_error) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }
  }
}

export const taskController = new TaskController();
