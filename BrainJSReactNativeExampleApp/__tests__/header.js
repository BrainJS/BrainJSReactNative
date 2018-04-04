import 'react-native';
import React from 'react';
import Header from '../Components/header.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Header />
  );
});
