import React from "react"
import { BulletContainer, Circle, Content } from "./styles"

const BulletPoint = ({ content }) => {
  return (
    <BulletContainer>
      <Circle />
      <Content>{content}</Content>
    </BulletContainer>
  )
}
export default BulletPoint
