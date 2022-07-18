import styled, { css } from "styled-components";

export const Root = styled.div<{
  color: string;
  fontSize: number;
  fontWeight: number;
  capitalize: boolean;
  textAlignCenter: boolean;
  lineHeight: number;
  marginBottom: number;
  marginTop: number;
  ellipsis: boolean;
  marginRight: number;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-right: ${(props) => props.marginRight}px;
  ${(props) =>
    props.capitalize &&
    css`
      text-transform: uppercase;
    `};
  ${(props) =>
    props.textAlignCenter &&
    css`
      text-align: center;
      width: 100%;
      height: 50px;
      padding-top: 1rem;
    `};
  ${(props) =>
    props.ellipsis &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `};
  font-family: "Helvetica Neue";
`;
