import React from 'react';
import styled from 'styled-components';
import Test from '../../pages/test.png';

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

const LikeCount = styled.section`
  padding: 0 16px;
  margin-bottom: 8px;
  & * {
    font-size: 14px;
    text-decoration: none;
    color: #262626;
    font-weight: 600;
  }
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
                <AttributeBox>
                  <AttributeWrap id="like">
                    <Attribute href="#">
                      <svg
                        aria-label="좋아요"
                        fill="#262626"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                      </svg>
                    </Attribute>
                  </AttributeWrap>
                  <AttributeWrap id="coment">
                    <Attribute href="#">
                      <svg
                        aria-label="댓글달기"
                        fill="#262626"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                        />
                      </svg>
                    </Attribute>
                  </AttributeWrap>
                  <AttributeWrap id="share">
                    <Attribute href="#">
                      <svg
                        aria-label="게시물 공유"
                        fill="#262626"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                      </svg>
                    </Attribute>
                  </AttributeWrap>
                  <AttributeWrap id="bookmark">
                    <Attribute href="#">
                      <svg
                        aria-label="북마크"
                        fill="#262626"
                        height="24"
                        width="24"
                        viewBox="0 0 48 48"
                      >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                      </svg>
                    </Attribute>
                  </AttributeWrap>
                </AttributeBox>
                <LikeCount>
                  <a href="#">
                    좋아요 <span>100</span>개
                  </a>
                </LikeCount>
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
