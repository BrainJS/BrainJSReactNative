import 'react-native';
import React from 'react';
import TextResult from '../Components/textresult.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <TextResult />
  );
});
