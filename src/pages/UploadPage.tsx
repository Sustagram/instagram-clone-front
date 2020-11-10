import React, { useState } from 'react';
import styled from 'styled-components';
import UploadAvatar from '../assets/Upload_Avatar.svg';
import Card from '../components/Card';
import UploadForm from '../components/UploadForm';
import imageCompression from 'browser-image-compression';

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
  const [isImageLoading, setImageLoading] = useState(false);

  const handleChangeFile = async (e: any) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 614
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setImgFile(compressedFile);

      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setImgBase64(result);
        setImageLoading(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card>
        <Container>
          <FileInputLabel htmlFor="upload-image">
            <img src={UploadAvatar} />
          </FileInputLabel>
          <FileInput
            type="file"
            onChange={handleChangeFile}
            id="upload-image"
            accept="image/jpg,image/png,image/jpeg,image/gif"
          />
        </Container>
      </Card>

      <ImagePreview>{isImageLoading ? <FileImage src={imgBase64} /> : 'Not Image!'}</ImagePreview>

      <UploadForm isLoading={isImageLoading} />
    </>
  );
};

export default UploadPage;
