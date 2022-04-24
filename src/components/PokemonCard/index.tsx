import { Grid, Divider } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import { PokemonCardProps } from '../../types/global.type';
import './styles.css';

const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <Grid item xs={16} md={8} lg={4}>
      <div className='PokemonCard'>
        <StarBorderIcon sx={{color: `${FAV_COLOR}`}}/>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Pokemon'/>
        <h2 className='PokemonCard-title'>{name}</h2>
        <Divider />
        <label color={MAIN_COLOR}>
          normal
        </label>
      </div>
    </Grid>
  );
};

export default PokemonCard;