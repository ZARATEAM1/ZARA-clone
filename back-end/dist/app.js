"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
app.get('/', (req, res) => {
    return res.send("yeah");
});
app.listen(PORT, () => {
    console.log("Application listening at http://localhost:3000");
});
