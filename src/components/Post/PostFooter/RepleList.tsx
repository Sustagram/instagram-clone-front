import React from 'react';
import styled from 'styled-components';
import Reple from '../../Reple';

const StyledRepleList = styled.div``;

const RepleAllButton = styled.div`
  margin-bottom: 4px;

  & * {
    text-decoration: none;
    color: rgb(142, 142, 142);
    line-height: inherit;
  }
`;

const RepleList: React.FC = () => {
  return (
    <StyledRepleList>
      <RepleAllButton>
        <a href="#">
          댓글 <span>100</span>개 미리보기
        </a>
      </RepleAllButton>

      <Reple writer="홍길동">가나다라마바사</Reple>

      <Reple writer="ABC">ABCDEFGASKDHAKKUWKND</Reple>
    </StyledRepleList>
  );
};

export default RepleList;
