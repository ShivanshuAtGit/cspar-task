import React from "react";
import "./style.css";

const SearchInput = () => {
  return (
    <div className="inputBox">
      <input
        className="searchInput"
        placeholder="Type the Course/University/Blog/News you are looking for"
      />
      <button className="btn">Search</button>
    </div>
  );
};

export default SearchInput;
