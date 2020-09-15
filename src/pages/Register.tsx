import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterBox from '../components/Register/RegisterBox';
import RegisterFooter from '../components/Register/RegisterFooter';
import RegisterTip from '../components/Register/RegisterTip';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 70%;
  margin-bottom: 8px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 3px;
  background: #fafafa;
`;

const SubmitButton = styled.button`
  background: #0095f6;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  width: 77%;

  &:hover {
    cursor: pointer;
  }
`;

interface RegisterState {
  readonly email: string;
  readonly realName: string;
  readonly username: string;
  readonly password: string;
  readonly passwordConfirm: string;
}

const Register: React.FC = () => {
  const [input, setInput] = useState<RegisterState>({
    email: '',
    realName: '',
    username: '',
    password: '',
    passwordConfirm: ''
  });

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

  return (
    <>
      <RegisterBox>
        <RegisterHeader />

        <Form action="">
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
            value={input.realName}
            onChange={(e) => onInputChangeHandle(e, 'realName')}
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

          <SubmitButton type="button">가입</SubmitButton>
        </Form>

        <RegisterTip />
      </RegisterBox>
      <RegisterFooter />
    </>
  );
};

export default Register;
