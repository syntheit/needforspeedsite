import React from "react"
import { BlueContainer, BlobBlue, BlobText, BlobTextContainer } from "./styles"
import waves from "../../images/blobblue.svg"

const BlueBlob = ({position, width, flipX, flipY, mirror, showText, id}) => {
  return (
    <BlueContainer position={position} id={id}>
      <BlobTextContainer>
        <BlobBlue
          blobWidth={width}
          flipX={flipX}
          flipY={flipY}
          mirror={mirror}
          src={waves}
        />
        {showText ? (
          <BlobText mirror={mirror}>{showText}</BlobText>
        ) : (
          ""
        )}
      </BlobTextContainer>
    </BlueContainer>
  )
}

export default BlueBlob