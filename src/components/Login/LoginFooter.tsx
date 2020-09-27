import React from 'react';
import styled from 'styled-components';
import LoginBox from './LoginBox';

const AcountWhether = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const RegisterLink = styled.a`
  text-decoration: none;
  color: #0095f6;
`;

const RegisterFooter: React.FC = () => {
  return (
    <LoginBox>
      <AcountWhether>
        계정이 없으신가요? <RegisterLink href="#">가입하기</RegisterLink>
      </AcountWhether>
    </LoginBox>
  );
};

export default RegisterFooter;
