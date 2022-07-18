import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled.div`
  width: 835px;
  margin: 0 auto;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const ProfileTag = styled.div`
  padding: 6px 12px;
  width: 100%;
  height: 54px;
  background: #4b286d;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  background-color: #fafafa;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const ProfileWrapper = styled.div`
  cursor: pointer;
`;

export const ProfileError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
