import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery query={graphql`
    query {
      tuktuk: file(relativePath: { eq: "tuktuk-devani.png" }) {
        childImageSharp {
          sizes(maxWidth: 798) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  `}
    render={data => {
      return (
        <Img sizes={data.tuktuk.childImageSharp.sizes} alt="Tuk Tuk" className="d-none d-sm-block" style={{ marginTop: -125 + 'px'}} />
      )
    }}
  />
)