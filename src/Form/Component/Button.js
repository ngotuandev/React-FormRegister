import styled from "styled-components";
//----------------button-------------------
export const Button = styled.button`
  apperance: none;
  background-color: #2aa448;
  color: #fff;
  border: #2aa448;
  border-radius: 5px;
  padding: 0.5em 0.75em;
  transition: all 0.5s;
  font-size: 17px;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
