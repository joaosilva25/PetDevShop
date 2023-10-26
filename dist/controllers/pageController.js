"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishController = exports.dogController = exports.catController = exports.home = void 0;
const express_1 = __importDefault(require("express"));
const menuActive_1 = require("../helpers/menuActive");
const pet_1 = require("../models/pet");
const app = (0, express_1.default)();
const home = (req, res) => {
    let list = pet_1.PetManipulation.getAll();
    res.render('pages/pages', {
        menu: (0, menuActive_1.objectActive)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const catController = (req, res) => {
    let list = pet_1.PetManipulation.getType('cat');
    res.render('pages/pages', {
        menu: (0, menuActive_1.objectActive)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.catController = catController;
const dogController = (req, res) => {
    let list = pet_1.PetManipulation.getType('dog');
    res.render('pages/pages', {
        menu: (0, menuActive_1.objectActive)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogController = dogController;
const fishController = (req, res) => {
    let list = pet_1.PetManipulation.getType('fish');
    res.render('pages/pages', {
        menu: (0, menuActive_1.objectActive)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishController = fishController;
