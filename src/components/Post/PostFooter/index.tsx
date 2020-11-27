import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import AttributeContainer from '../../Attribute';
import LikeCount from '../../LikeCount';
import PostContent from './PostContent';
import RepleList from './RepleList';
import RepleInput from './RepleInput';
import Api from '../../../api';

const PostFooterContainer = styled.div`
  width: 100%;
`;

const Preview = styled.div`
  padding: 0 16px;
  font-size: 14px;
`;

const TimeTable = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  & * {
    color: rgb(142, 142, 142);
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 10px;
  }
`;

interface PostFooterProps {
  readonly id: string;
  readonly likeCount: number;
  readonly writer: string;
  readonly content: string;
  readonly agoHour: string;
}

const PostFooter: React.FC<PostFooterProps> = ({ id, likeCount, writer, content, agoHour }) => {
  const [repleList, setRepleList] = useState([]);
  const [text, setText] = useState<string>('');

  const fetchRepleList = useCallback(() => {
    Api.get(`/api/reply/${id}`).then((res) => {
      if (res.data && res.data.success) {
        setRepleList(res.data.data);
      }
    });
  }, [id]);

  const onSubmitClick = () => {
    if (!text.trim()) {
      alert('빈 칸입니다.');
      return;
    }

    Api.post('/api/reply/', {
      postId: id,
      text
    })
      .then((res) => {
        if (res.data && res.data.success) {
          setText('');
          fetchRepleList();
        }
      })
      .catch(() => alert('문제가 발생하여 댓글을 올리지 못했습니다.'));
  };

  useEffect(() => {
    fetchRepleList();
  }, [fetchRepleList, id]);

  return (
    <PostFooterContainer>
      <AttributeContainer postId={id} />

      <LikeCount count={likeCount} />

      <Preview>
        <PostContent writer={writer}>{content}</PostContent>

        <RepleList list={repleList} />
      </Preview>

      <TimeTable>
        <a href="/">{agoHour}</a>
      </TimeTable>

      <RepleInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClick={onSubmitClick}
        onKeyPress={(e) => e.key === 'Enter' && onSubmitClick()}
      />
    </PostFooterContainer>
  );
};

export default PostFooter;
