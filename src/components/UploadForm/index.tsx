import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import UploadButton from '../../atomics/Button/UploadButton';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 4rem auto 4rem auto;
`;

const Line = styled.hr`
  width: 300px;
`;

const ContentInput = styled.textarea`
  padding: 1rem;
  border: none;
  width: 300px;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  resize: none;
  outline-color: rgb(202, 202, 202);
  outline-width: thin;
`;

const resize = (obj: any) => {
  obj.style.height = '1px';
  obj.style.height = `${12 + obj.scrollHeight}px`;
};

interface UploadProps {
  isloading: boolean;
}

const UploadForm: React.FC<UploadProps> = ({ isloading }) => {
  return (
    <Card>
      <Container>
        <ContentInput id="content-input" placeholder="문구 입력..." />
        <Line />

        <UploadButton loading={isloading}>업로드</UploadButton>
      </Container>
    </Card>
  );
};

export default UploadForm;
