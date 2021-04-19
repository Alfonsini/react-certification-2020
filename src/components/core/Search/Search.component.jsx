import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledDiv, StyledInput } from './Search.styles';

import { useVideosAPI } from '../../../utils/hooks/useVideosAPI';

function Search() {
  const [query, setQuery] = useState(null);
  const { isLoading } = useVideosAPI(query);
  const inputRef = useRef();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value && !isLoading) {
        setQuery(e.target.value);
        inputRef.current.focus();
      }
    }
  };

  const handleIconSearchClick = () => {
    if (inputRef.current.value && !isLoading) {
      setQuery(inputRef.current.value);
      inputRef.current.focus();
    }
  };

  return (
    <StyledDiv data-testid="search-div">
      <StyledInput
        data-testid="search-input"
        type="text"
        name="search"
        placeholder="Search..."
        onKeyDown={handleSearch}
        ref={inputRef}
      />
      <FontAwesomeIcon
        data-testid="search-icon"
        icon={faSearch}
        onClick={handleIconSearchClick}
      />
    </StyledDiv>
  );
}

export default Search;
