import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import useWindowSize from '../hooks/useWindowSize';
import Api from '../api';
import FollowList from '../components/FollowList';

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

/* eslint-disable camelcase */
interface PostType {
  readonly post_id: string;
  readonly text: string;
  readonly media: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly user_id: string;
  readonly username: string;
}

const MainPage: React.FC = () => {
  const [width] = useWindowSize();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    Api.get('/api/post/my/').then((res) => {
      if (res.data && res.data.success) {
        setPosts(res.data.data);
      }
    });
  }, []);

  const getLastHour = (iso: string) => {
    const now = new Date();
    const uploadDate = new Date(iso);
    return uploadDate.getHours() + 1 - (now.getHours() + 1);
  };

  return (
    <div>
      <header />
      <Content>
        <StoryAndPost>
          <Story />

          <div>
            {posts.map((post) => (
              <Post
                key={post.post_id}
                id={post.post_id}
                likeCount={1}
                writer={post.username}
                content={post.text}
                agoHour={getLastHour(post.created_at)}
              />
            ))}
          </div>
        </StoryAndPost>

        <FollowList positionleft={width} />
      </Content>
    </div>
  );
};

export default MainPage;
