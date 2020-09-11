import React from "react";
import styled, { keyframes } from "styled-components";

const ButtonDiv = styled.div`
  background-color: rgba(222, 222, 222, 0.5);
  width: 800px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.6);
`;

const Anispan = styled.span`
  transition: all 1s;
`;
const Textopaup = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  color: black;
  background-color: rgba(236, 238, 194, 0.5);
  float: right;
  transition: all 1s;
  overflow: hidden;
  border: 1px solid #fff;
  &:first-child {
    margin-bottom: 15px;
  }
  ${Anispan} {
    opacity: 0%;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.name === "GET" ? "salmon" : "powderblue"};
    color: #fff;
    box-shadow: 0px 0px 10px 1px grey;
    width: 250px;
    ${Anispan} {
      animation: ${Textopaup} 1s forwards;
    }
  }
`;

interface ButtonsProps {
  onClickGetButton: React.MouseEventHandler;
  onClickPostButton: React.MouseEventHandler;
}

const Buttons: React.FC<ButtonsProps> = ({
  onClickGetButton,
  onClickPostButton,
}) => {
  return (
    <ButtonDiv>
      <Button name="GET" onClick={onClickGetButton}>
        GET!
      </Button>
      <Button name="POST" onClick={onClickPostButton}>
        POST!
      </Button>
    </ButtonDiv>
  );
};

export default Buttons;
