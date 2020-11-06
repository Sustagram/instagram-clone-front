import React from 'react';
import styled from 'styled-components';
import Test from '../../pages/test.png';
import Card from '../Card';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import OptionButton from '../../atomics/Button/OptionButton';

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ImageItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const Post: React.FC = () => {
  return (
    <Card>
      <PostHeader profileImage={Test} name="arkc" />

      <OptionButton />

      <ImageBox>
        <ImageItem src={Test} />
        <div className="next_picture_radio" />
      </ImageBox>

      <PostFooter />
    </Card>
  );
};

export default Post;
