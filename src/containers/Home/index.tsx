import { Grid } from '@mui/material';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import PokemonCard from '../../components/PokemonCard';
import './styles.css';

const Home = () => {
  const pokemons = Array(20).fill({});

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList>
        <Grid container>
          {pokemons.map((pokemon, index) => {
            return <PokemonCard key={`pokemon-${index}`} />;
          })}
        </Grid>
      </PokemonList>
    </div>
  );
}

export default Home;