import pokedexList from "../resources/pokedex-data.json";
import { SEARCH, ORDERBY } from "../actions";

const iniData = {
    list: pokedexList,
    orderType: {
        typename: "Number",
        isDesc: true
    }
};
const pokedex = (state = iniData, action) => {
    let list = [];
    switch (action.type) {
        case SEARCH:
            list = pokedexList.filter(function(pokemon) {
                return (
                    pokemon.Name.toLowerCase().indexOf(
                        action.text.toLowerCase()
                    ) >= 0
                );
            });
            return Object.assign({}, state, { list: list });

        case ORDERBY:
            list = [].concat(state.list).sort((a, b) => {
                var nameA = a[action.typename].toUpperCase(); // ignore upper and lowercase
                var nameB = b[action.typename].toUpperCase(); // ignore upper and lowercase
                var result = 0;
                if (nameA < nameB) {
                    result = -1;
                }
                if (nameA > nameB) {
                    result = 1;
                }

                // names must be equal
                if (state.orderType.isDesc) {
                    return result;
                } else {
                    return -result;
                }
            });

            let orderType = {
                typename: action.type,
                isDesc: !state.orderType.isDesc
            };
            return Object.assign({}, state, {
                list: list,
                orderType: orderType
            });

        default:
            return state;
    }
};

export default pokedex;
