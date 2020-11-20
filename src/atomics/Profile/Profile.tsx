import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const ProfileImage = styled.a<{ size: string }>`
  box-sizing: border-box;
  display: block;
  border: 0.2px solid rgb(222, 222, 222);
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const ImageItem = styled.img`
  border: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  user-select: none;
`;

interface ProfileProps {
  size: number;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({ size, image }) => {
  const wrapperSize = `${size}px`;
  const imageSize = `${size - 10}px`;
  return (
    <ProfileWrapper size={wrapperSize}>
      <ProfileImage size={imageSize}>
        <ImageItem src={image} />
      </ProfileImage>
    </ProfileWrapper>
  );
};

export default Profile;
