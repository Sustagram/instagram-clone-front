import React from 'react';
import styled from 'styled-components';
import Test from '../../assets/default_profile.jpg';
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

interface PostProps {
  readonly id: string;
  readonly writer: string;
  readonly content: string;
  readonly agoHour: string;
  readonly imageURL: string;
}

const Post: React.FC<PostProps> = ({ id, writer, content, agoHour, imageURL }) => {
  return (
    <Card>
      <PostHeader profileImage={Test} name={writer} />

      <OptionButton />

      <ImageBox>
        <ImageItem src={imageURL} />
        <div className="next_picture_radio" />
      </ImageBox>

      <PostFooter id={id} writer={writer} content={content} agoHour={agoHour} />
    </Card>
  );
};

export default Post;
