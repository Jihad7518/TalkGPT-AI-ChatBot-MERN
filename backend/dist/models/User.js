"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = require("crypto");
const chatSchema = new mongoose_1.default.Schema({
    id: {
        type: "string",
        default: (0, crypto_1.randomUUID)(),
    },
    role: {
        type: "string",
        required: true,
    },
    content: {
        type: "string",
        required: true,
    },
});
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true,
        unique: true
    },
    password: {
        type: "string",
        required: true,
    },
    chats: [chatSchema],
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=User.js.map