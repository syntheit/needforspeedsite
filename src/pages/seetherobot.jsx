import React from "react"
import { LostContainer, LostHolder, LostText } from "../styles/404.js"
import { RobotImageHolder } from "../styles/styles"
import logo from "../../static/favicon.png"
import Navbar from "../components/Navbar/index.jsx"
import Footer from "../components/Footer/index.jsx"
import SEO from "../components/SEO/seo.jsx"
import RobotImage from "../components/RobotImage/index.jsx"

export default () => {
  return (
    <LostContainer>
      <SEO
        title="See The Robot | Need For Speed Robotics"
        description={`Learn all about our robot and its functions`}
        image={logo}
      />
      <Navbar center filled />
      <LostHolder height="40vh">
        <LostText>See The Robot</LostText>
        <LostText>Learn all about our robot and its functions</LostText>
      </LostHolder>
      <RobotImageHolder>
        {[1, 2, 3, 4].map(i => (
          <RobotImage index={i} />
        ))}
      </RobotImageHolder>
      <Footer />
    </LostContainer>
  )
}
