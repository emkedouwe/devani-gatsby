import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Splash from "../components/splash"
import Projects from "../components/projects"
import ExtraInfo from "../components/extrainfo"
import FooterHomepage from "../components/footerHomepage"

import iconLink from "./../images/icon-link.svg"

const IndexPage = ({data}) => {

  return (
    <>
      <SEO title="Reclamebureau Hoorn - Enkhuizen - Alkmaar" description="Devani is een creatief reclamebureau en actief in omgeving van Hoorn, Enkhuizen, Purmerend en Alkmaar." />
      <Splash />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8">
              <p className="lead">Matcht de huidige uitstraling niet bij wie jullie eigenlijk zijn? Jammer, want daardoor valt je bedrijf niet op tussen de rest. Je laat jezelf niet goed genoeg zien en loopt klanten en omzet mis.</p>
              <p className="my-4">Een mooi design gaat je helaas niet helpen. Het moet ook werken. We kunnen je helpen met authentieke en eerlijke content dat opvalt en prikkelt. Want hoe meer jij jezelf bent, hoe meer jij je onderscheidt van de rest. Maar voor we dat doen maken we samen een strijdplan en brengen de strategie visueel tot leven. Het is de basis voor al je communicatie- en marketingactiviteiten.</p>
              <p className="mb-4"> Voor een nieuwe huisstijl die wel bij jullie past, die moderne website die er maar niet lijkt te komen, een film die al jaren op de wensenlijst staat en jawel ook voor alle toekomstige campagnes die we samen gaan maken. Wij zijn Devani, je partner in communicatie. Wie ben jij?</p>
              <Link to="/contact" className="link">
                <img src={iconLink} alt="Neem contact op" />Nieuwsgierig? <span>Contact ons</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Projects items={data.allWordpressWpProjects.edges} />
      <ExtraInfo />
      <FooterHomepage tuktuk="true" />
    </>
  )

}

export default IndexPage

export const query = graphql`
  query {
    allWordpressWpProjects(limit: 5, sort: { fields: [date], order:DESC}) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          acf {
            uitgelicht
            project_subtitle
          }
        }
      }
    }
  }
`