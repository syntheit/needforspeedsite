import styled from "styled-components"

export const BlobContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  width: 430px;
  @media (max-width: 800px) {
    width: auto;
  }
`

export const Blob = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  -webkit-user-drag: none;
  width: 350px;
  position: absolute;
  transform: scaleX(-1);
`

export const MeatContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 70%;
  z-index: 0;
`

export const Name = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: "700";
  font-size: 35px;
  color: #e5e5e5;
  margin-bottom: 8px;
`

export const Title = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  color: #e5e5e5;
  margin-bottom: 5px;
`

export const Bio = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: "400";
  font-size: 19px;
  color: #e5e5e5;
  margin-top: 8px;
  line-height: 24px;
`

export const Picture = styled.img`
  width: 156px;
  height: 156px;
  margin-bottom: 20px;
  user-select: none;
  -webkit-user-drag: none;
`
