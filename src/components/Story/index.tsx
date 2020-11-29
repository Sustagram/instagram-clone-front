import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StoryCard = styled.div`
  box-sizing: border-box;
  height: 118px;
  position: relative;
  margin: 0 auto 0 auto;
  padding: 20px 0;
  background-color: #fff;
  text-align: center;
  line-height: 78px;

  cursor: pointer;

  &:hover span {
    opacity: 0.6;
  }

  @media only screen and (min-width: 640px) {
    width: 602px;
    border: 1px solid rgb(222, 222, 222);
    border-radius: 3px;
  }
`;

const Story: React.FC = () => {
  const history = useHistory();
  return (
    <StoryCard onClick={() => history.push('/upload')}>
      <span>클릭하여 게시글 올리기</span>
    </StoryCard>
  );
};

export default Story;
