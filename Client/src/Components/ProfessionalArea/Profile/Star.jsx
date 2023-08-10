import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Star = ({ color }) => {
  return (
    <Svg width={20} height={20} viewBox="6 -2 24 24" fill={color}>
      <Path d="M12 1.753l2.652 5.527 5.927.912-4.285 4.175 1.006 5.884-4.29-4.29-4.292 4.292 1.007-5.884-4.285-4.175 5.927-.912z" />
    </Svg>
  );
};

export default Star;
