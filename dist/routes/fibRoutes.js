"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fibControllers_1 = require("../controllers/fibControllers");
const fibonacciTimer_1 = require("../services/fibonacciTimer");
const router = (0, express_1.Router)();
router.post('/', fibonacciTimer_1.fibonacciTimer, fibControllers_1.fetchFibonacci);
exports.default = router;
//# sourceMappingURL=fibRoutes.js.map