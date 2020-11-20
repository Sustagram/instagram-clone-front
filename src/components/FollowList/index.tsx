import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Profile from '../../atomics/Profile/Profile';
import Test from '../../assets/test.png';
import Api from '../../api';

const Container = styled.div<{ positionLeft: number }>`
  position: fixed;
  width: 300px;
  height: 100vh;
  padding: 2rem 0 0;
  left: ${(props) => `${1126 - (1920 - props.positionLeft) * 0.5}px`};
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  top: 60px;
`;

const Myprofile = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 293px;
  height: 56px;
  margin: 18px 0 10px 0;
`;

const Names = styled.div`
  display: flex;
  width: 200px;
  height: 28px;
  margin-left: 0.3rem;
  flex-flow: column;
  justify-content: center;
  align-items: start;
`;

const FollowerWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 4px;
  width: 321px;
  height: 48px;
`;

const UserName = styled(Link)`
  text-decoration: none;
  color: #262626;
  height: 50%;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const RealName = styled.span<{ isMe: boolean }>`
  margin-top: 4px;
  height: 50%;
  color: rgb(182, 182, 182);
  font-weight: lighter;
  font-size: ${(props) => (props.isMe ? '14px' : '12px')};
`;

const Description = styled.span`
  color: #8e8e8e;
  font-size: 14px;
  padding: 4px 16px 4px 16px;
  margin-top: 12px;
`;

interface FollowListProps {
  positionleft: number;
}

const FollowList: React.FC<FollowListProps> = ({ positionleft }) => {
  const [myinfo, setMyinfo] = useState({
    profile: '',
    username: '',
    realname: ''
  });

  const [followers, setFollowers] = useState([
    {
      profile: '',
      username: 'arkc1009',
      realname: '둥진한'
    },
    {
      profile: '',
      username: 'tjsdn811',
      realname: '하선우'
    },
    {
      profile: '',
      username: 'rjsdn811',
      realname: '하건우'
    },
    {
      profile: '',
      username: 'rjsdn811',
      realname: '하건우'
    },
    {
      profile: '',
      username: 'rjsdn811',
      realname: '하건우'
    },
    {
      profile: '',
      username: 'rjsdn811',
      realname: '하건우'
    },
    {
      profile: '',
      username: 'rjsdn811',
      realname: '하건우'
    }
  ]);

  useEffect(() => {
    Api.get('/api/me/').then((res) => {
      if (res.data && res.data.success) {
        setMyinfo(res.data.data);
      }
    });
  }, []);

  const allFollowerlist = followers.map((follower) => {
    return (
      <FollowerWrap>
        <Profile size={42} image={Test} />
        <Names>
          <UserName to={follower.username}>{follower.username}</UserName>
          <RealName isMe={false}>{follower.realname}</RealName>
        </Names>
      </FollowerWrap>
    );
  });

  return (
    <Container positionLeft={positionleft}>
      <Myprofile>
        <Profile size={66} image={Test} />
        <Names>
          <UserName to={myinfo.username}>{myinfo.username}</UserName>
          <RealName isMe>{myinfo.realname}</RealName>
        </Names>
      </Myprofile>
      <Description>회원님의 팔로우 목록입니다.</Description>
      <div id="followersList">{allFollowerlist}</div>
    </Container>
  );
};

export default FollowList;
