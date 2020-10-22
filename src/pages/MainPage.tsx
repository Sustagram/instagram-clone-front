import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';

const PostList = styled.div`
  padding-top: 30px;
`;

const MainPage: React.FC = () => {
  return (
    <div id="main">
      <section id="content">
        <div className="post_and_story">
          <div id="story" />
          <PostList>
            <Post />
            <Post />
            <Post />
          </PostList>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
