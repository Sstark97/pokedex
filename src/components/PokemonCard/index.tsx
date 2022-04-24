import { Grid, Divider } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FAV_COLOR } from '../../utils/constants';
import { PokemonCardProps } from '../../types/pokemon.type';
import './styles.css';

const PokemonCard = ({ pokemon }: PokemonCardProps) => {

  return (
    <Grid item xs={16} md={8} lg={4}>
      <div className='PokemonCard'>
        <StarBorderIcon sx={{color: `${FAV_COLOR}`}}/>
        <img src={pokemon?.sprites?.front_default} alt='Pokemon'/>
        <h2 className='PokemonCard-title'>{pokemon.name}</h2>
        <Divider />
        {pokemon && pokemon.types && pokemon.types.map((type:any, index:number) => {
          if(index === pokemon.types.length - 1) {
            return <span key={`type-${index}`} className='PokemonCard-type'>{type.type.name}</span>;
          }

          return <span key={`type-${index}`} className='PokemonCard-type'>{type.type.name} | </span>;
        })}

      </div>
    </Grid>
  );
};

export default PokemonCard;