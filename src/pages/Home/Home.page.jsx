import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledCol, StyledRow } from './Home.styles';

import Video from '../../components/Video';

import { VideoContext } from '../../providers/Videos';
import { useFavoriteVideos } from '../../utils/hooks';

function HomePage() {
  const { state, dispatch } = useContext(VideoContext);
  const history = useHistory();
  const { favoriteVideos, setFavoriteVideosValue } = useFavoriteVideos();

  const handleVideoClick = async (id) => {
    const video = state.videosList.items.filter((v) => v.id.videoId === id)[0];

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

    history.push('/video-details');
  };

  const handleChangeFavorite = (id) => {
    if (!id) return;

    const video = state.videosList.items.filter((v) => v.id.videoId === id);

    if (video && video.length > 0) {
      const index = state.videosList.items.indexOf(video[0]);
      state.videosList.items[index].isFavorite = !state.videosList.items[index]
        .isFavorite;

      dispatch({ type: 'SET_VIDEOS', payload: { videosList: state.videosList } });

      let videos = favoriteVideos;
      if (state.videosList.items[index].isFavorite) {
        videos.push(video[0]);
      } else {
        videos = favoriteVideos.filter((v) => v.id.videoId !== id);
      }

      setFavoriteVideosValue(videos);
    }
  };

  return (
    <StyledRow data-testid="home-page">
      {!state.isLoading &&
        state.videosList &&
        state.videosList.items &&
        state.videosList.items.map((v) => (
          <StyledCol key={v.id.videoId.toString()} data-testid="home-video-col">
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
      {!state.isLoading && state.errorMessage && (
        <span data-testid="error-msg">{state.errorMessage}</span>
      )}
    </StyledRow>
  );
}

export default HomePage;
