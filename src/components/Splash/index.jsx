import React from "react"
import {
  SplashContainer,
  MainTitle,
  FirstGradient,
  SplashDiv,
  Subtitle,
  TextDiv,
} from "./styles.js"
import Navbar from "../Navbar"
import waves from "../../images/blue-waves.svg"

const Splash = () => {
  return (
    <SplashContainer>
      <Navbar page={"Home"} />
      <SplashDiv>
        <TextDiv>
          <MainTitle>
            We are <br />
            Need For Speed
          </MainTitle>
          <Subtitle>The FTC robotics team from Lake Forest, Illinois</Subtitle>
        </TextDiv>
      </SplashDiv>
      <FirstGradient src={waves} />
    </SplashContainer>
  )
}
export default Splash
