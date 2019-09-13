import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Heading from "./../images/heading.inline.svg"
import iconLink from "./../images/icon-link.svg"
import BackgroundImage from 'gatsby-background-image'
import Modal from "../components/modal"

//https://www.npmjs.com/package/react-device-detect
//https://reactjs.org/docs/handling-events.html

class Splash extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
    this.videoRef.play();
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
    this.videoRef.pause();
  }

  handleRef = (video) => {
    this.videoRef = video;
  };

  render() {
    return (
      <StaticQuery query={graphql`
        query {
          desktop: file(relativePath: { eq: "splash.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        
        return (
          <div>
            <BackgroundImage Tag="section"
                               className="splash"
                               fluid={imageData}
                               backgroundColor={`#040e18`}
              >
              <Heading />
            </BackgroundImage>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-8">
                  <div className="position-absolute" style={{top: -100+ 'px'}}>
                    <button className="link link-border-bottom text-white" onClick={this.openModalHandler}>
                      <img src={iconLink} alt="Bekijk onze video" />Haast? <span>Bekijk onze video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video ref={this.handleRef} width="320" height="240" controls>
                      <source src="https://devani.nl/video/devani.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
            </Modal>

          </div>
        )
      }
      }
      />
    )
  }
}

export default Splash