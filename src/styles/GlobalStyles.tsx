import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, #root  {
  height: 100%;
  width: 100%;
  font-family: "Helvetica Neue";
  margin: 0;
  background-color: #f6f7f7;
}

input {
  font-family: "Helvetica Neue";
}
*,
*::before,
*::after {
  box-sizing: border-box; }
`;
