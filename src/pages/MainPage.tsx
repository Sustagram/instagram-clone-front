import React from 'react';
import Post from '../components/Post';

const MainPage: React.FC = () => {
  return (
    <div id="main">
      <section id="content">
        <div className="post_and_story">
          <div id="story" />
          <div
            id="post_list"
            style={{
              paddingTop: '30px'
            }}
          >
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
