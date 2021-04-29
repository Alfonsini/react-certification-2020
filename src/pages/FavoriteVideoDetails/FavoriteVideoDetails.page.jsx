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
} from './FavoriteVideoDetails.styles';

import RelatedVideo from '../../components/RelatedVideo';
import { useFavoriteVideos } from '../../utils/hooks';

const CONTROLS = 1;
const AUTOPLAY = 1;

function FavoriteVideoDetailsPage() {
  const { state, dispatch } = useContext(VideoContext);
  const theme = useTheme();
  const { favoriteVideos, setFavoriteVideosValue } = useFavoriteVideos();
  const [isFavorite, setIsFavorite] = useState(true);

  const handleVideoClick = (id) => {
    if (!favoriteVideos || !favoriteVideos) return;

    const videos = favoriteVideos.filter((v) => v.id.videoId === id);

    if (!videos || videos.lenght === 0) return;

    const video = videos[0];

    if (!video) return;

    setIsFavorite(true);

    dispatch({
      type: 'SELECT_VIDEO',
      payload: {
        currentVideoId: id,
        currentVideoTitle: video.snippet.title,
        currentVideoDescription: video.snippet.description,
        currentVideoIsFavorite: video.isFavorite,
      },
    });
  };

  const handleChangeFavorite = (ev) => {
    ev.preventDefault();
    if (!state.currentVideoId) return;

    const videos = favoriteVideos.filter((v) => v.id.videoId !== state.currentVideoId);

    if (videos) {
      setFavoriteVideosValue(videos);
      setIsFavorite(false);
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
      </StyledCol>
      <StyledCol data-testid="related-videos" col={2}>
        <RelatedVideosSection>
          {favoriteVideos && favoriteVideos.length > 1 && (
            <RelatedTitleSectionP>Favorite list</RelatedTitleSectionP>
          )}
          {favoriteVideos &&
            favoriteVideos
              .filter(
                (v) =>
                  v.snippet && v.snippet.title && v.id.videoId !== state.currentVideoId
              )
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

export default FavoriteVideoDetailsPage;
