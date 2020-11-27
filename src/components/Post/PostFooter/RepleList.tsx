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

interface RepleListProps {
  readonly list: RepleListState[];
}

interface RepleListState {
  /* eslint-disable camelcase */
  readonly reply_id: string;
  readonly text: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly post_id: string;
  readonly user_id: string;
  readonly username: string;
  readonly realname: string;
}

const RepleList: React.FC<RepleListProps> = ({ list }) => {
  return (
    <StyledRepleList>
      <RepleAllButton>
        <a href="/">
          댓글 <span>100</span>개 미리보기
        </a>
      </RepleAllButton>

      {list.map((item) => (
        <Reple key={item.reply_id} writer={item.username}>
          {item.text}
        </Reple>
      ))}
    </StyledRepleList>
  );
};

export default RepleList;
