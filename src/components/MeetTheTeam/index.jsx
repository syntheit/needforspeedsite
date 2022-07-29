import React from "react"
import AboutBlob from "../AboutBlob"
import { members } from "../../constants/Biotext"
import { BlobHolder } from "../MeetTheTeam/styles"

const MeetTheTeam = () => {
  return (
    <BlobHolder>
      {members.map((bio, i) => (
        <AboutBlob key={i} bio={bio} index={i + 1} />
      ))}
    </BlobHolder>
  )
}

export default MeetTheTeam
