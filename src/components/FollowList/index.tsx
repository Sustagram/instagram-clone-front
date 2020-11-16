import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../../atomics/Profile/Profile';
import Test from '../../assets/test.png';

const Container = styled.div<{ positionLeft: number }>`
  position: fixed;
  width: 300px;
  height: 100vh;
  padding: 0;
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

const UserName = styled.a`
  height: 50%;
  font-size: 14px;
`;

const RealName = styled.span<{ isMe: boolean }>`
  margin-top: 4px;
  height: 50%;
  color: rgb(182, 182, 182);
  font-weight: lighter;
  font-size: ${(props) => (props.isMe ? '14px' : '12px')};
`;

interface FollowListProps {
  positionleft: number;
}

const FollowList: React.FC<FollowListProps> = ({ positionleft }) => {
  const [myinfo, setMyinfo] = useState({
    profile: '',
    username: 'trarkc',
    realname: '한동진'
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

  const followerlist = followers.map((follower) => {
    return (
      <FollowerWrap>
        <Profile size={42} image={Test} />
        <Names>
          <UserName>{follower.username}</UserName>
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
          <UserName>sadasdasd</UserName>
          <RealName isMe>asdsa</RealName>
        </Names>
      </Myprofile>
      <div id="followersList">{followerlist}</div>
    </Container>
  );
};

export default FollowList;
