import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.article`
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

const Card: React.FC = ({ children }) => {
  return (
    <div id="main">
      <section id="content">
        <div className="post_and_story">
          <div id="story" />
          <div
            id="post_list"
            style={{
              paddingTop: '30px'
            }}
          >
            <CardStyle>{children}</CardStyle>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
