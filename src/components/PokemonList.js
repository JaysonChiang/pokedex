import React from "react"
import { Link } from 'react-router-dom'

const PokemonList = ({
    number,
    pokedex,
    addNumberClick,
    minuNumberClick,
    searchChange
}) => (
    <div>
        <button
            onClick={() => {
                addNumberClick(2);
            }}
        >
            +
        </button>
        <button
            onClick={() => {
                minuNumberClick(1);
            }}
        >
            -
        </button>
        <span>show {number}</span>
        <input
            type="text"
            onChange={e => {
                searchChange(e.target.value);
            }}
        />
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>MaxHP</th>
                    <th>MaxCP</th>
                    <th>FleeRate</th>
                </tr>
            </thead>
            <tbody>
                {pokedex.list.map(function(item) {
                    return (
                        <tr key={item.Number}>
                            <td>
                                <i className={`pki pkiAll n${+item.Number}`} />
                                {item.Number}
                            </td>
                            <td>
                                <Link to={`/detail/${item.Number}`}>
                                    {item.Name}
                                </Link>
                            </td>
                            <td>{item.Types}</td>
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
