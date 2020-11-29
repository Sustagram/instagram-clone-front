import React, { useState } from 'react';
import styled from 'styled-components';
import Reple from '../../Reple';

const StyledRepleList = styled.div`
  margin-top: 4px;
`;

const RepleAllButton = styled.button`
  border: none;
  background-color: #fff;
  margin: 0 0 4px 0;
  padding: 0;
  cursor: pointer;
  outline: none;
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
  const [isViewAll, setViewAll] = useState(false);

  const onClickAllButton = () => {
    setViewAll(!isViewAll);
  };

  const repleAllList = list.map((item) => {
    return (
      <Reple key={item.reply_id} writer={item.username}>
        {item.text}
      </Reple>
    );
  });

  const repleList = list.slice(0, 2).map((item) => {
    return (
      <Reple key={item.reply_id} writer={item.username}>
        {item.text}
      </Reple>
    );
  });

  const buttonText = isViewAll ? (
    <div>댓글 간단히 보기</div>
  ) : (
    <div>
      댓글 <span>{list.length}</span>개 모두보기
    </div>
  );

  return (
    <div>
      {list.length > 2 && <RepleAllButton onClick={onClickAllButton}>{buttonText}</RepleAllButton>}

      <StyledRepleList>{isViewAll ? repleAllList : repleList}</StyledRepleList>
    </div>
  );
};

export default RepleList;
