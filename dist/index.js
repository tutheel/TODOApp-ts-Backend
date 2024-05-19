"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const task_entity_1 = require("./src/tasks/task.entity");
const task_router_1 = require("./src/tasks/task.router");
//instantiate express app
const app = (0, express_1.default)();
//use cors
app.use((0, cors_1.default)());
dotenv_1.default.config();
// console.log(process.env); // Debugging ke liye yeh line add karein
//parse request body
app.use(body_parser_1.default.json());
//Create Database Connection
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [task_entity_1.Task],
    synchronize: true,
});
//Define a PORT
const PORT = process.env.PORT;
exports.AppDataSource.initialize()
    .then(() => {
    //Start listening to the Request on the defined port
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
app.use('/', task_router_1.tasksRouter);
