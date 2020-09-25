import React, { useState } from 'react';
import axios from 'axios';
import LoginBox from '../components/Login/LoginBox';
import LoginHeader from '../components/Login/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter';
import styled from 'styled-components';
import Input from '../atomics/Form/Input';
import SubmitButton from '../atomics/Button/SubmitButton';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const userLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      console.log('ERROR : 이메일 또는 비밀번호 공백');
      return;
    }
    console.log(email);
    console.log(password);
    try {
      const user = await axios.get('https://localhost/api/login');
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginBox>
        <LoginHeader />

        <StyledForm>
          <Input
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={onEmailInputChange}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={onPasswordInputChange}
            value={password}
            required
          />

          <SubmitButton onClick={userLogin}>로그인</SubmitButton>
        </StyledForm>
      </LoginBox>
      <LoginFooter />
    </>
  );
};

export default Login;
