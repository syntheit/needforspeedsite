import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  height: 11vh;
  position: absolute;
  top: 0;
  z-index: 1;
  ${(props) => props.center ? "justify-content: center;" : ""}
  ${(props) => props.filled ? "background-color: #121212;" : ""}
  @media (max-width: 800px) {
    height: auto;
  }
`
export const InnerNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.center ? "" : "margin-left: 50px;"}
  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 25px;
  }
`
export const LinksDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 20px;
  }
`
export const NavLink = styled(Link)`
  font-size: 26px;
  margin-left: 17px;
  margin-right: 17px;
  text-decoration: none;
  color: white;
  font-weight: ${props => (props.sel ? "600" : "300")};
  user-select: none;
  &:hover {
    color: #e6e6e6;
  }
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`
export const Logo = styled.img`
  width: 135px;
  margin-right: 18px;
  user-select: none;
  -webkit-user-drag: none;
  @media (max-width: 800px) {
    margin-right: 0;
    width: 155px;
  }
`
