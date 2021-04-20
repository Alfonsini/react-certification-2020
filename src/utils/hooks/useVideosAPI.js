import { useEffect, useDebugValue, useContext } from 'react';

import * as search from '../../test/search';

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
  const TYPE = 'video';

  useEffect(() => {
    let mounted = true;
    try {
      if (!query) {
        return;
      }

      if (mounted) setIsLoading(true);

      if (mounted && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
        // dev code
        console.info('Dev code');
        setVideoList(search.search());

        setIsLoading(false);
        return;
      }

      console.log('Production code');

      fetch(
        `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&q=${query}&key=${process.env.REACT_APP_API_KEY}`
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
