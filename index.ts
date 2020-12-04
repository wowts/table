import { LuaArray, wipe, lualength } from "@wowts/lua";

export function concat<T extends { toString(): string }>(
    t: LuaArray<T>,
    seperator?: string
): string {
    const result: string[] = [];
    for (let i = 1; t[i] !== undefined; i++) {
        result.push(t[i].toString());
    }

    return result.join(seperator || "");
}

export function insert<T>(t: LuaArray<T>, indexOrValue: number | T, value?: T) {
    const l = lualength(t);
    if (typeof indexOrValue === "number") {
        for (let i = l; i >= indexOrValue; i--) {
            t[i + 1] = t[i];
        }
        if (value) t[indexOrValue] = value;
    } else {
        t[l + 1] = indexOrValue;
    }
}

export function sort<T>(
    t: LuaArray<T>,
    compare?: (left: T, right: T) => boolean
) {
    let values: T[] = [];
    for (let i = 1; ; i++) {
        if (!t[i]) break;
        values.push(t[i]);
    }
    wipe(t);
    if (compare) {
        values = values.sort((a, b) => (a == b ? 0 : compare(a, b) ? 1 : -1));
    } else {
        values = values.sort();
    }
    for (let i = 0; i < values.length; i++) {
        t[i + 1] = values[i];
    }
}

export function remove<T>(t: LuaArray<T>, index?: number): T {
    const length = lualength(t);
    const i = index || length;
    const value = t[i];
    for (let j = i; j < length; j++) {
        t[j] = t[j + 1];
    }
    delete t[length];
    return value;
}
