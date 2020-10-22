import React, { useState } from 'react';
import styled from 'styled-components';

const UploadButton = styled.button<{ loading: boolean }>`
  opacity: ${(props) => (props.loading ? '1' : '0.5')};
  pointer-events: ${(props) => (props.loading ? 'all' : 'none')};
`;

const UploadInputUnVisible = styled.input`
  opacity: 0.3;
  pointer-events: none;
`;

const UploadInputVisible = styled.input``;

const Upload: React.FC = () => {
  const [imgFile, setImgFile] = useState();
  const [imgBase64, setImgBase64] = useState('');
  const [isImageLoading, setLoading] = useState(false);

  const clickedUpload = () => {};

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgFile(e.target.files[0]);
      setLoading(true);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChangeFile} />
      <UploadButton type="button" onClick={clickedUpload} loading={isImageLoading}>
        업로드
      </UploadButton>
      <div>{isImageLoading ? <img src={imgBase64} /> : 'Not Image!'}</div>
    </div>
  );
};

export default Upload;
