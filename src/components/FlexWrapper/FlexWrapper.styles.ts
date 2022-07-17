import styled from "styled-components";

export const Root = styled.div<{
  flexDirection: string;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  marginRight: number;
  alignItems: string;
}>`
  flex-direction: ${(props) => props.flexDirection};
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  align-items: ${(props) => props.alignItems};
  display: flex;
`;
