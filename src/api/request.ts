import api from './config';
import { PokeApiResponse } from '../types/global.type';
import { Pokemon } from '../types/pokemon.type';

export const getPokemons = async (limit: number = 156): Promise<PokeApiResponse> => {
    const response = await api.get<PokeApiResponse>(`pokemon?limit=${limit}`);
    return response.data;
};

export const getPokemonDetails = async (url: string): Promise<Pokemon> => {
    const response = await api.get<Pokemon>(url);
    return response.data;
}