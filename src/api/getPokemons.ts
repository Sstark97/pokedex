import api from './config';
import { PokeApiResponse } from '../types/global.type';

export const getPokemons = async (limit: number = 156): Promise<PokeApiResponse> => {
    const response = await api.get<PokeApiResponse>(`pokemon?limit=${limit}`);
    return response.data;
};