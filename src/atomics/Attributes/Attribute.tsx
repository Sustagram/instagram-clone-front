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

const AttributeStyle = styled.a`
  width: 24px;
  height: 24px;
  text-align: center;
  text-decoration: none;
  color: #262626;
  line-height: 24px;
`;

interface AttributeProps {
  id: string;
}

const Attribute: React.FC<AttributeProps> = ({ children, id }) => {
  return (
    <AttributeWrapperStyle>
      <AttributeStyle href="#">{children}</AttributeStyle>
    </AttributeWrapperStyle>
  );
};

export default Attribute;
