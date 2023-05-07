import styled from "styled-components";

export const HelperHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2rem;
  color: #333;
`;

export const HelperText = styled.p`
  white-space: pre-line;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-left: 0.5rem;
  padding: 2px;
`;

export const OwnerName = styled.h1`
  font-size: 1.6rem;
  color: red;
  text-align: center;
  margin-top: 3rem;
`;

export const FontDiv = styled.div``;

export const ResizeDesc = styled.div`
  white-space: nowrap; /* Prevents the text from wrapping */
  overflow: hidden; /* Hides the overflowing text */
  text-overflow: ellipsis;
`;
