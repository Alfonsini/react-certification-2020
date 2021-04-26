import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledCol, StyledRow } from './Home.styles';

import Video from '../../components/Video';

import { VideoContext } from '../../providers/Videos';

function HomePage() {
  const { state, dispatch } = useContext(VideoContext);
  const history = useHistory();

  const handleVideoClick = async (id) => {
    const video = state.videosList.items.filter((v) => v.id.videoId === id)[0];

    if (!video) return;

    dispatch({
      type: 'SELECT_VIDEO',
      payload: {
        currentVideoId: id,
        currentVideoTitle: video.snippet.title,
        currentVideoDescription: video.snippet.description,
      },
    });

    history.push('/video-details');
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
