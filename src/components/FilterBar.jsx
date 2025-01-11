const FilterBar = ({ onSort }) => {
    const handleSortChange = (event) => {
      onSort(event.target.value); // Envía el valor seleccionado al componente padre
    };
  
    return (
      <div style={{ marginBottom: "1rem" }}>
        <label>Order by:</label>
        <select onChange={handleSortChange} style={{ marginLeft: "0.5rem" }}>
          <option value="rating-desc">Rating: Mayor a Menor</option>
          <option value="rating-asc">Rating: Menor a Mayor</option>
          <option value="title-asc">Título: A-Z</option>
          <option value="title-desc">Título: Z-A</option>
        </select>
      </div>
    );
  };
  
  export default FilterBar;
  