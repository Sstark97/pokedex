import { PokemonActions } from "./pokemon.type";
import { PokemonAction, PokemonReducerObject, PokemonInitialState } from "../../types/global.type";

const initialState: PokemonInitialState = {
    pokemonList: [],
}

const pokemonReducerObject: PokemonReducerObject = {
    [PokemonActions.SET_POKEMONS]: (state: PokemonInitialState, action: PokemonAction): PokemonInitialState => ({
        ...state,
        pokemonList: action.payload
    }),
};


const pokemonReducer = (state: PokemonInitialState = initialState, action: PokemonAction) => {
    return pokemonReducerObject[action.type] ? pokemonReducerObject[action.type](state, action) : state ?? state;
}

export default pokemonReducer;