import React from "react"
import { SponsorBio, SponsorContainer, SponsorLogo } from "./styles"

const SponsorComponent = ({ logo, bio, website }) => {
  return (
    <SponsorContainer>
      {logo && (
        <a href={website}>
          <SponsorLogo src={logo} />
        </a>
      )}
      {bio && <SponsorBio>{bio}</SponsorBio>}
    </SponsorContainer>
  )
}

export default SponsorComponent
