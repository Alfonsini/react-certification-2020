import { useEffect, useDebugValue, useContext } from 'react';

import { VideoListContext } from '../context/videoListContext';

function APIException(value) {
  this.httpCode = value.httpCode;
  this.statusMessage = value.statusMessage;
  this.details = value.details;

  this.toString = () => {
    return `${this.httpCode} ${this.statusMessage} ${
      this.details && this.details.error && this.details.error.message
    }`;
  };
}

function useVideosAPI(query) {
  const {
    videoList,
    setVideoList,
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
  } = useContext(VideoListContext);

  const PART = 'snippet';
  const MAX_RESULTS = 25;
  const ORDER = 'rating';

  useEffect(() => {
    let mounted = true;
    try {
      if (!query) {
        return;
      }

      if (mounted) setIsLoading(true);

      fetch(
        `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&q=${query}&key=${process.env.REACT_APP_API_KEY}`
      )
        .then(async (resp) => {
          if (!resp.ok) {
            throw new APIException({
              httpCode: resp.status,
              statusMessage: resp.statusText,
              details: await resp.json(),
            });
          }

          return resp.json();
        })
        .then((resp) => {
          if (mounted) setVideoList(resp);
        })
        .catch((ex) => {
          if (mounted)
            if (ex instanceof APIException) {
              setErrorMessage(ex.toString());
            }
        });
    } catch (ex) {
      if (mounted) {
        setErrorMessage(ex.message);
      }
    } finally {
      if (mounted) setIsLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [query, setErrorMessage, setIsLoading, setVideoList]);

  useDebugValue(videoList, isLoading, errorMessage);

  return { videoList, isLoading, errorMessage };
}

export { useVideosAPI };
