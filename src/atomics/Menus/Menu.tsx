import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  margin-left: 22px;
  &:first-child {
    margin-left: 0;
  }
`;

const Menu: React.FC = ({ children }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

export default Menu;
