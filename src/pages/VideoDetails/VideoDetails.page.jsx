import React, { useContext } from 'react';

import { VideoContext } from '../../providers/Videos';

import {
  DescriptionVideoDiv,
  DescriptionP,
  RelatedTitleSectionP,
  RelatedVideosSection,
  StyledCol,
  StyledRow,
  TitleP,
  VideoSection,
} from './VideoDetails.styles';

import RelatedVideo from '../../components/RelatedVideo';
import { useFetch } from '../../utils/hooks';

const PART = 'snippet';
const MAX_RESULTS = 25;
const ORDER = 'rating';
const TYPE = 'video';

const CONTROLS = 1;
const AUTOPLAY = 1;

const BASEURL = `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&key=${process.env.REACT_APP_API_KEY}`;

function VideoDetailsPage() {
  const { state, dispatch } = useContext(VideoContext);
  const { isFetching, data, errorMessage } = useFetch(
    `${BASEURL}&relatedToVideoId=`,
    state.currentVideoId
  );

  const handleVideoClick = (id) => {
    if (!state.videosList || !state.videosList.items) return;

    const videos = state.videosList.items.filter((v) => v.id.videoId === id);

    if (!videos || videos.lenght === 0) return;

    const video = videos[0];

    if (!video) return;

    dispatch({
      type: 'SELECT_VIDEO',
      payload: {
        currentVideoId: id,
        currentVideoTitle: video.snippet.title,
        currentVideoDescription: video.snippet.description,
      },
    });
  };

  return (
    <StyledRow data-testid="video-details-page">
      <StyledCol col={4.5}>
        {state.currentVideoId && (
          <VideoSection>
            <iframe
              allowFullScreen
              frameBorder="0"
              title={state.currentVideoId && state.currentVideoTitle}
              src={`${process.env.REACT_APP_YOUTUBE_EMBED_URL}/${state.currentVideoId}?controls=${CONTROLS}&autoplay=${AUTOPLAY}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
            <DescriptionVideoDiv>
              <TitleP>{state.currentVideoId && state.currentVideoTitle}</TitleP>
              <DescriptionP>
                {state.currentVideoId && state.currentVideoDescription}
              </DescriptionP>
            </DescriptionVideoDiv>
          </VideoSection>
        )}
        {!isFetching && errorMessage && (
          <span data-testid="error-msg">{errorMessage}</span>
        )}
      </StyledCol>
      <StyledCol data-testid="related-videos" col={2}>
        <RelatedVideosSection>
          {!isFetching && data && data.items && (
            <RelatedTitleSectionP>You can also like</RelatedTitleSectionP>
          )}
          {!isFetching &&
            data &&
            data.items &&
            data.items
              .filter((v) => v.snippet && v.snippet.title)
              .map((v) => (
                <RelatedVideo
                  data-testid="related-video"
                  key={v.id.videoId}
                  id={v.id.videoId}
                  title={v.snippet.title}
                  channelId={v.snippet.channelId}
                  channelName={v.snippet.channelTitle}
                  image={v.snippet.thumbnails.medium.url}
                  publishedAt={v.snippet.publishedAt}
                  onVideoClick={handleVideoClick}
                />
              ))}
        </RelatedVideosSection>
      </StyledCol>
    </StyledRow>
  );
}

export default VideoDetailsPage;
