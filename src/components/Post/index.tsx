import React from 'react';
import styled from 'styled-components';
import Test from '../../pages/test.png';
import Card from '../Card';
import PostHeader from './PostHeader';
import OptionButton from '../../atomics/Button/OptionButton';
import AttributeContainer from '../Attribute';
import LikeCount from '../LikeCount';


const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ImageItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const PostFooter = styled.div`
  width: 100%;
`;

const Preview = styled.div`
  padding: 0 16px;
  font-size: 14px;
`;

const PostContent = styled.span`
  font-size: 14px;
  color: #262626;
  & .writter {
    font-weight: bold;
  }
  & .text {
    overflow-wrap: break-word;
  }
`;

const RepleBox = styled.div``;

const RepleAllButton = styled.div`
  margin-bottom: 4px;
  & * {
    text-decoration: none;
    color: rgb(142, 142, 142);
    line-height: inherit;
  }
`;

const RepleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #262626;
  & .writter {
    font-weight: bold;
  }
  & .text {
    overflow-wrap: break-word;
  }
`;

const TimeTable = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  & * {
    color: rgb(142, 142, 142);
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 10px;
  }
`;

const RepleInput = styled.section`
  border-top: 1.5px solid rgba(222, 222, 222, 0.8);
  margin-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RepleForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
`;

const TextArea = styled.textarea`
  font-size: inherit;
  line-height: 18px;
  width: 100%;
  height: 18px;
  max-height: 80px;
  outline: none;
  border: none;
  resize: none;
  color: rgb(38, 38, 38);
`;

const RepleSubmitBtn = styled.button`
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
  width: 30px;
`;

const Post: React.FC = () => {
  return (
    <Card>
      <PostHeader profileImage="temp" name="arkc" />

      <OptionButton />

      <ImageBox>
        <ImageItem src={Test}></ImageItem>
        <div className="next_picture_radio"></div>
      </ImageBox>

      <PostFooter>
        <AttributeContainer />

        <LikeCount count={123} />

        <Preview>
          <PostContent>
            <span className="writter">arkc</span>
            &nbsp;
            <span className="text">
              가나다라마asdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd바사
            </span>
          </PostContent>
          <RepleBox>
            <RepleAllButton>
              <a href="#">
                댓글 <span>100</span>개 미리보기
              </a>
            </RepleAllButton>
            <RepleContent>
              <span className="writter">abcd</span>
              &nbsp;
              <span className="text">치즈</span>
            </RepleContent>
            <RepleContent>
              <span className="writter">qpeo</span>
              &nbsp;
              <span className="text">우효</span>
            </RepleContent>
          </RepleBox>
        </Preview>
        <TimeTable>
          <a href="#">3시간전</a>
        </TimeTable>
        <RepleInput>
          <RepleForm>
            <TextArea
              aria-label="댓글 달기..."
              placeholder="댓글 달기..."
              autoComplete="off"
              autoCorrect="off"
            ></TextArea>
            <RepleSubmitBtn className="upload" type="submit">
              게시
            </RepleSubmitBtn>
          </RepleForm>
        </RepleInput>
      </PostFooter>
    </Card>
  );
};

export default Post;
