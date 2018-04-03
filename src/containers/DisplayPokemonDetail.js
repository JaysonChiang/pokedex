import { connect } from "react-redux";
import PokemonDetail from "../components/PokemonDetail";

const mapStateToProps = (state, ownProps) => {
    
    const detail = state.pokedex.list.filter(item => {
        return item.Number === ownProps.match.params.number;
    })[0];

    return {
        detail
    };
};

const DisplayPokemonDetail = connect(mapStateToProps, {})(
    PokemonDetail
);

export default DisplayPokemonDetail;
