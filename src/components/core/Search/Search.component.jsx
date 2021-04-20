import React, { useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledDiv, StyledInput } from './Search.styles';

import { useVideosAPI } from '../../../utils/hooks/useVideosAPI';

function Search() {
  const [query, setQuery] = useState(null);
  const { isLoading } = useVideosAPI(query);
  const inputRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const search = () => {
    setQuery(inputRef.current.value);
    inputRef.current.focus();
    if (location.pathname !== '/') history.push('/');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value && !isLoading) {
        search();
      }
    }
  };

  const handleIconSearchClick = () => {
    if (inputRef.current.value && !isLoading) {
      search();
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
