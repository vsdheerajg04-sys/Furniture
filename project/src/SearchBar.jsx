function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search furniture..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default SearchBar;