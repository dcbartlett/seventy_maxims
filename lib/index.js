"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maxims_1 = __importDefault(require("./maxims"));
function getMaxim(id, fullMaxim) {
    let parsedID = id;
    if (typeof parsedID === "string") {
        parsedID = parseInt(parsedID);
    }
    const random = getRandomIntInclusive(0, 69);
    const maximID = (parsedID - 1) >= 0 ? (parsedID - 1) : random;
    if (fullMaxim) {
        return maxims_1.default[maximID];
    }
    return maxims_1.default[maximID].content;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = {
    MAXIMS: maxims_1.default,
    getMaxim
};
//# sourceMappingURL=index.js.map