import styled from 'styled-components';

const UploadButton = styled.button<{ loading: boolean }>`
  opacity: ${(props) => (props.loading ? '1' : '0.5')};
  pointer-events: ${(props) => (props.loading ? 'all' : 'none')};
  font-size: 14px;
  line-height: 18px;
  box-sizing: border-box;
  font-weight: 600;
  text-align: center;
  color: rgb(0, 149, 246);
  background: none;
  border: none;
  display: inline;
  padding: 0;
  margin: 0;
  position: relative;
  width: 42px;
  cursor: pointer;
  outline: none;
`;

export default UploadButton;
