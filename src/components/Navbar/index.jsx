import React from "react"
import {
  NavbarContainer,
  NavLink,
  Logo,
  LinksDiv,
  InnerNavbarContainer,
} from "./styles"
import NavbarLinks from "../../constants/NavbarLinks.js"
import logoSrc from "../../images/logo-white.svg"
import { Link } from "gatsby"

const Navbar = ({ page, center, filled }) => {
  return (
    <NavbarContainer center={center} filled={filled}>
      <InnerNavbarContainer center={center}>
        <Link to="/">
        <Logo src={logoSrc} />
        </Link>
        <LinksDiv>
          {NavbarLinks.map(link => (
            <NavLink key={link.label} sel={page === link.label ? 1 : 0} to={link.url}>
              {link.label}
            </NavLink>
          ))}
        </LinksDiv>
      </InnerNavbarContainer>
    </NavbarContainer>
  )
}
export default Navbar
