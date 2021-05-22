"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connection_1 = require("./database/connection");
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var authRoute_1 = __importDefault(require("./routes/authRoute"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
// middleware
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// view engine
app.set('view engine', 'ejs');
//set port and listen
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("server is listening on " + port); });
// database connection
connection_1.connect();
// routes
app.get('/', function (req, res) { return res.render('home'); });
app.get('/smoothies', function (req, res) { return res.render('smoothies'); });
app.use(authRoute_1.default);
