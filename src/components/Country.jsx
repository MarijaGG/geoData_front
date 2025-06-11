
function Country({ id, name, area_km2, population }) {
  return (
    <li>
      <strong>{name}</strong>

      {/* – {area_km2} km², {population.toLocaleString()} iedzīvotāji */}
    </li>
  );
}

export default Country;
