export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const SEARCH = "SEARCH";
export const ORDERBY = "ORDERBY";
export const REQUEST_POKEMON = "REQUEST_POKEMON";


export const search = text => {
    return { type: SEARCH, text };
};

export const orderbytype = typename => {
    return { type: ORDERBY, typename };
};
