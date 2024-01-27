import React from "react";
import styled from "styled-components";

const ChoseButton = ({ isClick, children, onClick }) => {
  return (
    <ChoseBox isClick={isClick} onClick={onClick}>
      {" "}
      {children}
    </ChoseBox>
  );
};

export default ChoseButton;

const ChoseBox = styled.button`
  display: inline;
  width: 100%;
  height: 70px;
  font-size: 20px;
  background-color: ${(props) => (props.isClick ? "#2DD790" : "#eeeef3")};
  color: ${(props) => (props.isClick ? "#FFF" : "#707070")};
  border-radius: 5px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 24px;
`;
