import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledSearch, StyledInput } from './Search.styles';

function Search() {
  return (
    <StyledSearch data-testid="search-container">
      <StyledInput
        data-testid="search-input"
        type="text"
        name="search"
        placeholder="Search..."
      />
      <FontAwesomeIcon data-testid="search-icon" icon={faSearch} />
    </StyledSearch>
  );
}

export default Search;
