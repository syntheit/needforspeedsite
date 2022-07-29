import styled from "styled-components"

export const CircleBlobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 8%;
  }
`

export const Blob = styled.img`
  width: 20em;
  height: 20em;
  user-select: none;
  -webkit-user-drag: none;
`

export const BlobText = styled.p`
  position: absolute;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
`
