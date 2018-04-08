import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokedex, searchChange, orderByTypeClick }) => (
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                </p>
                <input
            type="text"
            onChange={e => {
                searchChange(e.target.value);
            }}
        />
            </div>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th
                        onClick={() => {
                            orderByTypeClick("Number");
                            console.log(pokedex);
                        }}
                    >
                        #
                    </th>
                    <th
                        onClick={() => {
                            orderByTypeClick("Name");
                            console.log(pokedex);
                        }}
                    >
                        Name
                    </th>
                    <th>Type</th>
                    <th>MaxHP</th>
                    <th>MaxCP</th>
                    <th>FleeRate</th>
                </tr>
            </thead>
            <tbody>
                {pokedex.list.map(function(item, idx) {
                    return (
                        <tr key={idx}>
                            <td>
                                <i className={`pki pkiAll n${+item.Number}`} />
                                {item.Number}
                            </td>
                            <td>
                                <Link to={`/detail/${item.Number}`}>
                                    {item.Name}
                                </Link>
                            </td>
                            <td>
                                {item.Types.map(t => (
                                    <span
                                        key={t}
                                        class="badge badge-pill badge-primary"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </td>
                            <td>{item.MaxHP}</td>
                            <td>{item.MaxCP}</td>
                            <td>{item.FleeRate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

export default PokemonList;
/*
{
    "Number":"001",
    "Name":"Bulbasaur",
    "Classification":"Seed Pokèmon",
    "Types":["Grass","Poison"],
    "Resistant":["Water","Electric","Grass","Fighting","Fairy"],
    "Weaknesses":["Fire","Ice","Flying","Psychic"],
    "Fast Attack(s)":[
        {"Name":"Tackle","Type":"Normal","Damage":12},
        {"Name":"Vine Whip","Type":"Grass","Damage":7}
        ],
    "Special Attack(s)":[
        {"Name":"Power Whip","Type":"Grass","Damage":70},
        {"Name":"Seed Bomb","Type":"Grass","Damage":40},
        {"Name":"Sludge Bomb","Type":"Poison","Damage":55}
    ],
    "Weight":{"Minimum":"6.04kg","Maximum":"7.76kg"},
    "Height":{"Minimum":"0.61m","Maximum":"0.79m"},
    "FleeRate":0.1,
    "Next Evolution Requirements":{"Amount":25,"Name":"Bulbasaur candies"},
    "Next evolution(s)":[
        {"Number":2,"Name":"Ivysaur"},
        {"Number":3,"Name":"Venusaur"}
    ],
    "MaxCP":951,"MaxHP":1071
}
*/
