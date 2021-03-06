import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Attribute from './Attribute';
import Api from '../../api';

const Test = styled.div`
  display: none;
`;

interface LikeProps {
  readonly postId: string;
  readonly clickCallback: () => void;
}

const Like: React.FC<LikeProps> = ({ postId, clickCallback }) => {
  const [test, setTest] = useState(false);
  const [hasLike, sethasLike] = useState(false);

  useEffect(() => {
    Api.get(`/api/like/${postId}`).then((res) => {
      sethasLike(res.data && res.data.data);
    });
    setTest(hasLike);
  }, [postId, test, hasLike]);

  const onClickLike = async () => {
    if (hasLike) {
      await Api.delete(`/api/like/${postId}`);
    } else {
      await Api.post(`/api/like/${postId}`);
    }

    clickCallback();

    setTest((t) => !t);
  };

  const cancelLike = (
    <svg aria-label="좋아요 취소" fill="#ed4956" height="24" width="24" viewBox="0 0 48 48">
      <path d="M 34.6 3.1 c -4.5 0 -7.9 1.8 -10.6 5.6 c -2.7 -3.7 -6.1 -5.5 -10.6 -5.5 C 6 3.1 0 9.6 0 17.6 c 0 7.3 5.4 12 10.6 16.5 c 0.6 0.5 1.3 1.1 1.9 1.7 l 2.3 2 c 4.4 3.9 6.6 5.9 7.6 6.5 c 0.5 0.3 1.1 0.5 1.6 0.5 s 1.1 -0.2 1.6 -0.5 c 1 -0.6 2.8 -2.2 7.8 -6.8 l 2 -1.8 c 0.7 -0.6 1.3 -1.2 2 -1.7 C 42.7 29.6 48 25 48 17.6 c 0 -8 -6 -14.5 -13.4 -14.5 Z" />
    </svg>
  );

  const willLike = (
    <svg aria-label="좋아요" fill="#262626" height="24" width="24" viewBox="0 0 48 48">
      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
    </svg>
  );

  return (
    <>
      <Test>{test}</Test>
      <Attribute id="like" onClick={onClickLike}>
        {test ? cancelLike : willLike}
      </Attribute>
    </>
  );
};

export default Like;
