import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick";
import Footer from "../components/footer"
import SEO from "../components/seo"
import iconLink from "./../images/icon-link.svg"

//voorbeeld id 85ec6abf-4f94-5a40-a987-50d054c90150

class ProjectTemplate extends Component {

  render() {
    const currentPage = this.props.data.wordpressWpProjects

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <div className="projectdetail">
        <SEO title={currentPage.title} />
        {currentPage.acf.project_gallery
        && (
          <div>
            <Slider {...settings}>
              {currentPage.acf.project_gallery.map(item => {                
                return (
                  <picture key={item.id}>
                    <source 
                      media="(min-width: 781px)"
                      className="img-fluid w-100"
                      srcSet={item.desktop.sizes.full.source_url} />
                    <source 
                      media="(max-width: 780px)"
                      className="img-fluid w-100"
                      srcSet={item.mobile.sizes.project.source_url} />
                    <img 
                      src={item.desktop.sizes.full.source_url}
                      className="img-fluid w-100"
                      alt="a cute kitten" />
                  </picture>
                )
                }
              )}
            </Slider>
          </div>
        )}
        
        <div className="container py-2 py-sm-5">
          <div className="row">
            <div className="col-10 col-sm-8 offset-1">
              <h1 className="h3" dangerouslySetInnerHTML={{ __html: currentPage.title }} />
              <span className="intro" dangerouslySetInnerHTML={{ __html: currentPage.excerpt }}/>
              <div className="line-container mt-4">
                <div className="pt-3" dangerouslySetInnerHTML={{ __html: currentPage.content }} />
              </div>
              <p className="">
                <Link to="/contact" className="link">
                  <img src={iconLink} alt="Neem contact op" />Interesse? <span>Neem contact op</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {currentPage.acf.featured_title
          && (
          <div className="featured pb-5">
            {currentPage.acf.featured_image
            && (
              <div className="px-4 pb-4">
                <Img 
                  fluid={currentPage.acf.featured_image.localFile.childImageSharp.fluid}
                />
              </div>
            )}
            <div className="container">
              <div className="row">
                <div className="col-10 col-sm-8 offset-1">
                  <h3 className="mb-3" dangerouslySetInnerHTML={{ __html: currentPage.acf.featured_title }} />
                  <div dangerouslySetInnerHTML={{ __html: currentPage.acf.featured_text }} />
                </div>
              </div>
            </div>
          </div>
        )}        
        <Footer />
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProjects(id: { eq: $id }) {
      title
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      acf {
        project_gallery {
          id
          mobile: media_details {
            sizes {
              project {
                source_url 
              }
            }
          }
          desktop: media_details {
            sizes {
              full {
                source_url 
              }
            }
          }
        }
        featured_title
        featured_text
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`