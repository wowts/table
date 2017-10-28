"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const index_1 = require("./index");
ava_1.test("concat an array without separator", t => {
    // Arrange
    const array = { 1: "first", 2: "second" };
    // Act
    const result = index_1.concat(array);
    // Assert
    t.is(result, "firstsecond");
});
ava_1.test("concat an array with a separator", t => {
    // Arrange
    const array = { 1: "first", 2: "second", 3: "third" };
    // Act
    const result = index_1.concat(array, ",");
    // Assert
    t.is(result, "first,second,third");
});
ava_1.test("insert an item at end", t => {
    // Arrange
    const array = { 1: "first", 2: "second" };
    // Act
    index_1.insert(array, "third");
    // Assert
    t.deepEqual(array, { 1: "first", 2: "second", 3: "third" });
});
ava_1.test("insert an item at the beginning", t => {
    // Arrange
    const array = { 1: "first", 2: "second" };
    // Act
    index_1.insert(array, 1, "third");
    // Assert
    t.deepEqual(array, { 1: "third", 2: "first", 3: "second" });
});
ava_1.test("sort with default sort", t => {
    // Arrange
    const array = { 1: "B", 2: "A", 3: "C" };
    // Act
    index_1.sort(array);
    // Assert
    t.deepEqual(array, { 1: "A", 2: "B", 3: "C" });
});
ava_1.test("sort with custom sort", t => {
    // Arrange
    const array = { 1: "B", 2: "A", 3: "C" };
    // Act
    index_1.sort(array, (left, right) => left < right);
    // Assert
    t.deepEqual(array, { 1: "C", 2: "B", 3: "A" });
});
ava_1.test("remove an element at the end", t => {
    // Arrange
    const array = { 1: "A", 2: "B", 3: "C" };
    // Act
    const result = index_1.remove(array);
    // Assert
    t.is(result, "C");
    t.deepEqual(array, { 1: "A", 2: "B" });
});
ava_1.test("remove an element at the beginning", t => {
    // Arrange
    const array = { 1: "A", 2: "B", 3: "C" };
    // Act
    const result = index_1.remove(array, 1);
    // Assert
    t.is(result, "A");
    t.deepEqual(array, { 1: "B", 2: "C" });
});
