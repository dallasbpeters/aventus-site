import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/aventus-logo--white-ish.svg"

const Header = ({ siteTitle }) => (
  <div className="container">
    <header className="flex items-center justify-between mb-6 md:mb-10 mt-6 md:mb-10 p-3 lg:p-0">
      <Link to="/" className="block">
        <Logo title={siteTitle} />
      </Link>
      <ul className="flex uppercase font-display text-xl">
        <li className="p-1">
          <a href="#philosophy">Philosophy</a>
        </li>
        <li className="p-1">
          <a href="#services">Services</a>
        </li>
        <li className="p-1">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
