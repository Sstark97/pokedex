import { ChildrenProps } from '../../types/global.type';

const PokemonList = ({ children }: ChildrenProps) => (
    <div className='wrapper'>
      {children}
    </div>
);

export default PokemonList;