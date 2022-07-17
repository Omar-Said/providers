import styled, { css } from "styled-components";

export const Root = styled.div<{
  color: string;
  width: number;
  height: number;
  paddingLeft: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  marginTop: number;
  marginLeft: number;
  isFitContent: boolean;
  borderBottom: boolean;
}>`
  background: ${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  ${(props) =>
    props.borderBottom &&
    css`
      border-bottom: 1px solid #eeee;
    `}
  ${(props) =>
    props.isFitContent &&
    css`
      height: fit-content;
    `}
  padding-left: ${(props) => props.paddingLeft}px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-right: ${(props) => props.paddingRight}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;

  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
