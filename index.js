"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lua_1 = require("@wowts/lua");
function concat(t, seperator) {
    const result = [];
    for (let i = 1; t[i] !== undefined; i++) {
        result.push(t[i].toString());
    }
    return result.join(seperator || "");
}
exports.concat = concat;
function insert(t, indexOrValue, value) {
    const l = lua_1.lualength(t);
    if (typeof (indexOrValue) === "number") {
        for (let i = l; i >= indexOrValue; i--) {
            t[i + 1] = t[i];
        }
        if (value)
            t[indexOrValue] = value;
    }
    else {
        t[l + 1] = indexOrValue;
    }
}
exports.insert = insert;
function sort(t, compare) {
    let values = [];
    for (let i = 1;; i++) {
        if (!t[i])
            break;
        values.push(t[i]);
    }
    lua_1.wipe(t);
    if (compare) {
        values = values.sort((a, b) => a == b ? 0 : (compare(a, b) ? 1 : -1));
    }
    else {
        values = values.sort();
    }
    for (let i = 0; i < values.length; i++) {
        t[i + 1] = values[i];
    }
}
exports.sort = sort;
function remove(t, index) {
    const length = lua_1.lualength(t);
    const i = index || length;
    const value = t[i];
    for (let j = i; j < length; j++) {
        t[j] = t[j + 1];
    }
    delete t[length];
    return value;
}
exports.remove = remove;
