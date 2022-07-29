import React from "react"
import {
  CopyrightText,
  FooterContainer,
  MainLogo,
  MiddleContainer,
  GrowContainer,
} from "./styles"
import MenuList from "../MenuList"
import {
  ConnectText,
  MenuTextOne,
  MenuTextTwo,
} from "../../constants/FooterText"

const Footer = () => {
  return (
    <FooterContainer>
      <MenuList content={ConnectText} title="Connect" />
      <MiddleContainer>
        <GrowContainer/>
        <GrowContainer>
          <MainLogo src={require(`../../images/logo-white.svg`)} />
        </GrowContainer>
        <GrowContainer>
          <CopyrightText>
            Need For Speed Robotics™
          </CopyrightText>
        </GrowContainer>
      </MiddleContainer>
      <MenuList content={MenuTextOne} contentTwo={MenuTextTwo} title="Menu" />
    </FooterContainer>
  )
}

export default Footer
