import { connect } from "react-redux";
import { addNumber, minuNumber, search } from "../actions";
import  PokemonList  from "../components/PokemonList";

const mapStateToProps = state => {
    return {
        number: state.number,
        pokedex: state.pokedex
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNumberClick: num => {
            dispatch(addNumber(num))
        },
        minuNumberClick: num =>{
            dispatch(minuNumber(num))
        },
        searchChange: text=>{
            dispatch(search(text))
        }
    };
};

const DisplayPokemonList = connect(mapStateToProps, mapDispatchToProps)(PokemonList);

export default DisplayPokemonList;
