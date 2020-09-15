import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../atomics/Typography/RegisterTitle';
import RegisterSubTitle from '../../atomics/Typography/RegisterSubTitle';

const Container = styled.header`
  padding: 10px;
  margin-bottom: 10px;
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
  width: 80%;
  margin: 0 auto;
  padding: 10px 0 10px 0;
`;

const RegisterHeader: React.FC = () => {
  return (
    <Container>
      <RegisterTitle>Sustagram</RegisterTitle>
      <RegisterSubTitle>당신의 사진을 간직해드려요.</RegisterSubTitle>
      <Line />
    </Container>
  );
};

export default RegisterHeader;
