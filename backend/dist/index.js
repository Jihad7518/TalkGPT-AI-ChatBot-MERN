"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const conection_1 = require("./db/conection");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 5000;
(0, conection_1.connectToDatabase)()
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT} and connected to MONGODB`);
    });
})
    .catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
});
//# sourceMappingURL=index.js.map