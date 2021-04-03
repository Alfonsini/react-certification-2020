import React from 'react';
import renderer from 'react-test-renderer';

import VerticalMenu from '.';

beforeEach(() => {});

afterEach(() => {});

describe('VerticalMenu', () => {
  test('sidebar not expanded', () => {
    const tree = renderer.create(<VerticalMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('sidebar expanded', () => {
    const tree = renderer.create(<VerticalMenu expanded />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
