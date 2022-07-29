import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 42%;
  margin-left: -200px;
  @media (max-width: 800px) {
    margin-left: 0;
    width: 90%;
  }
`
export const AboutTitle = styled.p`
  font-size: 90px;
  color: #e5e5e5;
  font-weight: 700;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  @media(max-width: 780px){
    font-size: 70px
  }
`
export const AboutPara = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 34px;
  color: #e5e5e5;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 46px;
`
export const BulletPointContainer = styled.div`
  margin-top: 20px;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-left: -30px;
  @media (max-width: 800px) {
    margin-left: 0;
    width: 90%;
  }
`
export const AboutLogo = styled.img`
  width: 500px;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;
  @media (max-width: 800px) {
    width: 300px;
  }
`
export const LogoCaption = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: #e5e5e5;
  text-align: center;
  line-height: 36px;
  font-size: 25px;
`
