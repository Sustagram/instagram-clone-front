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

const PostFooter: React.FC = () => {
  return (
    <PostFooterContainer>
      <AttributeContainer />

      <LikeCount count={123} />

      <Preview>
        <PostContent writer="홍길동">
          테스트 내용. 가나다라마바사아자차카타파하 ABCDEFG 1234
        </PostContent>

        <RepleList />
      </Preview>

      <TimeTable>
        <a href="#">3시간전</a>
      </TimeTable>

      <RepleInput />
    </PostFooterContainer>
  );
};

export default PostFooter;
