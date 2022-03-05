import React, { useState, useEffect } from 'react';

import { StyledCol, StyledRow } from './Home.styles';

import Video from '../../components/Video';

function HomePage() {
  const [videoList, setVideoList] = useState([]);

  async function getVideoList() {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
      );
      const responseJson = await response.json();
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVideoList().then((r) => {
      setVideoList(r);
    });
  }, []);

  return (
    <StyledRow data-testid="row">
      {videoList.slice(1).map((v) => (
        <StyledCol key={v.id.videoId.toString()}>
          <Video
            id="nmXMgqjQzls"
            title={v.snippet.title}
            channelName={videoList[0].snippet.title}
            image={v.snippet.thumbnails.medium.url}
          />
        </StyledCol>
      ))}
    </StyledRow>
  );
}

export default HomePage;
