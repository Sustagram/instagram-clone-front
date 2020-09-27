import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  width: 70%;
  margin-bottom: 8px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 3px;
  background: #fafafa;
  &::placeholder {
    font-size: 12px;
    font-weight: 100;
  }
`;

export default Input;