import React from 'react';
import Menu from './Menu';
import IconLink from '../Link/IconLink';

const Home: React.FC = () => {
  return (
    <Menu>
      <IconLink to="/">
        <svg aria-label="홈" fill="#262626" height="22" width="22" viewBox="0 0 48 48">
          <path d="M 45.3 48 H 30 c -0.8 0 -1.5 -0.7 -1.5 -1.5 V 34.2 c 0 -2.6 -2 -4.6 -4.6 -4.6 s -4.6 2 -4.6 4.6 v 12.3 c 0 0.8 -0.7 1.5 -1.5 1.5 H 2.5 c -0.8 0 -1.5 -0.7 -1.5 -1.5 V 23 c 0 -0.4 0.2 -0.8 0.4 -1.1 L 22.9 0.4 c 0.6 -0.6 1.5 -0.6 2.1 0 l 21.5 21.5 c 0.4 0.4 0.6 1.1 0.3 1.6 c 0 0.1 -0.1 0.1 -0.1 0.2 v 22.8 c 0.1 0.8 -0.6 1.5 -1.4 1.5 Z m -13.8 -3 h 12.3 V 23.4 L 24 3.6 l -20 20 V 45 h 12.3 V 34.2 c 0 -4.3 3.3 -7.6 7.6 -7.6 s 7.6 3.3 7.6 7.6 V 45 Z" />
        </svg>
      </IconLink>
    </Menu>
  );
};

export default Home;
