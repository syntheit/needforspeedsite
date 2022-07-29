import React from "react"
import { MainImage, ImageContainer } from "./styles"

const RobotImage = ({ index }) => {
  return (
    <ImageContainer>
      <MainImage src={require(`../../images/robotimages/robot_${index}.jpg`)} />
    </ImageContainer>
  )
}

export default RobotImage
