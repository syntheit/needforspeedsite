import React from "react"
import {
  AboutContainer,
  LeftContainer,
  AboutTitle,
  AboutPara,
  BulletPointContainer,
  RightContainer,
  AboutLogo,
  LogoCaption,
} from "./styles"
import { AboutBio, LogoComment } from "../../constants/text"
import logoWhite from "../../images/logo-white.svg"
import BulletPoint from "../BulletPoint"
import { bulletpoints } from "../../constants/bulletpoints"

const About = () => {
  return (
    <AboutContainer>
      <LeftContainer>
        <AboutTitle id="about">Who are we?</AboutTitle>
        <AboutPara>{AboutBio}</AboutPara>
        <BulletPointContainer>
          {bulletpoints.map((content, i) => (
            <BulletPoint key={i} content={content} />
          ))}
        </BulletPointContainer>
      </LeftContainer>
      <RightContainer>
        <AboutLogo src={logoWhite} />
        <LogoCaption>{LogoComment}</LogoCaption>
      </RightContainer>
    </AboutContainer>
  )
}

export default About
