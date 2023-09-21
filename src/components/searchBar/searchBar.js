import React from "react";

export const SearchBar = (props) => {
  const { searchText, handleSearch, handleSearchQuery } = props;

  return (
    <>
      <div className="input-group mt-3">
        <div className="form-outline d-flex align-items-center">
          <label className="form-label mr-2" for="form1">
            Search:
          </label>
          <input
            type="search"
            value={searchText}
            onChange={handleSearchQuery}
            onKeyDown={handleSearch}
            id="form1"
            class="form-control"
          />
        </div>
      </div>
    </>
  );
};
