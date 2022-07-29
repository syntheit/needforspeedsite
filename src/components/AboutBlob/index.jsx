import React from "react"
import {
  Blob,
  Picture,
  BlobContainer,
  MeatContainer,
  Name,
  Title,
  Bio,
} from "./styles.js"

const AboutBlob = ({ bio, index }) => {
  return (
    <BlobContainer>
      <Blob src={require(`../../images/blobs/blob-${index}.svg`)} />
      <MeatContainer>
        <Picture src={require(`../../images/profilepics/${bio.name}.png`)} />
        <Name>{bio.name}</Name>
        {bio.title ? <Title>{bio.title}</Title> : ""}
        <Title>{bio.department}</Title>
        <Bio>{bio.bio}</Bio>
      </MeatContainer>
    </BlobContainer>
  )
}

export default AboutBlob
