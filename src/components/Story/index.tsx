import React from 'react';
import styled from 'styled-components';

const StoryCard = styled.div`
  box-sizing: border-box;
  height: 118px;
  position: relative;
  margin: 0 auto 1.5rem auto;
  padding: 20px 0;
  background-color: #fff;
  text-align: center;
  line-height: 78px;
  @media only screen and (min-width: 640px) {
    width: 602px;
    border: 1px solid rgb(222, 222, 222);
    border-radius: 3px;
  }
`;

const Story: React.FC = () => {
  return <StoryCard>story</StoryCard>;
};

export default Story;
