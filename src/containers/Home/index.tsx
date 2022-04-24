import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import PokemonCard from '../../components/PokemonCard';
import { getPokemons } from '../../api/getPokemons';
import { useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/Pokemon/pokemon.action';
import { PokeApiResponse, PokemonData } from '../../types/global.type';
import './styles.css';

const Home = () => {
  const pokemons = useSelector((state: any) => state.pokemonReducer.pokemonList) as PokemonData[];
  let pokemonData:PokeApiResponse;
  const dispatch = useDispatch();

  useEffect(() => {
    const initailize = async () => {
      pokemonData = await getPokemons();
      dispatch(actions.setPokemon(pokemonData.results));
    };

    initailize();
  
  },[]);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList>
        <Grid container>
          {pokemons.map((pokemon, index) => {
            return <PokemonCard key={`pokemon-${index}`} name={pokemon.name}/>;
          })}
        </Grid>
      </PokemonList>
    </div>
  );
}

export default Home;