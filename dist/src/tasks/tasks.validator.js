"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createvalidator = void 0;
const express_validator_1 = require("express-validator");
const Priority_1 = require("../enums/Priority");
const Status_1 = require("../enums/Status");
exports.createvalidator = [
    (0, express_validator_1.body)('tittle')
        .not()
        .isEmpty()
        .withMessage('the taks title mandatory')
        .trim()
        .isString()
        .withMessage('title needs to be in text format'),
    (0, express_validator_1.body)('description')
        .trim()
        .isString()
        .withMessage('description needs to be in text format'),
    (0, express_validator_1.body)('date')
        .not()
        .isEmpty()
        .withMessage('the task date is Mandatory')
        .isString()
        .withMessage('the task date should be in valid format'),
    (0, express_validator_1.body)('priority')
        .trim()
        .isIn([Priority_1.Priority.low, Priority_1.Priority.normal, Priority_1.Priority.high])
        .withMessage('Priority can only be normal, low & high'),
    (0, express_validator_1.body)('status')
        .trim()
        .isIn([
        Status_1.Status.completed,
        Status_1.Status.inProgress,
        Status_1.Status.todo,
    ])
        .withMessage('Status can only be todo, InProgres & Completed'),
];
