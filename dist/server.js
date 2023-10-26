"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(path_1.default.join(__dirname, 'views')));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/node_modules', express_1.default.static(__dirname + '/node_modules'));
server.use('/', routes_1.default);
server.use((req, res) => {
    res.render('pages/404');
});
server.listen(process.env.PORT);
