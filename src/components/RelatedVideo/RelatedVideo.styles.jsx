import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChannelNameA = styled.a`
  margin: 0;
  font-size: 12px;
  color: #73768d;
  display: block;
  width: 100%;
  text-decoration: none;

  :hover {
    color: rgba(18, 18, 18, 0.8);
  }
`;

const ChannelNameMetaDiv = styled.div`
  p {
    font-size: 12px;
    display: inline-block;
    margin: 0;
    color: #606060;
  }

  p:first-child:after {
    display: inline-block;
    /* content: '•'; */
    margin: 0 4px;
  }
`;

const ClipDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  display: flex;
`;

const MoreButton = styled.button`
  opacity: 0;
  width: 23px;
  height: 23px;
  border: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  ${(props) => props.isShowing && `opacity: 1;`}

  svg {
    fill: #909090;
  }

  :hover svg {
    fill: #606060;
  }
`;

const MoreButtonSvg = styled.svg`
  ${(props) =>
    props.isStyleScope &&
    `
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  `}
`;

const MoreButtonSvgG = styled.g`
  ${(props) =>
    props.isStyleScope &&
    `
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  `}
`;

const MoreButtonSvgGPath = styled.path`
  ${(props) =>
    props.isStyleScope &&
    `
      pointer-events: none;
      display: block;
      width: 100%;
      height: 100%;
    `}
`;

const OverlayPreviewDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const PlayIconDiv = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 15px;
  margin: auto;
  opacity: 0;
  transition: opacity 0.5s;
  display: block;

  ${(props) => (props.showPlayIcon ? 'opacity: 0.9; ' : '')}
`;

const PlayIconSvg = styled.svg`
  fill: #fff;

  ${(props) =>
    props.isStyleScope &&
    `
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  `}
`;

const PlayIconSvgG = styled.g`
  ${(props) =>
    props.isStyleScope &&
    `
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  `}
`;

const PlayIconSvgGPath = styled.path`
  ${(props) =>
    props.isStyleScope &&
    `
      pointer-events: none;
      display: block;
      width: 100%;
      height: 100%;
    `}
`;

const PreviewContainerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.428rem;
`;

const PreviewVideoDiv = styled.div`
  opacity: 1;
  display: none;

  img {
    height: 100%;
    width: 100%;
  }
`;

const SectionContentContainer = styled.section`
  position: relative;
  width: 50%;

  /* Laptops */
  @media all and (max-width: 1200px) and (min-width: 1025px) {
    width: calc(100% - 22vw);
  }

  /* Laptops */
  @media all and (max-width: 1024px) and (min-width: 769px) {
    width: calc(100% - 22vw);
  }

  /* iPad */
  @media all and (max-width: 768px) and (min-width: 481px) {
    width: calc(100% - 22vw);
  }

  /* Mobile */
  @media all and (max-width: 480px) and (min-width: 320px) {
    width: calc(100% - 22vw);
  }

  /* Mobile */
  @media all and (max-width: 319px) and (min-width: 280px) {
    width: calc(100% - 40vw);
  }

  h3 {
    display: -webkit-box;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 5px;
    color: #3d4055;
  }
`;

const SectionPreviewContainer = styled.section`
  position: relative;
`;

const TimeStatusSpan = styled.span`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 10px;
  bottom: 15px;
  margin: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  display: inline-block;
  padding: 1px 4px;
  border-radius: 2px;
`;

const VideoFooter = styled.footer``;

const VideoLink = styled(Link)`
  text-decoration: none;
  /* position: absolute; */
  /* left: 0; */
  width: 50%;
  padding-right: 8px;

  /* Laptops */
  @media all and (max-width: 1200px) and (min-width: 1025px) {
    width: 22vw;
  }

  /* Laptops */
  @media all and (max-width: 1024px) and (min-width: 769px) {
    width: 22vw;
  }

  /* iPad */
  @media all and (max-width: 768px) and (min-width: 481px) {
    width: 22vw;
  }

  /* Mobile */
  @media all and (max-width: 480px) and (min-width: 320px) {
    width: 40vw;
  }

  /* Mobile */
  @media all and (max-width: 319px) and (min-width: 280px) {
    width: 40vw;
  }
`;

const VideoSection = styled.section`
  width: 21.3vw;

  /* Laptops */
  @media all and (min-width: 1680px) {
    width: 26vw;
  }

  /* Laptops */
  @media all and (max-width: 1679px) and (min-width: 1441px) {
    width: 26vw;
  }

  /* Laptops */
  @media all and (max-width: 1440px) and (min-width: 1201px) {
    width: 26vw;
  }

  /* Laptops */
  @media all and (max-width: 1200px) and (min-width: 1025px) {
    width: 100%;
  }

  /* Laptops */
  @media all and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
  }

  /* iPad */
  @media all and (max-width: 768px) and (min-width: 481px) {
    width: 100%;
  }

  /* Mobile */
  @media all and (max-width: 480px) and (min-width: 320px) {
    width: 100%;
  }

  /* Mobile */
  @media all and (max-width: 319px) and (min-width: 280px) {
    width: 100%;
  }
`;

export {
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
};
