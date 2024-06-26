"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRouter = void 0;
const express_1 = require("express");
const tasks_validator_1 = require("./tasks.validator");
const tasks_controller_1 = require("./tasks.controller");
const domain_1 = require("domain");
exports.tasksRouter = (0, express_1.Router)();
exports.tasksRouter.get('/tasks', tasks_controller_1.taskController.getAll);
exports.tasksRouter.post('/tasks', tasks_validator_1.createvalidator, domain_1.create);
