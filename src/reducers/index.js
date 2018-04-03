import {combineReducers} from 'redux'
import number from './number'
import pokedex from  './pokedex'

const rootReducer = combineReducers({
    number,
    pokedex
})

export default rootReducer