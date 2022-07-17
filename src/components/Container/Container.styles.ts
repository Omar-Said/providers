import styled from "styled-components";

export const Root = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 598px;
  margin: 0 auto;
  margin-top: 6px;
  height: 167px;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 10px 16px 14px 16px;
`;
