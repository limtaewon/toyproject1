import React from "react";
import styled from "styled-components";
const StyleButton = styled.a`
  border: 2px solid #091691;
  display: inherit;
  background-color: #ffffff;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6;
  font-weight: bold;
  padding: 2em 4em;
  transform-style: preserve-3d;
  border-radius: 0.75em;
  user-select: none;
  box-shadow: 0 0 0 2px #879acc, 0.4em 0.3em 0 0em #218997;
  transition: background 0.15s ease-out, transform 0.15s ease-out;
  font-family: inherit;
  margin-bottom: 50px;

  &:hover {
    background: #e8f4ff;
    transform: translateY(0.25em);
  }
`;
export function BlueButton({ text, ClickEvent }) {
  return <StyleButton onClick={ClickEvent}>{text}</StyleButton>;
}
