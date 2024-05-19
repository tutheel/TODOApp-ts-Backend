import { ValidationChain, body } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createvalidator: ValidationChain[] = [
  body('tittle')
    .not()
    .isEmpty()
    .withMessage('the taks title mandatory')
    .trim()
    .isString()
    .withMessage('title needs to be in text format'),
  body('description')
    .trim()
    .isString()
    .withMessage('description needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('the task date is Mandatory')
    .isString()
    .withMessage('the task date should be in valid format'),
  body('priority')
    .trim()
    .isIn([Priority.low, Priority.normal, Priority.high])
    .withMessage('Priority can only be normal, low & high'),
  body('status')
    .trim()
    .isIn([
      Status.completed,
      Status.inProgress,
      Status.todo,
    ])
    .withMessage(
      'Status can only be todo, InProgres & Completed',
    ),
];
