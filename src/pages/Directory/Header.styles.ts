import styled from "styled-components";

export const Root = styled.header`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  padding: 40px 20px 38px 75px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dfe1e6;
`;

export const HeaderContainer = styled.div`
  width: 600px;
`;

export const LocationContainer = styled.div`
  display: flex;
  border: 1px solid #eeeeee;
  border-radius: 94px;
  width: 87px;
  height: 37px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  padding: 0;
  width: fit-content;
  height: 150px;
  overflow-x: auto;
  border: 1px solid #eeee;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  position: absolute;
`;

export const NavMenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 5px;
  :hover {
    background-color: #6277f0;
    border-radius: 4px;
  }
`;
