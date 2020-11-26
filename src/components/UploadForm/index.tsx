import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import Card from '../Card';
import UploadButton from '../../atomics/Button/UploadButton';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 4rem auto 4rem auto;
`;

const Line = styled.hr<{ gap: string }>`
  width: 450px;
  margin: ${(props) => props.gap} auto ${(props) => props.gap} auto;
`;

const ContentInput = styled(TextareaAutosize)<{ loading: boolean }>`
  opacity: ${(props) => (props.loading ? '1' : '0.3')};
  pointer-events: ${(props) => (props.loading ? 'all' : 'none')};
  padding: 1rem;
  border: none;
  width: 500px;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  resize: none;
  outline-color: rgb(202, 202, 202);
  outline-width: thin;
`;

interface UploadProps {
  readonly isLoading: boolean;
  readonly value: string;
  readonly onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  readonly onClick?: React.MouseEventHandler;
}

const UploadForm: React.FC<UploadProps> = ({ isLoading, value, onChange, onClick }) => {
  const [isContentLoading, setContentLoading] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setContentLoading(true);
    } else {
      setContentLoading(false);
    }
  }, [value]);

  return (
    <Card>
      <Container>
        <ContentInput
          loading={isLoading}
          id="content-input"
          placeholder="문구 입력..."
          rows={3}
          value={value}
          onChange={onChange}
        />

        <Line gap="1.5rem" />

        <UploadButton loading={isContentLoading} onClick={onClick}>
          업로드
        </UploadButton>
      </Container>
    </Card>
  );
};

export default UploadForm;
