import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.span`
  font-size: 14px;
  color: #262626;
`;

const StyledWritter = styled.span`
  font-weight: bold;
`;

const StyledText = styled.span`
  overflow-wrap: break-word;
`;

interface PostContentProps {
  readonly writer: string;
}

const PostContent: React.FC<PostContentProps> = ({ writer, children }) => {
  return (
    <StyledContent>
      <StyledWritter>{writer}</StyledWritter>
      &nbsp;
      <StyledText>{children}</StyledText>
    </StyledContent>
  );
};

export default PostContent;
