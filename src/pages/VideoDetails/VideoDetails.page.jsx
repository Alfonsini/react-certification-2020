import React, { useContext, useEffect, useState } from 'react';

import * as search from '../../test/search';

import { VideoListContext } from '../../utils/context/videoListContext';

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

function VideoDetailsPage() {
  const { videoIdSelected, videoSelected, setVideoSelected } = useContext(
    VideoListContext
  );
  const [videoRelatedList, setVideoRelatedList] = useState({});
  const [isGettingVideos, setIsGettingVideos] = useState(false);

  const PART = 'snippet';
  const MAX_RESULTS = 25;
  const ORDER = 'rating';
  const TYPE = 'video';

  useEffect(() => {
    let mounted = true;

    try {
      if (!videoIdSelected) {
        return;
      }

      if (mounted) setIsGettingVideos(true);

      if (mounted && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
        // dev code
        console.info('Dev code');
        setVideoRelatedList(search.searchRelatedVideos());

        setIsGettingVideos(false);
        return;
      }

      console.log('Production code');

      fetch(
        `${process.env.REACT_APP_API_URL}?part=${PART}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&relatedToVideoId=${videoIdSelected}&key=${process.env.REACT_APP_API_KEY}`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`${resp.status} ${resp.statusText}`);
          }

          return resp.json();
        })
        .then((resp) => {
          if (mounted) setVideoRelatedList(resp);
          console.log(resp);
        })
        .catch((ex) => {
          console.error(ex);
        });
    } catch (ex) {
      console.error(ex);
    } finally {
      if (mounted) setIsGettingVideos(false);
    }

    return () => {
      mounted = false;
    };
  }, [videoIdSelected]);

  const handleSelectVideo = (id) => {
    if (videoRelatedList && videoRelatedList.items) {
      const video = videoRelatedList.items.filter((v) => v.id.videoId === id);

      if (video) {
        setVideoSelected(video[0]);
      }
    }
  };

  return (
    <StyledRow data-testid="row">
      <StyledCol data-testid="video-item" col={4.5}>
        {videoIdSelected && (
          <VideoSection>
            <iframe
              allowFullScreen
              frameBorder="0"
              title={videoSelected && videoSelected.snippet.title}
              src={`https://www.youtube.com/embed/${videoIdSelected}?controls=1&autoplay=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
            <DescriptionVideoDiv>
              <TitleP>{videoSelected && videoSelected.snippet.title}</TitleP>
              <DescriptionP>
                {videoSelected && videoSelected.snippet.description}
              </DescriptionP>
            </DescriptionVideoDiv>
          </VideoSection>
        )}
      </StyledCol>
      <StyledCol data-testid="videos-related" col={2}>
        <RelatedVideosSection>
          {!isGettingVideos && videoRelatedList && videoRelatedList.items && (
            <RelatedTitleSectionP>You can also like</RelatedTitleSectionP>
          )}
          {!isGettingVideos &&
            videoRelatedList &&
            videoRelatedList.items &&
            videoRelatedList.items.map((v) => (
              <RelatedVideo
                key={v.id.videoId}
                id={v.id.videoId}
                title={v.snippet.title}
                channelId={v.snippet.channelId}
                channelName={v.snippet.channelTitle}
                image={v.snippet.thumbnails.medium.url}
                publishedAt={v.snippet.publishedAt}
                handleSelectVideo={handleSelectVideo}
              />
            ))}
        </RelatedVideosSection>
      </StyledCol>
    </StyledRow>
  );
}

export default VideoDetailsPage;
