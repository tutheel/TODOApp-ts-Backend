"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const task_entity_1 = require("./task.entity");
const __1 = require("../..");
const class_transformer_1 = require("class-transformer");
const validation_result_1 = require("express-validator/src/validation-result");
class TaskController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Declare a variablet to hold all the tasks
            let allTasks;
            //fetch all the tasks using the repository
            try {
                allTasks = yield __1.AppDataSource.getRepository(task_entity_1.Task).find({
                    order: {
                        date: 'ASC',
                    },
                });
                //Convert the tasks instance to the array of objects
                allTasks = (0, class_transformer_1.instanceToPlain)(allTasks);
                return res.json(allTasks).status(200);
            }
            catch (_error) {
                return res
                    .json({ error: 'Internal Server Error' })
                    .status(500);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, validation_result_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ errors: errors.array() });
            }
            //Create new instance of the Task Object
            const newTask = new task_entity_1.Task();
            //adding all the Required properties to the Task Object
            newTask.title = req.body.title;
            newTask.date = req.body.date;
            newTask.description = req.body.description;
            newTask.priority = req.body.priority;
            newTask.status = req.body.status;
            //add the new Task to the database
            let createdTask;
            try {
                createdTask = yield __1.AppDataSource.getRepository(task_entity_1.Task).save(newTask);
                //converting the task instance to an object
                createdTask = (0, class_transformer_1.instanceToPlain)(createdTask);
                return res.json(createdTask).status(201);
            }
            catch (error) {
                return res
                    .json({ error: 'Internal Server Error' })
                    .status(500);
            }
        });
    }
}
exports.taskController = new TaskController();
