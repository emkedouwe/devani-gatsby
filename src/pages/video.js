import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"

const VideoPage = ({data}) => {

  return (
    <>
      <SEO title="Bekijk onze video" keywords={[`gatsby`, `application`, `react`]} />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Devani Showreel" width="560" height="315" src="https://www.youtube.com/embed/cULBSNQwtqY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )

}

export default VideoPage