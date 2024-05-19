"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const Status_1 = require("../enums/Status");
const Priority_1 = require("../enums/Priority");
let Task = exports.Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
    })
], Task.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'longtext',
    })
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Priority_1.Priority,
        default: Priority_1.Priority.normal,
    })
], Task.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Status_1.Status,
        default: Status_1.Status.todo,
    })
], Task.prototype, "status", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
