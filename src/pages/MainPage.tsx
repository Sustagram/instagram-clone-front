import React from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import useWindowSize from '../hooks/useWindowSize';

const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  max-width: 935px;
  margin: 0 auto;
  padding-top: 30px;
  @media only screen and (min-width: 640px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const StoryAndPost = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  float: left;
  margin-right: 28px;
  max-width: 614px;
  width: 100%;
  padding-top: 30px;
`;

const Follower = styled.div<{ positionLeft: number }>`
  position: fixed;
  background-color: #fff;
  width: 300px;
  border: 1px solid rgb(222, 222, 222);
  text-align: center;
  line-height: 150px;
  height: 100vh;
  padding: 0;
  left: ${(props) => `${1126 - (1920 - props.positionLeft) * 0.5}px`};
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  top: 60px;
`;

const MainPage: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <div id="main">
      <header />
      <Content id="wrap">
        <StoryAndPost>
          <Story />

          <div>
            <Post />
            <Post />
            <Post />
          </div>
        </StoryAndPost>

        <Follower positionLeft={width}>Fixed!</Follower>
      </Content>
    </div>
  );
};

export default MainPage;
