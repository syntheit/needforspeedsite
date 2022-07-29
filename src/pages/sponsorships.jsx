import React from "react"
import { MainContainer, TextBlob } from "../styles/styles.js"
import { SponsorEmail } from "../constants/text.js"
import logo from "../../static/favicon.png"
import Footer from "../components/Footer/index.jsx"
import Navbar from "../components/Navbar/index.jsx"
import SponsorComponent from "../components/SponsorComponent/index.jsx"
import { sponsors } from "../constants/Sponsors"
import { SponsorHolder } from "../styles/sponsors.js"
import SEO from "../components/SEO/seo.jsx"

export default () => {
  return (
    <MainContainer>
      <SEO
        title="Sponsorships | Need For Speed Robotics"
        description={`View our current sponsors and learn how to sponsor us`}
        image={logo}
      />
      <Navbar page="Sponsorships" />
      <TextBlob topMarg="6em" topMargMobile="14em">
        <div>
          <h1>Our Sponsors</h1>
          <a href={SponsorEmail}>Learn more about sponsorships</a>
        </div>
      </TextBlob>
      <SponsorHolder>
        {sponsors.map(spon => (
          <SponsorComponent
            bio={spon.bio}
            logo={spon.logo}
            website={spon.website}
          />
        ))}
      </SponsorHolder>
      <Footer />
    </MainContainer>
  )
}
