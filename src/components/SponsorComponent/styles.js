import styled from "styled-components"

export const SponsorContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 50px;
  width: 50%;
  @media (max-width: 800px) {
    width: 90%;
  }
`

export const SponsorLogo = styled.img`
  width: 40%;
  @media (max-width: 800px) {
    width: 100%;
  }
  height: auto;
  margin-bottom: 30px;
  user-select: none;
`

export const SponsorBio = styled.p`
  color: #e5e5e5;
  font-size: calc(1vmax + 1vmin);
  line-height: 1.2;
  @media (max-width: 780px) {
    font-size: calc(2vmax + 1vmin);
  }
`
