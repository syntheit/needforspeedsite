import React from "react"
import {
  MenuContainer,
  Title,
  ContentText,
  ContentTextInternal,
  ContentContainer,
  InnerContentContainer,
  TextIconContainer,
  Icon,
  Bar,
} from "./styles"

const MenuList = ({ title, content, contentTwo }) => {
  return (
    <MenuContainer>
      <Bar />
      <Title>{title}</Title>
      <ContentContainer>
        <InnerContentContainer>
          {content &&
            content.map(elContent =>
              elContent.external ? (
                <TextIconContainer key={elContent.text}>
                  {elContent.icon && (
                    <Icon
                      src={require(`../../images/icons/${elContent.icon}`)}
                    />
                  )}
                  <ContentText
                    size={elContent.size}
                    title={elContent.tooltip}
                    href={elContent.url}
                  >
                    {elContent.text}
                  </ContentText>
                </TextIconContainer>
              ) : (
                <ContentTextInternal
                  key={elContent.text}
                  title={elContent.text}
                  to={elContent.url}
                >
                  {elContent.text}
                </ContentTextInternal>
              )
            )}
        </InnerContentContainer>
        <InnerContentContainer>
          {contentTwo &&
            contentTwo.map(elContent =>
              elContent.external ? (
                <ContentText
                  key={elContent.text}
                  title={elContent.text}
                  href={elContent.url}
                  bottomMargin
                >
                  {elContent.text}
                </ContentText>
              ) : (
                <ContentTextInternal
                  key={elContent.text}
                  title={elContent.text}
                  to={elContent.url}
                >
                  {elContent.text}
                </ContentTextInternal>
              )
            )}
        </InnerContentContainer>
      </ContentContainer>
    </MenuContainer>
  )
}

export default MenuList
