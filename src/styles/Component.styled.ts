import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2rem;
  color: #333;
`;

export const BaseButton = styled.button`
  background-color: #006699;
  color: #eee;
  cursor: pointer;
  padding: 3px;
  font-size: 1.4rem;
  border-radius: 10px;
  outline: none;
  margin-top: 2rem;
  text-shadow: 2px 2px 2px #333;
`;

export const HelperText = styled.p`
  white-space: pre-line;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-left: 0.5rem;
  text-shadow: 2px 2px 2px #eee;
  padding: 2px;
`;

export const OwnerName = styled.h1`
  font-size: 1.6rem;
  color: red;
  text-align: center;
  margin-top: 3rem;
  text-shadow: 2px 2px 2px #eee;
`;
