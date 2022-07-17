import styled from "styled-components";

export const Root = styled.img<{
  height: number;
  width: number;
  borderRadius: number;
  padding: number;
}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}%;
  padding: ${(props) => props.padding}px;
  border: 1px solid #eeeeee;
`;
