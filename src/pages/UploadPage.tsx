import React, { useState } from 'react';
import styled from 'styled-components';
import UploadAvatar from '../assets/Upload_Avatar.svg';
import Card from '../components/Card';
import UploadForm from '../components/UploadForm';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 4rem auto 4rem auto;
`;

const FileInputLabel = styled.label`
  display: block;
  width: 150px;
  height: 150px;
  border: 5px dotted rgb(100, 100, 100);
  cursor: pointer;
`;

const FileInput = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  outline: none;
`;

const ImagePreview = styled.div`
  margin: 2rem auto 2rem auto;
  text-align: center;
`;

const FileImage = styled.img`
  background-color: white;
  border: 5px solid rgb(200, 142, 142);
  padding: 1rem;
`;

const UploadPage: React.FC = () => {
  const [imgFile, setImgFile] = useState();
  const [imgBase64, setImgBase64] = useState('');
  const [isImageLoading, setLoading] = useState(false);

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
    <>
      <Card>
        <Container>
          <FileInputLabel htmlFor="upload-image">
            <img src={UploadAvatar} />
          </FileInputLabel>
          <FileInput type="file" onChange={handleChangeFile} id="upload-image" />
        </Container>
      </Card>

      <ImagePreview>{isImageLoading ? <FileImage src={imgBase64} /> : 'Not Image!'}</ImagePreview>

      <UploadForm isloading={isImageLoading} />
    </>
  );
};

export default UploadPage;
