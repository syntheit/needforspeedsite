import { Link } from "gatsby"
import styled from "styled-components"

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18%;
  height: 100%;
  @media (max-width: 780px) {
    width: 85%;
    padding-top: 4em;
    padding-bottom: 4em;
  }
`

export const Title = styled.p`
  font-size: 48px;
  color: #0056d9;
  margin-bottom: 7px;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InnerContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const TextIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  width: 100%;
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  user-select: none;
  -webkit-user-drag: none;
`

export const ContentText = styled.a`
  flex-flow: wrap;
  color: #e5e5e5;
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  text-decoration: none;
  ${(props) => props.size ? `font-size: ${props.size};` : ""}
  ${(props) => props.bottomMargin ? "margin-bottom: 15px;" : ""}
`

export const ContentTextInternal = styled(Link)`
  flex-flow: wrap;
  color: #e5e5e5;
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  margin-bottom: 15px;
  text-decoration: none;
`

export const Bar = styled.div`
  background-color: #ffffff;
  height: 3px;
  width: 38%;
  margin-bottom: 20px;
  margin-left: 3px;
`
