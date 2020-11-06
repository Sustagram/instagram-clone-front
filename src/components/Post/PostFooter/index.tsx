import React from 'react';
import styled from 'styled-components';
import AttributeContainer from '../../Attribute';
import LikeCount from '../../LikeCount';
import PostContent from './PostContent';
import RepleList from './RepleList';
import RepleInput from './RepleInput';

const PostFooterContainer = styled.div`
  width: 100%;
`;

const Preview = styled.div`
  padding: 0 16px;
  font-size: 14px;
`;

const TimeTable = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  & * {
    color: rgb(142, 142, 142);
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 10px;
  }
`;

interface PostFooterProps {
  readonly likeCount: number;
  readonly writer: string;
  readonly content: string;
  readonly agoHour: number;
}

const PostFooter: React.FC<PostFooterProps> = ({ likeCount, writer, content, agoHour }) => {
  return (
    <PostFooterContainer>
      <AttributeContainer />

      <LikeCount count={likeCount} />

      <Preview>
        <PostContent writer={writer}>{content}</PostContent>

        <RepleList />
      </Preview>

      <TimeTable>
        <a href="/">{agoHour}시간전</a>
      </TimeTable>

      <RepleInput />
    </PostFooterContainer>
  );
};

export default PostFooter;
