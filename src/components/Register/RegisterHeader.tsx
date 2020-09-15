import React from 'react';
import styled from 'styled-components';

const RegHeader = styled.header`
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const SubTitle = styled.h1`
  font-size: 1rem;
  color: rgba(180, 180, 180, 0.8);
  font-weight: 800;
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
  width: 80%;
  margin: 0 auto;
  padding: 10px 0 10px 0;
`;

const RegisterHeader: React.FC = () => {
  return (
    <RegHeader>
      <Title>Sustagram</Title>
      <SubTitle>당신의 사진을 간직해드려요.</SubTitle>
      <Line />
    </RegHeader>
  );
};

export default RegisterHeader;
