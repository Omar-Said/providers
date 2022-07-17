import styled from "styled-components";

export const Root = styled.header`
  width: 100%;
  background-color: #fff;
  height: 192px;
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
  width: 69px;
  height: 37px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const NavMenuItem = styled.li`
  list-style: none;
  cursor: pointer;
`;
