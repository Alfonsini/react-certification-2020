import styled from 'styled-components';

const DescriptionVideoDiv = styled.div`
  margin-top: 10px;
`;

const DescriptionP = styled.p`
  display: -webkit-box;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 5px;
  color: ${(props) => `${props.theme.videoDescription}`};
`;

const RelatedTitleSectionP = styled.p`
  display: -webkit-box;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 5px;
  color: ${(props) => `${props.theme.videoTitle}`};
`;

const RelatedVideosSection = styled.div`
  right: 0;
  position: absolute;
  height: calc(100% - 10px);
  width: auto;

  ${(props) =>
    props.isScrollable &&
    `
    overflow-x: hidden;
    overflow-y: scroll;
  `}

  /* Laptops */
  @media all and (max-width: 1200px) {
    position: static;
    left: 0;
  }
`;

const StyledCol = styled.div`
  margin: 5px 5px 10px 5px;
  padding: 6px 6px 6px 6px;

  width: ${(props) => props.col && (90 / 6) * props.col}%;

  /* Laptops */
  @media all and (max-width: 1200px) {
    width: 100%;
  }
`;

const StyledRow = styled.div`
  margin: 0;
  width: 95.5%;

  left: 0;
  right: 0;

  display: flex;
  justify-content: left;
  align-items: left;
  flex-flow: column;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TitleP = styled.p`
  display: -webkit-box;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 5px;
  color: ${(props) => `${props.theme.videoTitle}`};
`;

const VideoSection = styled.section`
  iframe {
    width: 100%;
    height: 520px;

    border-radius: 0.428rem;
  }
`;

export {
  DescriptionVideoDiv,
  DescriptionP,
  RelatedTitleSectionP,
  RelatedVideosSection,
  StyledCol,
  StyledRow,
  TitleP,
  VideoSection,
};
