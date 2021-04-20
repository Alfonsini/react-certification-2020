import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { VideoListContext } from '../../utils/context/videoListContext';

import {
  ChannelNameA,
  ChannelNameMetaDiv,
  ClipDiv,
  MoreButton,
  MoreButtonSvg,
  MoreButtonSvgG,
  MoreButtonSvgGPath,
  OverlayPreviewDiv,
  PlayIconDiv,
  PlayIconSvg,
  PlayIconSvgG,
  PlayIconSvgGPath,
  PreviewContainerImg,
  PreviewVideoDiv,
  SectionContentContainer,
  SectionPreviewContainer,
  TimeStatusSpan,
  VideoFooter,
  VideoLink,
  VideoSection,
} from './Video.styles';

function Video({
  id,
  title,
  channelId,
  channelName,
  image,
  showTime = false,
  time,
  publishedAt,
}) {
  const [isCliphover, setIsClipHover] = useState(false);
  const history = useHistory();
  const { videoList, setVideoIdSelected, setVideoSelected } = useContext(
    VideoListContext
  );

  const handleHover = () => {
    setIsClipHover(!isCliphover);
  };

  const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  };

  const getTimeAgo = () => {
    let months = monthDiff(new Date(publishedAt), new Date());
    const years = months / 12;
    months %= 12;

    if (months) {
      return `${months} month ago`;
    }

    if (months) {
      return `${months} months ago`;
    }

    if (years === 1) {
      return `${years} year ago`;
    }

    if (years > 1) {
      return `${years} years ago`;
    }
  };

  const handleNavigateToVideo = async () => {
    await setVideoIdSelected(id);

    if (id && videoList && videoList.items) {
      const video = videoList.items.filter((v) => v.id.videoId === id);

      if (video) {
        console.log('handleNavigateToVideo: ', video);
        await setVideoSelected(video[0]);
      }
    }

    history.push('/video-details');
  };

  return (
    <VideoSection data-testid="video-section">
      <ClipDiv onMouseOver={() => handleHover()} onMouseOut={() => handleHover()}>
        <VideoLink
          to="/video-details"
          id={`${id}`}
          onClick={() => handleNavigateToVideo()}
        >
          <SectionPreviewContainer>
            <PreviewContainerImg src={image} alt="" />
            {showTime && <TimeStatusSpan className="time-status">{time}</TimeStatusSpan>}
            <OverlayPreviewDiv className="overlay-preview">
              <PlayIconDiv className="play-icon" showPlayIcon>
                <PlayIconSvg
                  isStyleScope
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <PlayIconSvgG isStyleScope>
                    <PlayIconSvgGPath isStyleScope d="M8 5v14l11-7z" />
                  </PlayIconSvgG>
                </PlayIconSvg>
              </PlayIconDiv>
              <PreviewVideoDiv className="preview">
                <img src="" alt="" />
              </PreviewVideoDiv>
            </OverlayPreviewDiv>
          </SectionPreviewContainer>
        </VideoLink>
        <SectionContentContainer>
          <h3 title={title}>{title}</h3>
          <VideoFooter>
            <ChannelNameA
              href={`${process.env.REACT_APP_YOUTUBE_CHANNEL_URL}/${channelId}`}
              target="_blank"
              title={channelName}
            >
              {channelName}
            </ChannelNameA>
            <ChannelNameMetaDiv>
              <p />
              <p>{getTimeAgo()}</p>
            </ChannelNameMetaDiv>
          </VideoFooter>
          <MoreButton type="button" isShowing={isCliphover ? 1 : 0}>
            <MoreButtonSvg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              isStyleScope
            >
              <MoreButtonSvgG isStyleScope>
                <MoreButtonSvgGPath
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                  isStyleScope
                />
              </MoreButtonSvgG>
            </MoreButtonSvg>
          </MoreButton>
        </SectionContentContainer>
      </ClipDiv>
    </VideoSection>
  );
}

export default Video;
