import styled from "styled-components"

export const BlobHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
`

export const InnerBlobHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  @media (max-width: 780px) {
    justify-content: center;
  }
`
