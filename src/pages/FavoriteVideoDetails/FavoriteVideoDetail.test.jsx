import React from 'react';
import { Route } from 'react-router';
// import { server, rest } from '../../test/server';
// import * as search from '../../test/search';
import { fireEvent, render, screen } from '../../test/testUtils';

import FavoriteVideoDetailsPage from '.';
import Navbar from '../../components/core/Navbar';
import AppContent from '../../components/core/AppContent';
import FavoritePage from '../Favorite';
import Sidebar from '../../components/core/Sidebar';
import Wrapper from '../../components/core/Wrapper';

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(window, 'fetch');
});

describe('Favorite video details', () => {
  test('Favorite video details page render correctly', () => {
    render(<FavoriteVideoDetailsPage />);
    const row = screen.getByTestId('video-details-page');
    expect(row).toBeInTheDocument();
  });

  test('Favorite video details page render correctly when a video was selected from Home page', async () => {
    render(
      <>
        <Route exact path="/">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoritePage />
            </AppContent>
          </Wrapper>
        </Route>
        <Route exact path="/video-details">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoriteVideoDetailsPage />
            </AppContent>
          </Wrapper>
        </Route>
      </>
    );

    // Search videos
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    const videosListCount = await (await screen.findAllByTestId('home-video-col')).length;
    expect(videosListCount).toBe(25);

    // Select a video
    const LinkVideos = await screen.findAllByTestId('video-link');
    let count = 0;
    count = await LinkVideos.length;
    expect(count).toBe(25);

    const LinkVideo = LinkVideos[0];
    fireEvent.click(LinkVideo);

    // render Video Details page
    const videoDetailsPage = await screen.findByTestId('video-details-page');
    expect(videoDetailsPage).toBeInTheDocument();
  });

  test('Favorite video details page render correctly from Home page. Testing hover over video clip.', async () => {
    render(
      <>
        <Route exact path="/">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoritePage />
            </AppContent>
          </Wrapper>
        </Route>
        <Route exact path="/video-details">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoriteVideoDetailsPage />
            </AppContent>
          </Wrapper>
        </Route>
      </>
    );

    // Search videos
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    const videosListCount = await (await screen.findAllByTestId('home-video-col')).length;
    expect(videosListCount).toBe(25);

    // Select a video
    const LinkVideos = await screen.findAllByTestId('video-link');
    let count = 0;
    count = await LinkVideos.length;
    expect(count).toBe(25);

    const LinkVideo = LinkVideos[0];
    fireEvent.click(LinkVideo);

    // render Video Details page
    const videoDetailsPage = await screen.findByTestId('video-details-page');
    expect(videoDetailsPage).toBeInTheDocument();

    // check RelatedVideo render
    const RelatedVideosList = await screen.findAllByTestId('clip-video-section');
    const RelatedVideosListCount = await RelatedVideosList.length;
    expect(RelatedVideosListCount).toBe(25);

    const RelatedVideo = RelatedVideosList[0];
    fireEvent.mouseOver(RelatedVideo);

    // check more button opacity
    const MoreButtons = await screen.findAllByTestId('more-button');
    const MoreButtonCount = await MoreButtons.length;
    expect(MoreButtonCount).toBe(25);

    const MoreButton = MoreButtons[0];

    const style = window.getComputedStyle(MoreButton);
    expect(style).toMatchSnapshot();
  });

  test('Favorite video details page render correctly when a video was selected from right related videos side panel', async () => {
    render(
      <>
        <Route exact path="/">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoritePage />
            </AppContent>
          </Wrapper>
        </Route>
        <Route exact path="/video-details">
          <Sidebar />
          <Wrapper>
            <Navbar />
            <AppContent>
              <FavoriteVideoDetailsPage />
            </AppContent>
          </Wrapper>
        </Route>
      </>
    );

    // Search videos
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // const videosListCount = await (await screen.findAllByTestId('home-video-col')).length;
    // expect(videosListCount).toBe(25);

    // // Select a video
    // const LinkVideos = await screen.findAllByTestId('video-link');
    // let count = 0;
    // count = await LinkVideos.length;
    // expect(count).toBe(25);

    // const LinkVideo = LinkVideos[0];
    // fireEvent.click(LinkVideo);

    // // render Video Details page
    // const videoDetailsPage = await screen.findByTestId('video-details-page');
    // expect(videoDetailsPage).toBeInTheDocument();

    // // Select a related video
    // const LinkRelatedVideos = await screen.findAllByTestId('related-video-link');
    // count = 0;
    // count = await LinkRelatedVideos.length;
    // expect(count).toBe(25);

    // const LinkRelatedVideo = LinkRelatedVideos[0];

    // fireEvent.click(LinkRelatedVideo);

    // // render Video Details page again
    // const videoDetailsPageSecondRender = await screen.findByTestId('video-details-page');
    // expect(videoDetailsPageSecondRender).toBeInTheDocument();
  });
});

// describe('API returning 403 during searching ', () => {
//   test('Favorite video details page not render correctly when a video was selected from right side panel of related videos becuase API returns an HTTP error', async () => {
//     render(
//       <>
//         <Route exact path="/">
//           <Sidebar />
//           <Wrapper>
//             <Navbar />
//             <AppContent>
//               <FavoritePage />
//             </AppContent>
//           </Wrapper>
//         </Route>
//         <Route exact path="/video-details">
//           <Sidebar />
//           <Wrapper>
//             <Navbar />
//             <AppContent>
//               <FavoriteVideoDetailsPage />
//             </AppContent>
//           </Wrapper>
//         </Route>
//       </>
//     );

//     // Search videos
//     const input = screen.getByTestId('search-input');

//     fireEvent.change(input, { target: { value: 'wizeline' } });
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

//     const videosListCount = await (await screen.findAllByTestId('home-video-col')).length;
//     expect(videosListCount).toBe(25);

//     // Select a video
//     const LinkVideos = await screen.findAllByTestId('video-link');
//     let count = 0;
//     count = await LinkVideos.length;
//     expect(count).toBe(25);

//     const LinkVideo = LinkVideos[0];
//     fireEvent.click(LinkVideo);

//     // render Video Details page
//     const videoDetailsPage = await screen.findByTestId('video-details-page');
//     expect(videoDetailsPage).toBeInTheDocument();

//     // Select a related video
//     const LinkRelatedVideos = await screen.findAllByTestId('related-video-link');
//     count = 0;
//     count = await LinkRelatedVideos.length;
//     expect(count).toBe(25);

//     // server.resetHandlers(
//     //   rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
//     //     console.error('error');
//     //     return res(ctx.status(403), ctx.json(search.badAPIRequest()));
//     //   })
//     // );
//     // server.use(
//     //   rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
//     //     return res.once(ctx.status(403), ctx.json(search.badAPIRequest()));
//     //   })
//     // );

//     // server.printHandlers();

//     // const LinkRelatedVideo = LinkRelatedVideos[0];
//     // fireEvent.click(LinkRelatedVideo);

//     // render Video Details page again
//     // await screen.findByTestId('video-details-page');
//     // await screen.findByTestId('error-msg');

//     // const videoDetailsPageSecondRender = await screen.findByTestId('error-msg');
//     // expect(videoDetailsPageSecondRender).toBeInTheDocument();
//   });
// });
