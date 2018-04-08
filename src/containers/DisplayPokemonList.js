import { connect } from "react-redux";
import { search, orderbytype } from "../actions";
import PokemonList from "../components/PokemonList";

const mapStateToProps = state => {
    return {
        pokedex: state.pokedex
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchChange: text => {
            dispatch(search(text));
        },
        orderByTypeClick: typename => {
            dispatch(orderbytype(typename));
        }
    };
};

const DisplayPokemonList = connect(mapStateToProps, mapDispatchToProps)(
    PokemonList
);

export default DisplayPokemonList;
