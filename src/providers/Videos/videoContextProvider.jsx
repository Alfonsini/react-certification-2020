import React, { useReducer } from 'react';
import { VideoReducer } from '../../utils/reducers';
import { VideoContext, initialState } from './videoContext';

const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
};

export { VideoContextProvider };
