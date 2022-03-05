import React, { useContext, useState } from 'react';
import { useTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { VideoContext } from '../../providers/Videos';

import {
  DescriptionVideoDiv,
  DescriptionP,
  FavoriteButtonContainer,
  RelatedTitleSectionP,
  RelatedVideosSection,
  StyledCol,
  StyledRow,
  TitleP,
  VideoSection,
} from './VideoDetails.styles';

import RelatedVideo from '../../components/RelatedVideo';
import { useFavoriteVideos, useFetch } from '../../utils/hooks';

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
  const theme = useTheme();
  const { favoriteVideos, setFavoriteVideosValue } = useFavoriteVideos();

  const [isFavorite, setIsFavorite] = useState(state.currentVideoIsFavorite);

  const handleVideoClick = (id) => {
    if (!data || !data.items) return;

    const videos = data.items.filter((v) => v.id.videoId === id);

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
        videos = favoriteVideos.filter((v) => v.id.videoId !== id);
      } else {
        videos.push(video[0]);
      }

      setFavoriteVideosValue(videos);
      setIsFavorite(!isFavorite);
    }
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
              <FavoriteButtonContainer>
                <FontAwesomeIcon
                  icon={faStar}
                  color={isFavorite ? theme.favoriteVideo : theme.noFavoriteVideo}
                  onClick={handleChangeFavorite}
                />
              </FavoriteButtonContainer>
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
