import { useState, useEffect } from 'react';
import { FAVORITE_VIDEOS_STORAGE_KEY } from '../constants';
import { storage } from '../storage';

function useFavoriteVideos() {
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const setFavoriteVideosValue = (value) => {
    const jsonVideos = JSON.stringify(value);

    if (jsonVideos) {
      storage.set(FAVORITE_VIDEOS_STORAGE_KEY, value);
      setFavoriteVideos(value);
    }
  };

  useEffect(() => {
    const localTheme = storage.get(FAVORITE_VIDEOS_STORAGE_KEY);

    if (localTheme) {
      const arrayVideos = localTheme;

      if (arrayVideos) setFavoriteVideos(arrayVideos);
    }
  }, []);

  return { favoriteVideos, setFavoriteVideosValue };
}

export { useFavoriteVideos };
