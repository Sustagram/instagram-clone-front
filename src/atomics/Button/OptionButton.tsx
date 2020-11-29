import React from 'react';
import styled from 'styled-components';

const OptionButtonContainerStyle = styled.div`
  position: absolute;
  top: 0;
  right: 4px;
  width: 40px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionButtonStyle = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const OptionButton: React.FC = () => {
  return (
    <OptionButtonContainerStyle>
      <OptionButtonStyle type="button">
        <svg aria-label="옵션 더 보기" fill="#262626" height="16" width="16" viewBox="0 0 48 48">
          <circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5" />
          <circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5" />
          <circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5" />
        </svg>
      </OptionButtonStyle>
    </OptionButtonContainerStyle>
  );
};

export default OptionButton;
