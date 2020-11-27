import React, { useState } from 'react';
import styled from 'styled-components';
import LoginBox from '../components/Login/LoginBox';
import LoginHeader from '../components/Login/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter';
import Input from '../atomics/Form/Input';
import SubmitButton from '../atomics/Button/SubmitButton';
import Api from '../api';
import TokenUtil from '../api/token';

const StyledForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLoginButton = async () => {
    if (!email.trim() || !password.trim()) {
      alert('비어있는 칸이 있습니다.');
      return;
    }

    const regEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!regEmail.test(email)) {
      alert('올바른 이메일이 아닙니다.');
      return;
    }

    try {
      const user = await Api.post('/api/login/', {
        email,
        password
      });

      const { token } = user.data.data;

      TokenUtil.set(token);
      window.location.reload();
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
            onKeyPress={(e) => e.key === 'Enter' && onClickLoginButton()}
            value={password}
            required
          />

          <SubmitButton onClick={onClickLoginButton}>로그인</SubmitButton>
        </StyledForm>
      </LoginBox>
      <LoginFooter />
    </>
  );
};
export default Login;
