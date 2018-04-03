import pokedexList from "../resources/pokedex-data.json";
import { SEARCH } from "../actions";

let initData = {
    list:pokedexList
}
const pokedex = (state = initData, action) => {
    switch (action.type) {
        case SEARCH:
            return initData.list.filter(function(pokemon) {
                return pokemon.Name.indexOf(action.text) >= 0;
            });

        default:
            return state;
    }
};

export default pokedex;
