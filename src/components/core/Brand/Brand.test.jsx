import React from 'react';
import renderer from 'react-test-renderer';

import Brand from '.';

beforeEach(() => {});

afterEach(() => {});

describe('Brand', () => {
  test('sidebar not expanded', () => {
    const tree = renderer.create(<Brand />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('sidebar expanded', () => {
    const tree = renderer.create(<Brand expanded />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
