import React from 'react';
import styled from 'styled-components';

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
  background-color: powderblue;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  text-align: center;
`;

const PosterNameContainer = styled.div`
  width: 100%;
  margin-left: 14px;
`;

interface PostHeaderProps {
  profileImage: string;
  name: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ name }) => {
  return (
    <PostHeaderContainer>
      <ProfileImage>
        <a href="">1</a>
      </ProfileImage>
      <PosterNameContainer>
        <a href="#">{name}</a>
      </PosterNameContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
