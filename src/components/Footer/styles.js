import styled from "styled-components"

export const FooterContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 550px;
  width: 100%;
  background-color: #10161f;
  @media (max-width: 780px) {
    flex-direction: column;
  }
  overflow: hidden;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const MainLogo = styled.img`
  height: 8em;
  width: auto;
  user-select: none;
  -webkit-user-drag: none;
  @media (max-width: 800px) {
    height: 7em;
    padding: 1.5em;
  }
`

export const CopyrightText = styled.p`
  color: #e5e5e5;
  font-family: "Josefin Sans", sans-serif;
  position: absolute;
  font-size: 16px;
  text-align: center;
  ${props => (props.mobile ? "positon: relative;" : "")}
`

export const GrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9em;
  @media (max-width: 800px) {
    height: 4em;
  }
  flex-grow: ${props => (props.grow ? props.grow : 0)};
`
