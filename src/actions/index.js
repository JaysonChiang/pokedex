export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const SEARCH = "SEARCH";
export const REQUEST_POKEMON = "REQUEST_POKEMON";

export function addNumber(num) {
    return { type: INCREMENT, num };
}

export function minuNumber(num) {
    return { type: DECREMENT, num };
}

export const search = text => {
    return { type: SEARCH, text };
};