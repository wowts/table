import { test } from "ava";
import { LuaArray } from "@wowts/lua";
import { concat, insert, sort, remove } from "./index";
test("concat an array without separator", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 2: "second" };

    // Act
    const result = concat(array);

    // Assert
    t.is(result, "firstsecond");
});

test("concat an array with a separator", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 2: "second", 3: "third" };

    // Act
    const result = concat(array, ",");

    // Assert
    t.is(result, "first,second,third");
});

test("insert an item at end", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 2: "second" };

    // Act
    insert(array, "third");

    // Assert
    t.deepEqual(array, { 1: "first", 2: "second", 3: "third" });
});

test("insert an item at the beginning", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "first", 2: "second" };

    // Act
    insert(array, 1, "third");

    // Assert
    t.deepEqual(array, { 1: "third", 2: "first", 3: "second" });
});

test("sort with default sort", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "B", 2: "A", 3: "C" };

    // Act
    sort(array);

    // Assert
    t.deepEqual(array, { 1: "A", 2: "B", 3: "C" });
});

test("sort with custom sort", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "B", 2: "A", 3: "C" };

    // Act
    sort(array, (left, right) => left < right);

    // Assert
    t.deepEqual(array, { 1: "C", 2: "B", 3: "A" });
});

test("remove an element at the end", t => {
     // Arrange
     const array:LuaArray<string> = { 1: "A", 2: "B", 3: "C" };
     
    // Act
    const result = remove(array);

    // Assert
    t.is(result, "C");
    t.deepEqual(array, { 1: "A", 2: "B" });
});

test("remove an element at the beginning", t => {
    // Arrange
    const array:LuaArray<string> = { 1: "A", 2: "B", 3: "C" };
    
   // Act
   const result = remove(array, 1);

   // Assert
   t.is(result, "A");
   t.deepEqual(array, { 1: "B", 2: "C" });
});