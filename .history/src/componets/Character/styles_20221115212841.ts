import styled from "styled-components";

export const Container = styled.div<{left: number, top: number, size: number}>`
  width: 30px;
  height: 30px;
  background-color: red;
`;
