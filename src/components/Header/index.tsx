import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../atomics/Typography/RegisterTitle';
import { Link } from 'react-router-dom';
import Home from '../../atomics/Menus/Home';
import MyProfile from '../../atomics/Menus/MyProfile';

const HeaderContainer = styled.nav`
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background-color: #fff;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 975px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrap = styled(Link)`
  margin-top: 7px;
  text-decoration: none;
  color: rgb(22, 22, 22);
  & * {
    font-size: 2.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <TitleWrap to="/">
            <RegisterTitle>Sustagram</RegisterTitle>
          </TitleWrap>
        </div>
        <Menu>
          <Home />
          <MyProfile />
        </Menu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
