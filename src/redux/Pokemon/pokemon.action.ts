import { PokemonActions } from "./pokemon.type";

export const setPokemon = (payload: any) => ({
    type: PokemonActions.SET_POKEMONS,
    payload,
});
