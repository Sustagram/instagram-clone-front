import React from 'react';
import styled from 'styled-components';

const TEXT = styled.div`
  display: flex;
  flex-flow: coulmn;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  text-align: center;
`;

const MainPage: React.FC = () => {
  return <TEXT><h1>메인페이지</h1></TEXT>;
};

export default MainPage;
