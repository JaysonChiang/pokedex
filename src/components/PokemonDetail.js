import React from "react";

const PokemonDetail = props => {
    const detail = props.detail;
    const imgsrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
        detail.Number
    }.png`;
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center">
                        {" "}{detail.Name} #{detail.Number}{" "}
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="img-fluid" src={imgsrc} alt={detail.Name} />
                </div>
                <div class="col-sm-6">
                    <div>
                        <h4>Class</h4>
                        {detail.Classification}
                    </div>
                    <div>
                        <h4>Types</h4>

                        {detail.Types.map(t => (
                            <span
                                key={t}
                                class="badge badge-pill badge-primary"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div>
                        <h4>Resistant </h4>{" "}
                        {detail.Resistant.map(t => (
                            <span
                                key={t}
                                class="badge badge-pill badge-primary"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div>
                        <h4>Weaknesses</h4>{" "}
                        {detail.Weaknesses.map(t => (
                            <span
                                key={t}
                                class="badge badge-pill badge-primary"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
