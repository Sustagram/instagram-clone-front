import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterBox from './RegisterBox';

const AcountWhether = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #0095f6;
`;

const RegisterFooter: React.FC = () => {
  return (
    <RegisterBox>
      <AcountWhether>
        계정이 있으신가요? <LoginLink to="/login">로그인</LoginLink>
      </AcountWhether>
    </RegisterBox>
  );
};

export default RegisterFooter;
