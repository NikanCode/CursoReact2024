import React from "react";

const SearchBar = ({onSearch}) => {
    return (
        <input
            type="text"
            placeholder="buscar usuarios"
            onChange={ (e) => onSearch(e.target.value) }>
        
        </input>
    );
}

export default SearchBar;