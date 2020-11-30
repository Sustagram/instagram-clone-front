import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import useWindowSize from '../hooks/useWindowSize';
import Api from '../api';
import FollowList from '../components/FollowList';
import Header from '../components/Header';

const Wrap = styled.div`
`;

const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  max-width: 935px;
  margin: 0 auto;
  padding-top: 60px;
  @media only screen and (min-width: 640px) {
    padding-top: 60px;
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

  const getTimeAgo = (iso: string): string => {
    const seconds = Math.floor((new Date().getTime() - new Date(iso).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return `${Math.floor(interval)}년 전`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)}개월 전`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)}일 전`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)}시간 전`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)}분 전`;
    }
    return `${Math.floor(seconds)}초 전`;
  };

  return (
    <Wrap>
      <Header />

      <Content>
        <StoryAndPost>
          <Story />

          <div>
            {posts.map((post) => (
              <Post
                key={post.post_id}
                id={post.post_id}
                writer={post.username}
                content={post.text}
                agoHour={getTimeAgo(post.created_at)}
                imageURL={post.media}
              />
            ))}
          </div>
        </StoryAndPost>

        <FollowList positionleft={width} />
      </Content>
    </Wrap>
  );
};

export default MainPage;
