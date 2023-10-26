"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const express_1 = __importDefault(require("express"));
const menuActive_1 = require("../helpers/menuActive");
const pet_1 = require("../models/pet");
const app = (0, express_1.default)();
const search = (req, res) => {
    let busca = req.query.q;
    if (busca == '') {
        res.redirect('/');
        return;
    }
    let list = pet_1.PetManipulation.getName(busca);
    res.render('pages/pages', {
        menu: (0, menuActive_1.objectActive)(''),
        list,
        busca
    });
};
exports.search = search;
