import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginBox from './LoginBox';

const AcountWhether = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #0095f6;
`;

const RegisterFooter: React.FC = () => {
  return (
    <LoginBox>
      <AcountWhether>
        계정이 없으신가요? <RegisterLink to="/register">가입하기</RegisterLink>
      </AcountWhether>
    </LoginBox>
  );
};

export default RegisterFooter;
