import React, { useState } from 'react';

const VideoListContext = React.createContext();

const VideoListProvider = ({ children }) => {
  const [videoList, setVideoList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <VideoListContext.Provider
      value={{
        videoList,
        setVideoList,
        isLoading,
        setIsLoading,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export { VideoListContext, VideoListProvider };
