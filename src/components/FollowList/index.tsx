import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Profile from '../../atomics/Profile/Profile';
import Test from '../../assets/default_profile.jpg';
import Api from '../../api';
import { useMe } from '../../hooks/useMe';

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

const RealName = styled.span<{ isMe?: boolean }>`
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

/* eslint-disable camelcase */
interface FollowType {
  readonly user_id: string;
  readonly following_id: string;
  readonly following_username: string;
  readonly following_realname: string;
}

interface FollowListProps {
  positionleft: number;
}

const FollowList: React.FC<FollowListProps> = ({ positionleft }) => {
  const myinfo = useMe();

  const [follows, setFollows] = useState<FollowType[]>([]);

  useEffect(() => {
    const loadFollows = async () => {
      try {
        const res = await Api.get('/api/follow/');
        setFollows(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    loadFollows();
  }, []);

  const allFollowerlist = follows.map((follow) => {
    return (
      <FollowerWrap>
        <Profile size={42} image={Test} key={follow.following_id} />
        <Names>
          <UserName to={follow.following_username}>{follow.following_username}</UserName>
          <RealName>{follow.following_realname}</RealName>
        </Names>
      </FollowerWrap>
    );
  });

  if (!myinfo) {
    return (
      <Container positionLeft={positionleft}>
        <Myprofile>
          <Names>
            <p>로딩 중</p>
          </Names>
        </Myprofile>
      </Container>
    );
  }

  if (!follows) {
    return (
      <Container positionLeft={positionleft}>
        <Myprofile>
          <Profile size={66} image={Test} />
          <Names>
            <UserName to={myinfo.username}>{myinfo.username}</UserName>
            <RealName isMe>{myinfo.realname}</RealName>
          </Names>
        </Myprofile>
        <Description>현재 회원님이 팔로우한 사람이 없습니다.</Description>
      </Container>
    );
  }

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
