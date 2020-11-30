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

const PosterNameContainer = styled.div`
  width: 100%;
  margin-left: 14px;
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
      <Profile wrapSize={42} imgSize={32} image={profileImage} />
      <PosterNameContainer>
        <PosterName>{name}</PosterName>
      </PosterNameContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
