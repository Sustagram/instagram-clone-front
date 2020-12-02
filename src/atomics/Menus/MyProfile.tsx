import React from 'react';
import Menu from './Menu';
import IconLink from '../Link/IconLink';
import { useMe } from '../../hooks/useMe';
import Test from '../../assets/default_profile.jpg';
import Profile from '../Profile/Profile';

const MyProfile: React.FC = () => {
  const myInfo = useMe();

  const linkURL = `/${myInfo?.username}/`;

  return (
    <Menu>
      <IconLink to={linkURL}>
        <Profile wrapSize={22} imgSize={22} image={Test} />
      </IconLink>
    </Menu>
  );
};

export default MyProfile;
