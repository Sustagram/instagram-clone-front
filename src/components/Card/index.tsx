import React from 'react';
import styled from 'styled-components';
import Test from '../../pages/test.png';
import AttributeContainer from '../AttributeContainer';
import LikeCount from '../LikeCount';

const CardBox = styled.article`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  @media only screen and (min-width: 640px) {
    width: 602px;
    border: 1px solid rgb(222, 222, 222);
    border-radius: 3px;
  }
`;

const Header = styled.header`
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(222, 222, 222);
  width: 600px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const Profile = styled.div`
  background-color: powderblue;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  text-align: center;
`;

const PosterNameDiv = styled.div`
  width: 100%;
  margin-left: 14px;
`;

const PostMenu = styled.div`
  position: absolute;
  top: 0;
  right: 4px;
  width: 40px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostMenuButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

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

const AttributeBox = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
`;

const AttributeWrap = styled.div`
  display: flex;
  margin-left: -8px;
  width: 40px;
  height: 40px;
  font-size: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 8px;
  &:last-child {
    margin-left: auto;
    margin-right: -8px;
  }
`;

const Attribute = styled.a`
  width: 24px;
  height: 24px;
  text-align: center;
  text-decoration: none;
  color: #262626;
  line-height: 24px;
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

const Card: React.FC = () => {
  return (
    <div id="main">
      <section id="content">
        <div className="post_and_story">
          <div id="story"></div>
          <div
            id="post_list"
            style={{
              paddingTop: '30px'
            }}
          >
            <CardBox>
              <Header>
                <Profile>
                  <a href="">1</a>
                </Profile>
                <PosterNameDiv>
                  <span className="poster">arkc</span>
                </PosterNameDiv>
              </Header>
              <PostMenu>
                <PostMenuButton type="button">
                  <svg
                    aria-label="옵션 더 보기"
                    fill="#262626"
                    height="16"
                    width="16"
                    viewBox="0 0 48 48"
                  >
                    <circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5" />
                    <circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5" />
                    <circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5" />
                  </svg>
                </PostMenuButton>
              </PostMenu>

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
            </CardBox>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
