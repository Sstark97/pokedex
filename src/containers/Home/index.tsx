import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import PokemonCard from '../../components/PokemonCard';
import { getPokemons, getPokemonDetails } from '../../api/request';
import { useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/Pokemon/pokemon.action';
import { PokeApiResponse } from '../../types/global.type';
import { Pokemon } from '../../types/pokemon.type';
import './styles.css';

const Home = () => {
  const pokemons = useSelector((state: any) => state.pokemonReducer.pokemonList) as Pokemon[];
  const [pokemonData,setPokemonData] = useState<PokeApiResponse>();
  const dispatch = useDispatch();

  useEffect(() => {
    const initailize = async () => {
      setPokemonData(await getPokemons());
      if(pokemonData) {
        const all = await Promise.all(pokemonData.results.map((pokemon) => getPokemonDetails(pokemon.url)));
        const pokemonsWithDetails = all.map((response) => response);
        dispatch(actions.setPokemon(pokemonsWithDetails));
      }
    };

    initailize();
  },[dispatch, pokemonData]);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList>
        <Grid container>
          {pokemons.map((pokemon, index) => {
            return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon}/>;
          })}
        </Grid>
      </PokemonList>
    </div>
  );
}

export default Home;