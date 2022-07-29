import styled from "styled-components"

export const BlueContainer = styled.div`
  display: flex;
  ${props => (props.position ? `justify-content: ${props.position};` : "")}
  background-color: #121212;
  padding-top: 120px;
  width: 100%;
`

export const BlobTextContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BlobBlue = styled.img`
  user-select: none;
  -webkit-user-drag: none;
  width: ${props => (props.blobWidth ? props.blobWidth : "500px")};
  ${props => (props.mirror ? "transform: scaleY(-1) scaleX(-1);" : "")}
  ${props => (props.flipX ? "transform: scaleX(-1);" : "")}
  ${props => (props.flipY ? "transform: scaleY(-1);" : "")}
`

export const BlobText = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 80px;
  color: #e5e5e5;
  position: absolute;
  z-index: 1;
  ${props =>
    props.mirror
      ? "margin-top: -350px; margin-right: -190px;"
      : "margin-top: 10%; margin-left: 7%;"}
  @media(max-width: 800px) {
    /* font-size: 40px; */
    font-size: 220%;
    ${props =>
      props.mirror
        ? "margin-top: -350px; margin-right: -190px;"
        : "margin-top: 20%; margin-left: 10%;"}
  }
`
