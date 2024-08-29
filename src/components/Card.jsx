

import PropTypes from 'prop-types';
import { PowerList } from './PowerList';

export function Card({ data }) {
  return (
    <>
      {data.map((pokemon) => (
        <div key={pokemon.id} className='Card'>
          <h2>{pokemon.pokemonName}</h2>
          <img src={pokemon.avatar} alt={pokemon.pokemonName} />
          {PowerList.power ? <PowerList list={pokemon.power} /> : null}
        </div>
      ))}
    </>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pokemonName: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};