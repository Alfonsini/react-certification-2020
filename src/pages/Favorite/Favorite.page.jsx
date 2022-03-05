import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledCol, StyledRow } from './Favorite.styles';

import Video from '../../components/Video';

import { useFavoriteVideos } from '../../utils/hooks';
import { VideoContext } from '../../providers/Videos';

function FavoritePage() {
  const { dispatch } = useContext(VideoContext);
  const { favoriteVideos, setFavoriteVideosValue } = useFavoriteVideos();
  const history = useHistory();

  const handleVideoClick = async (id) => {
    const video = favoriteVideos.filter((v) => v.id.videoId === id)[0];

    if (!video) return;

    dispatch({
      type: 'SELECT_VIDEO',
      payload: {
        currentVideoId: id,
        currentVideoTitle: video.snippet.title,
        currentVideoDescription: video.snippet.description,
        currentVideoIsFavorite: video.isFavorite,
      },
    });

    history.push('/favorite-details');
  };

  const handleChangeFavorite = (id) => {
    if (!id) return;

    const videos = favoriteVideos.filter((v) => v.id.videoId !== id);

    if (videos) {
      setFavoriteVideosValue(videos);
    }
  };

  return (
    <StyledRow data-testid="favorite-page">
      {favoriteVideos &&
        favoriteVideos.map((v) => (
          <StyledCol key={v.id.videoId.toString()} data-testid="favorite-video-col">
            <Video
              id={v.id.videoId}
              title={v.snippet.title}
              channelId={v.snippet.channelId}
              channelName={v.snippet.channelTitle}
              image={v.snippet.thumbnails.medium.url}
              publishedAt={v.snippet.publishedAt}
              onVideoClick={handleVideoClick}
              isFavorite={v.isFavorite}
              onChangeFavorite={handleChangeFavorite}
            />
          </StyledCol>
        ))}
    </StyledRow>
  );
}

export default FavoritePage;
