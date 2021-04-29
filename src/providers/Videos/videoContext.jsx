import React from 'react';

const initialState = {
  videosList: {},
  videosRelatedList: {},
  isLoading: false,
  errorMessage: '',
  currentVideoId: '',
  currentVideoTitle: '',
  currentVideoDescription: '',
  currentVideoIsFavorite: false,
};

const VideoContext = React.createContext(initialState);

export { VideoContext, initialState };
