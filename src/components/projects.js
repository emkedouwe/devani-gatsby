import React from "react"
import headingProjecten from "./../images/heading-mooie-projecten.svg"
import headingDevani from "./../images/heading-dit-maakt-ons-devani.svg"
import ProjectTeaser from "../components/projectteaser"

const Projects = data => {

  return (
    <section className="latest-projects">
      <div className="grid-container ">
        <div className="text text-center d-flex justify-content-center align-items-center">
          <div className="d-inline-block mb-3">
            <img src={headingProjecten} height="99" alt="Mooie projecten" />
            <h6>met mooie verhalen</h6>
          </div>
        </div>
        {data.items.map(item =>
          <ProjectTeaser 
            key={item.node.id} 
            item={item.node} />
        )}        
        <div className="text2 text-center bg-dark d-flex justify-content-center align-items-end">
          <div className="d-inline-block mt-4">
            <img src={headingDevani} height="94" alt="Dit maakt ons Devani" />
            <h6 className="text-white">dit is ons verhaal</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects