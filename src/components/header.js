import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Scrollspy from "react-scrollspy"
import Scroll from "./scroll"

import Logo from "../images/aventus-logo--white-ish.svg"

const Header = ({ siteTitle }) => (
  <div className="container">
    <header className="flex items-center justify-between mb-6 md:mb-10 mt-6 md:mb-10 p-3 lg:p-0">
      <Link to="/" className="block">
        <Logo title={siteTitle} />
      </Link>
      <Scrollspy
        items={["philosophy", "services", "contact"]}
        currentClassName="is-active"
        offset={-300}
      ></Scrollspy>
      <ul className="flex uppercase font-display text-xl">
        <li className="p-1">
          <Scroll type="id" element="philosophy">
            <a href="#philosophy">Philosophy</a>
          </Scroll>
        </li>
        <li className="p-1">
          <Scroll type="id" element="services">
            <a href="#services">Services</a>
          </Scroll>
        </li>
        <li className="p-1">
          <Scroll type="id" element="contact">
            <a href="#contact">Contact</a>
          </Scroll>
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
