import styled from "styled-components";

export const BasicButton = styled.button`
  display: flex;
  background-color: rgb(9, 105, 218);
  color: white;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
  padding: 10px;
  font-size: 0.9rem;
  cursor: pointer;
`

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  margin: 0 5px;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0.9rem;
`