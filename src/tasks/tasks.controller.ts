import { Task } from './task.entity';
import { AppDataSource } from '../..';
import { instanceToPlain } from 'class-transformer';

export class TaskController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {
    // Declare a variablet to hold all the tasks
    let allTasks: Task[];

    //fetch all the tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      //Convert the tasks instance to the array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
