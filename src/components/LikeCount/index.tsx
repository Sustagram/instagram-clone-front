import React from 'react';
import styled from 'styled-components';

const LikeCountStyle = styled.section`
  padding: 0 16px;
  margin-bottom: 8px;
  & * {
    font-size: 14px;
    text-decoration: none;
    color: #262626;
    font-weight: 600;
  }
`;

interface LikeCountProps {
  count: number;
}

const LikeCount: React.FC<LikeCountProps> = ({ count }) => {
  return (
    <LikeCountStyle>
      <a href="#">
        좋아요 <span>{count}</span>개
      </a>
    </LikeCountStyle>
  );
};

export default LikeCount;
