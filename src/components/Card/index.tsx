import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.article`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  margin-bottom: 4rem;
  background-color: #fff;
  @media only screen and (min-width: 640px) {
    width: 602px;
    border: 1px solid rgb(222, 222, 222);
    border-radius: 3px;
  }
`;

const Card: React.FC = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

export default Card;
