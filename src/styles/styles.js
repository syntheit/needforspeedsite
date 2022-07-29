import styled from "styled-components"
import BlobBlue from "../images/blobblue.svg"

export const MainContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  z-index: -1;
`
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 70%;
`
export const MainTitle = styled.p`
  font-size: 105px;
  @media (max-width: 800px) {
    font-size: 60px;
  }
  color: white;
  font-weight: 700;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`
export const Subtitle = styled.p`
  font-size: 45px;
  @media (max-width: 800px) {
    font-size: 60px;
  }
  color: white;
  font-weight: 300;
  margin-top: 10px;
  width: 60%;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`
export const MainLogo = styled.img`
  width: 40%;
  @media (max-width: 800px) {
    width: 110%;
  }
  height: auto;
  user-select: none;
`
export const FirstGradient = styled.img`
  top: 0;
  width: 82%;
  height: auto;
  position: absolute;
  right: 0;
  z-index: 0;
`
export const TextDiv = styled.div`
  width: 80%;
  height: 70%;
`
export const SplashDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 55vh;
  width: 60%;
`

export const RobotImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-flow: wrap;
  margin-bottom: 65px;
`

export const TextBlob = styled.div`
  height: 40em;
  width: 55em;
  position: relative;
  margin-left: auto;
  ${props => (props.topMarg ? `margin-top: ${props.topMarg};` : "")}
  @media(max-width: 800px) {
    ${props =>
      props.topMargMobile ? `margin-top: ${props.topMargMobile};` : ""}
  }

  @media (max-width: 800px) {
    height: 20em;
    width: 90%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BlobBlue});
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 100% auto;
    transform: rotate(180deg);
  }

  h1 {
    font-weight: 600;
    font-size: calc(2vmax + 4vmin);
    position: relative;
    color: #e5e5e5;
    margin-top: 1em;
    @media (max-width: 800px) {
      margin-top: 2.2em;
    }
  }

  a {
    font-weight: 400;
    font-size: calc(1vmax + 2vmin);
    position: relative;
    color: #e5e5e5;
    margin-top: 1em;
    text-decoration: none;
  }

  div{
    display: flex;
    flex-direction: column;
    margin-left: ${props => (props.leftMarg ? props.leftMarg : "16em")};
    @media(max-width: 800px){
      margin-left: ${props => (props.leftMargMobile ? props.leftMargMobile : "6em")};
    }
  }
`

