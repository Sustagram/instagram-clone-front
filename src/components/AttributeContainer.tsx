import React from 'react';
import styled from 'styled-components';
import Like from '../atomics/Attributes/Like';
import Comment from '../atomics/Attributes/Comment';
import Share from '../atomics/Attributes/Share';
import Bookmark from '../atomics/Attributes/Bookmark';

const AttributeBoxStyle = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
`;

const AttributeContainer: React.FC = () => {
  return (
    <AttributeBoxStyle>
      <Like />
      <Comment />
      <Share />
      <Bookmark />
    </AttributeBoxStyle>
  );
};

export default AttributeContainer;
