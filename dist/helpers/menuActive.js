"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectActive = void 0;
const objectActive = (activedMenu) => {
    let objectReturn = {
        all: false,
        cat: false,
        dog: false,
        fish: false
    };
    if (activedMenu !== "") {
        objectReturn[activedMenu] = true;
    }
    return objectReturn;
};
exports.objectActive = objectActive;
