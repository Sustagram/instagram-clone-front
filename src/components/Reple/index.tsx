import React from 'react';
import styled from 'styled-components';

const RepleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #262626;
`;

const StyledWriter = styled.span`
  font-weight: bold;
`;

const StyledText = styled.span`
  overflow-wrap: break-word;
`;

interface RepleProps {
  readonly writer: string;
}

const Reple: React.FC<RepleProps> = ({ writer, children }) => {
  return (
    <RepleContent>
      <StyledWriter>{writer}</StyledWriter>
      &nbsp;
      <StyledText>{children}</StyledText>
    </RepleContent>
  );
};

export default Reple;
