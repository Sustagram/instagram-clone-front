import { NONAME } from "dns";
import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  border: 1px solid rgb(222, 222, 222);
  text-align: center;
  &:first-child {
    margin-top: 80px;
    padding: 10px 10px 30px 10px;
  }
  &:last-child {
    margin-top: 10px;
    padding: 30px 10px 30px 10px;
  }
`;

const RegHeader = styled.header`
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.className === "title" ? "2rem" : "1rem")};
  ${(props) =>
    props.className === "sub-title" &&
    css`
      color: rgba(180, 180, 180, 0.8);
      font-weight: 800;
    `};
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
  width: 80%;
  margin: 0 auto;
  padding: 10px 0 10px 0;
`;

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

const Tip = styled.p`
  font-size: 13px;
  padding: 0 30px 0 30px;
  color: rgb(160, 160, 160);
`;

const TipLink = styled.a`
  text-decoration: none;
  color: rgb(140, 140, 140);
  font-weight: bold;
`;

const Register: React.FC = () => {
  return (
    <>
      <Container>
        <RegHeader>
          <Title className="title">Sustagram</Title>
          <Title className="sub-title">당신의 사진을 간직해드려요.</Title>
          <Line />
        </RegHeader>

        <Form action="">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="이메일 주소"
            required
          />
          <Input
            type="text"
            name="realname"
            id="realname"
            placeholder="성명"
            required
          />
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="사용자 이름"
            required
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
            required
          />
          <Input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="비밀번호 확인"
            required
          />

          <SubmitButton>가입</SubmitButton>
        </Form>
        <Tip>
          가입하면 Sustagram의 <TipLink href="#">약관</TipLink>,{" "}
          <TipLink href="#">데이터 정책</TipLink> 및{" "}
          <TipLink href="#">쿠키 정책</TipLink>에 동의하게 됩니다.
        </Tip>
      </Container>
      <Container>
        <p
          style={{
            margin: 0,
            padding: 0,
            fontSize: "14px",
          }}
        >
          계정이 있으신가요?{" "}
          <a href="#" style={{
            textDecoration: 'none',
            color: '#0095f6'
          }}>
            로그인
          </a>
        </p>
      </Container>
    </>
  );
};

export default Register;
