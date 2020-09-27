import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterBox from '../components/Register/RegisterBox';
import RegisterFooter from '../components/Register/RegisterFooter';
import RegisterTip from '../components/Register/RegisterTip';
import Input from '../atomics/Form/Input';
import SubmitButton from '../atomics/Button/SubmitButton';
import Api from '../api';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface RegisterState {
  readonly email: string;
  readonly realname: string;
  readonly username: string;
  readonly password: string;
  readonly passwordConfirm: string;
}

const Register: React.FC = () => {
  const [input, setInput] = useState<RegisterState>({
    email: '',
    realname: '',
    username: '',
    password: '',
    passwordConfirm: ''
  });

  const { email, realname, username, password, passwordConfirm } = input;

  const onInputChangeHandle = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof RegisterState
  ) => {
    e.persist();

    setInput((current) => {
      return {
        ...current,
        [type]: e.target.value
      };
    });
  };

  const onClickRegisterButton = async () => {
    if (password !== passwordConfirm) {
      alert('비밀번호를 올바르게 입력해주세요');
      return;
    }

    try {
      const user = await Api.post('/api/register/', {
        email,
        realname,
        username,
        password
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RegisterBox>
        <RegisterHeader />

        <StyledForm action="">
          <Input
            type="email"
            placeholder="이메일 주소"
            value={input.email}
            onChange={(e) => onInputChangeHandle(e, 'email')}
            required
          />
          <Input
            type="text"
            placeholder="성명"
            value={input.realname}
            onChange={(e) => onInputChangeHandle(e, 'realname')}
            required
          />
          <Input
            type="text"
            placeholder="사용자 이름"
            value={input.username}
            onChange={(e) => onInputChangeHandle(e, 'username')}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={input.password}
            onChange={(e) => onInputChangeHandle(e, 'password')}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={input.passwordConfirm}
            onChange={(e) => onInputChangeHandle(e, 'passwordConfirm')}
            required
          />

          <SubmitButton type="button" onClick={onClickRegisterButton}>
            가입
          </SubmitButton>
        </StyledForm>

        <RegisterTip />
      </RegisterBox>
      <RegisterFooter />
    </>
  );
};

export default Register;
