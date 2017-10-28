import { LuaArray } from "@wowts/lua";
export declare function concat<T>(t: LuaArray<T>, seperator?: string): string;
export declare function insert<T>(t: LuaArray<T>, indexOrValue: number | T, value?: T): void;
export declare function sort<T>(t: LuaArray<T>, compare?: (left: T, right: T) => boolean): void;
export declare function remove<T>(t: LuaArray<T>, index?: number): T;
