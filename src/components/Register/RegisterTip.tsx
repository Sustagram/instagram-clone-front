import React from 'react';
import styled from 'styled-components';
import TipLink from '../../atomics/Typography/TipLink';

const Tip = styled.p`
  font-size: 13px;
  padding: 0 30px 0 30px;
  color: rgb(160, 160, 160);
`;

const RegisterTip: React.FC = () => {
  return (
    <Tip>
      가입하면 Sustagram의 <TipLink href="#">약관</TipLink>, <TipLink href="#">데이터 정책</TipLink>{' '}
      및{' '}
      <TipLink href="#">
        <br />
        쿠키 정책
      </TipLink>
      에 동의하게 됩니다.
    </Tip>
  );
};

export default RegisterTip;
