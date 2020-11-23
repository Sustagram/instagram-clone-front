import React from 'react';
import styled from 'styled-components';
import Test from '../../assets/test.png';
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
  readonly likeCount: number;
  readonly writer: string;
  readonly content: string;
  readonly agoHour: number;
}

const Post: React.FC<PostProps> = ({ id, likeCount, writer, content, agoHour }) => {
  return (
    <Card>
      <PostHeader profileImage={Test} name={writer} />

      <OptionButton />

      <ImageBox>
        <ImageItem src={Test} />
        <div className="next_picture_radio" />
      </ImageBox>

      <PostFooter
        id={id}
        likeCount={likeCount}
        writer={writer}
        content={content}
        agoHour={agoHour}
      />
    </Card>
  );
};

export default Post;
