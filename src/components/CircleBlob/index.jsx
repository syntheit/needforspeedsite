import React from "react"
import { Link } from "gatsby"
import { CircleBlobContainer, Blob, BlobText } from "./styles"

const CircleBlob = ({ index, text, url, icon }) => {
  return (
    <Link to={url}>
      <CircleBlobContainer>
        <Blob
          src={require(`../../images/circle-blobs/circle-blob-${index}.svg`)}
        />
        <BlobText>{text}</BlobText>
      </CircleBlobContainer>
    </Link>
  )
}

export default CircleBlob
