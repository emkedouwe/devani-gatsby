import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
     
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header