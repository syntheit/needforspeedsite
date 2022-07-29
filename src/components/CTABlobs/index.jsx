import React from "react"
import { Content } from "../../constants/CircleBlobContent"
import CircleBlob from "../CircleBlob"
import { BlobHolder, InnerBlobHolder } from "./styles"

const CTABlobs = () => {
  return (
    <BlobHolder>
      <InnerBlobHolder>
        {Content.map((content, i) => (
          <CircleBlob key={i} index={i + 1} text={content.text} icon={content.icon} url={content.url}/>
        ))}
      </InnerBlobHolder>
    </BlobHolder>
  )
}

export default CTABlobs
