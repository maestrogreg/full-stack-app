"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = require("../controllers/authController");
var router = express_1.default.Router();
/**
 * sign up routes
 */
router.get('/signup', authController_1.getSignup);
router.post('/signup', authController_1.signupPost);
/**
 * login routes
 */
router.get('/login', authController_1.getLogin);
router.post('/login', authController_1.postLogin);
exports.default = router;
