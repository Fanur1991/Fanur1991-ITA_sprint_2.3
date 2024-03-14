"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fibRoutes_1 = __importDefault(require("./routes/fibRoutes"));
const app = (0, express_1.default)();
const PORT = 3001 || 3002;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', fibRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
//# sourceMappingURL=index.js.map