import styled from "styled-components";

export const Root = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 70vw;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 5rem;
  border: 2px solid #e7e7e7;
  max-height: 85vh;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
