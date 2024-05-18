import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';

import bodyParser from 'body-parser';
import { Task } from './src/tasks/task.entity';
import { tasksRouter } from './src/tasks/task.router';

//instantiate express app
const app: Express = express();

//use cors
app.use(cors());

dotenv.config();
// console.log(process.env); // Debugging ke liye yeh line add karein

//parse request body
app.use(bodyParser.json());

//Create Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

//Define a PORT
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    //Start listening to the Request on the defined port
    app.listen(PORT, () => {
      console.log(
        `Server is running at http://localhost:${PORT}`,
      );
    });
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });

app.use('/', tasksRouter);
