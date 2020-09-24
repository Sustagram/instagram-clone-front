import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../atomics/Typography/RegisterTitle';

const Container = styled.header`
  margin-bottom: 10px;
`;

const LoginHeader: React.FC = () => {
  return (
    <Container>
      <RegisterTitle>Sustagram</RegisterTitle>
    </Container>
  );
};

export default LoginHeader;
