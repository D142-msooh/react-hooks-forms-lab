import React from "react";

function Filter({ searchText, onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
