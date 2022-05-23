"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceZIndex = exports.getZIndex = void 0;
const vue_1 = require("vue");
const ZIndex = (0, vue_1.ref)(2000);
const getZIndex = () => {
    return ZIndex.value++;
};
exports.getZIndex = getZIndex;
const reduceZIndex = () => {
    ZIndex.value -= 1;
};
exports.reduceZIndex = reduceZIndex;
