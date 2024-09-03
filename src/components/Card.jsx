import PropTypes from 'prop-types';
import { PowerList } from './PowerList';

const CardBackgroundColor = (type) => {
  switch (type) {
    case 'fire':
      return { color: '#5cba19dd', bgColor: '#83e48e' };
    case 'water':
      return { backgroundColor: '#00b5e2', bgColor: '#e78646'};
    case 'rock':
      return { backgroundColor: '#ceec0a', bgColor: '#d40606'};
    default:
      return { backgroundColor: '#ffffff', bgColor: '#3110d6' };
  }
};

// Función para obtener los estilos
const getColors = (type) => {
  const { borderColor, bgColor } = CardBackgroundColor(type);
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    borderRadius: '20px',
    justifyContent: 'space-evenly',
    borderColor: borderColor,
    backgroundColor: bgColor,
    paddding: '10px',
    marginTop: '10px',
  };
};

// Componente Card
export function Card({ data, type }) {
  console.log(data);
  return (
    <>
      {data.map((pokemon) => (
        <div key={pokemon.id} style={getColors(type)} className="Card">
          <h2>{pokemon.pokemonName}</h2>
          <img src={pokemon.avatar} alt={pokemon.pokemonName} />
          {pokemon.power ? <PowerList list={pokemon.power} /> : null}
        </div>
      ))}
    </>
  );
}

// Definición de PropTypes para validación
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pokemonName: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      power: PropTypes.array,
    })
  ).isRequired,
  type: PropTypes.string.isRequired,
};