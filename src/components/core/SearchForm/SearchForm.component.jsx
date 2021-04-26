import React, { useRef, useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { VideoContext } from '../../../providers/Videos';
import { StyledDiv, StyledInput } from './SearchForm.styles';

import { useFetch } from '../../../utils/hooks';

const PART = 'snippet';
const MAX_RESULTS = 25;
const ORDER = 'rating';
const TYPE = 'video';
const BASEURL = `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&key=${process.env.REACT_APP_API_KEY}`;

function SearchForm() {
  const [query, setQuery] = useState('');

  const inputRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const { isFetching, data, errorMessage } = useFetch(`${BASEURL}&q=`, query);
  const { state, dispatch } = useContext(VideoContext);

  const theme = useTheme();

  useEffect(() => {
    const update = () => {
      dispatch({ type: 'IS_FETCHING', payload: { isLoading: isFetching } });
    };

    update();
  }, [isFetching, dispatch]);

  useEffect(() => {
    const update = () => {
      dispatch({ type: 'SET_VIDEOS', payload: { videosList: data } });
    };

    update();
  }, [data, dispatch]);

  useEffect(() => {
    const update = () => {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage } });
    };

    update();
  }, [errorMessage, dispatch]);

  const search = () => {
    setQuery(inputRef.current.value);

    inputRef.current.focus();

    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value && !state.isLoading) {
        search();
      }
    } else if (e.key === 'Backspace') {
      if (e.target.value === '' && !state.isLoading) {
        setQuery('');
        dispatch({ type: 'CLEAR' });
      }
    }
  };

  const handleIconSearchClick = () => {
    if (inputRef.current.value && !state.isLoading) {
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
        onKeyUp={handleSearch}
        ref={inputRef}
      />
      <FontAwesomeIcon
        data-testid="search-icon"
        icon={faSearch}
        onClick={handleIconSearchClick}
        color={theme.iconColor}
        height="21px"
      />
    </StyledDiv>
  );
}

export default SearchForm;
