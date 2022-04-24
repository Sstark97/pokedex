export interface ChildrenProps {
    children?: React.ReactNode[] | React.ReactNode
};

export interface PokemonCardProps {
    name: string,
}

// API
export interface PokeApiResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonData[];
};

export interface PokemonData {
    name: string;
    url: string;
}

// Redux
export interface PokemonReducerObject {
    [key: string]: (state: PokemonInitialState, action: PokemonAction) => PokemonInitialState,
}

export interface PokemonInitialState {
    pokemonList: PokemonData[];
}
export interface PokemonAction {
    type: string;
    payload?: any;
}