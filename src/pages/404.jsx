import React from "react"
import {
  LostContainer,
  LostHolder,
  LostText,
  LostTitle,
} from "../styles/404.js"
import logo from "../../static/favicon.png"
import Navbar from "../components/Navbar/index.jsx"
import Footer from "../components/Footer/index.jsx"
import SEO from "../components/SEO/seo.jsx"

export default () => {
  return (
    <LostContainer>
      <SEO
         title="404 | Need For Speed Robotics"
        description={`The page you are looking for does not exist`}
        image={logo}
      />
      <Navbar center filled />
      <LostHolder>
        <LostTitle>404</LostTitle>
        <LostText>The page you are looking for does not exist</LostText>
      </LostHolder>
      <Footer />
    </LostContainer>
  )
}
