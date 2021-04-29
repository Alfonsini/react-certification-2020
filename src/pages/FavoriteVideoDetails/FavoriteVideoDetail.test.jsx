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
import HomePage from '../Home';

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(window, 'fetch');
});

// describe('Favorite video details', () => {
//   test('Favorite video details page render correctly', () => {
//     render(<FavoriteVideoDetailsPage />);
//     const row = screen.getByTestId('favorite-video-details-page');
//     expect(row).toBeInTheDocument();
//   });

//   test('A video was marked as favorite from Home page', async () => {
//     render(
//       <>
//         <Route exact path="/">
//           <Sidebar />
//           <Wrapper>
//             <Navbar />
//             <AppContent>
//               <HomePage />
//             </AppContent>
//           </Wrapper>
//         </Route>
//         <Route exact path="/favorites">
//           <Sidebar />
//           <Wrapper>
//             <Navbar />
//             <AppContent>
//               <FavoritePage />
//             </AppContent>
//           </Wrapper>
//         </Route>
//       </>
//     );

//     // Search videos
//     const input = screen.getByTestId('search-input');

//     fireEvent.change(input, { target: { value: 'wizeline' } });
//     fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

//     const videosListCount = await (await screen.findAllByTestId('home-video-col')).length;
//     expect(videosListCount).toBe(25);

//     // Select a video
//     // const LinkVideos = await screen.findAllByTestId('video-link');
//     // let count = 0;
//     // count = await LinkVideos.length;
//     // expect(count).toBe(25);

//     // const LinkVideo = LinkVideos[0];
//     // fireEvent.click(LinkVideo);

//     // render Video Details page
//     // const videoDetailsPage = await screen.findByTestId('video-details-page');
//     // expect(videoDetailsPage).toBeInTheDocument();
//   });
// });
