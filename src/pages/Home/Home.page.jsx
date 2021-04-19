import React from 'react';

import { StyledCol, StyledRow } from './Home.styles';

import Video from '../../components/Video';

import { useVideosAPI } from '../../utils/hooks/useVideosAPI';

function HomePage() {
  const { videoList, isLoading, errorMessage } = useVideosAPI(null);

  return (
    <StyledRow data-testid="row">
      {!isLoading &&
        videoList &&
        videoList.items &&
        videoList.items.map((v) => (
          <StyledCol key={v.id.videoId.toString()} data-testid="video-item">
            <Video
              id={v.id.videoId}
              title={v.snippet.title}
              channelName={v.snippet.channelTitle}
              image={v.snippet.thumbnails.medium.url}
            />
          </StyledCol>
        ))}
      {!isLoading && errorMessage && <span data-testid="error-msg">{errorMessage}</span>}
    </StyledRow>
  );
}

export default HomePage;
