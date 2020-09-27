import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
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
  font-weight: bold;
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
  width: 40px;
  height: 40px;
  font-size: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 8px;
  &:last-child {
    margin-left:auto;
  }
`;

const Attribute = styled.a`
  width: 24px;
  height: 24px;
  text-align: center;
  text-decoration: none;
`;

const MainPage: React.FC = () => {
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
            <Card>
              <Header>
                <Profile>
                  <a href="">1</a>
                </Profile>
                <PosterNameDiv>
                  <span className="poster">arkc</span>
                </PosterNameDiv>
              </Header>
              <PostMenu>
                <PostMenuButton type="button">::</PostMenuButton>
              </PostMenu>

              <ImageBox>
                <ImageItem src={Test}></ImageItem>
                <div className="next_picture_radio"></div>
              </ImageBox>

              <PostFooter>
                <AttributeBox>
                  <AttributeWrap id="like"><Attribute href="#">하트</Attribute></AttributeWrap>
                  <AttributeWrap id="coment"><Attribute href="#">댓글</Attribute></AttributeWrap>
                  <AttributeWrap id="share"><Attribute href="#">공유</Attribute></AttributeWrap>
                  <AttributeWrap id="bookmark"><Attribute href="#">북마</Attribute></AttributeWrap>
                </AttributeBox>
                <section className="like_count">
                  <a href="#">
                    좋아요 <span>100</span>개
                  </a>
                </section>
                <div className="miribogi">
                  <div className="post_content">
                    <span className="writer">arkc</span>
                    <span className="text">가나다라마바사</span>
                  </div>
                  <div className="reple">
                    <div className="reple_all_button">댓글 100개 미리보기</div>
                    <div className="reple_conetent">
                      <span className="writer">abcd</span>
                      <span className="text">치즈</span>
                    </div>
                    <div className="reple_conetent">
                      <span className="writer">qpeo</span>
                      <span className="text">우효</span>
                    </div>
                  </div>
                </div>
                <div className="time_table">
                  <a href="#">3시간전</a>
                </div>
                <section className="reple_input">
                  <div className="form">
                    <textarea></textarea>
                    <button className="upload" type="submit">
                      게시
                    </button>
                  </div>
                </section>
              </PostFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
