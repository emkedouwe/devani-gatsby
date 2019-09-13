/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import classnames from "classnames";
import { stack as Menu } from 'react-burger-menu'

import Header from "../components/header"
import Transition from "../components/transition"

import labelImage from "./../images/label-devani.svg"

import "./../styles/main.scss"

//const Layout = ({ children, location }) => {
class Layout extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      visible: false,
      menuOpen: false
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  // Hide or show the menu.
  handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos > 150;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Menu right
              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
              customBurgerIcon={false}
            >
              <Link to="/" className="nav-link" activeClassName="active" onClick={() => this.closeMenu()}>Home</Link>
              <Link to="/contact" className="nav-link" activeClassName="active" onClick={() => this.closeMenu()}>Contact</Link>
            </Menu>
            <div id="page-wrap">
              <button onClick={() => this.toggleMenu()} id="hamburger" className={this.state.visible ? 'visible' : ''}>
                <span></span>
              </button>
              <Link to="/" className={classnames("devani-label", {
                  "visible": this.state.visible
                  })}
                >
                <img src={labelImage} alt="Devani Creative" className="img-fluid" />
              </Link>
              <Header siteTitle={data.site.siteMetadata.title} />
              
              <Transition location={this.props.location}>
                {this.props.children}
              </Transition>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout