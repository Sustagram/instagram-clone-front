import React from 'react';
import styled from 'styled-components';
import Profile from '../../atomics/Profile/Profile';

const PostHeaderContainer = styled.header`
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(222, 222, 222);
  width: 600px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const PosterNameContainer = styled.div`
  width: 100%;
  margin-left: 14px;
`;

const ImageItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 0.5px solid rgb(142, 142, 142);
  user-select: none;
`;

const PosterName = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

interface PostHeaderProps {
  profileImage: string;
  name: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ profileImage, name }) => {
  return (
    <PostHeaderContainer>
      <Profile size={42} image={profileImage} />
      <PosterNameContainer>
        <PosterName>{name}</PosterName>
      </PosterNameContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
