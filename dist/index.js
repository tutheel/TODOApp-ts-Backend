"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//instantiate express app
const app = (0, express_1.default)();
dotenv_1.default.config();
//Define a PORT
const PORT = process.env.PORT;
//crete a default route
app.get("/", (req, res) => {
    res.send("Typescript + nodejs");
});
//Start listening to the Request on the defined port
app.listen(PORT);
