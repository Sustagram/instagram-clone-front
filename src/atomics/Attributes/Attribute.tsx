import React from 'react';
import styled from 'styled-components';

const AttributeWrapperStyle = styled.div`
  display: flex;
  margin-left: -8px;
  width: 40px;
  height: 40px;
  font-size: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 8px;
  &:last-child {
    margin-left: auto;
    margin-right: -8px;
  }
`;

const AttributeButtonStyle = styled.button`
  width: 24px;
  height: 24px;
  color: #262626;
  border: none;
  background-color: #fff;
  outline: none;
  cursor: pointer;
`;

interface AttributeProps {
  id: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Attribute: React.FC<AttributeProps> = ({ children, onClick }) => {
  return (
    <AttributeWrapperStyle>
      <AttributeButtonStyle onClick={onClick}>{children}</AttributeButtonStyle>
    </AttributeWrapperStyle>
  );
};

export default Attribute;
