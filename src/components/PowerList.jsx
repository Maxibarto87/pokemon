
export function PowerList({ list }) {
  // Verifica si list es un array
  if (Array.isArray(list)) {
    return (
      <ul style={{listStyle:'none'}}>
        {list.map((power, index) => (
          <li key={index}>{power}</li>
        ))}
      </ul>
    );
  }

  // Si list es un objeto, renderiza sus propiedades
  if (typeof list === 'object' && list !== null) {
    return (
      <div>
        {Object.keys(list).map((key) => (
          <div key={key}>
            <strong>{key}:</strong> {list[key]}
          </div>
        ))}
      </div>
    );
  }

  // Si list es otro tipo de dato (número, string, etc.), renderízalo directamente
  return <div>{list}</div>;
}