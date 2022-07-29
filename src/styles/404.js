import styled from "styled-components"

export const LostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121212;
  width: 100%;
`

export const LostHolder = styled.div`
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => (props.height ? props.height : "80vh")};
  width: 60%;
  @media (max-width: 800px) {
    margin-top: 10em;
  }
`

export const LostTitle = styled.h1`
  font-size: ${props => (props.size ? props.size : "calc(10vmax + 12vmin)")};
  margin-bottom: 4rem;
  color: #e5e5e5;
  text-align: center;
`

export const LostText = styled.p`
  font-size: 35px;
  color: #e5e5e5;
  text-align: center;
`
