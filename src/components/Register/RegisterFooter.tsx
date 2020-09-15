import React from 'react';
import styled from 'styled-components';
import RegisterBox from './RegisterBox';

const AcountWhether = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const LoginLink = styled.a`
  text-decoration: none;
  color: #0095f6;
`;

const RegisterFooter: React.FC = () => {
  return (
    <RegisterBox>
      <AcountWhether>
        계정이 있으신가요? <LoginLink href="#">로그인</LoginLink>
      </AcountWhether>
    </RegisterBox>
  );
};

export default RegisterFooter;
