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
         title="Coming Soon | Need For Speed Robotics"
        description={`The page you are looking is not available yet`}
        image={logo}
      />
      <Navbar center filled />
      <LostHolder>
        <LostTitle size="calc(5vmax + 6vmin)">Coming Soon</LostTitle>
        <LostText>The page you are looking is not available yet</LostText>
      </LostHolder>
      <Footer />
    </LostContainer>
  )
}
