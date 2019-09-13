import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectTeaser = data => {

	let projectclass = 'card';

	if(data.item.acf.uitgelicht === true) {
		projectclass = projectclass + ' big';
	}
	return (
		<div className={projectclass}>
			<Link to={"/project/" + data.item.slug}>
				{data.item.featured_media
	  			&& (
	    			<Img 
	    				fluid={data.item.featured_media.localFile.childImageSharp.fluid}
	    				className="card-img-top img-fluid"
	    			/>
	  			)
				}
				<div className="card-body">
		  			<h3 className="card-title text-white">{data.item.title}</h3>
				  	<p 
				  		className="card-text text-muted"
				  		dangerouslySetInnerHTML={{ __html: data.item.acf.project_subtitle }}
				  	/>
			  </div>
		  </Link>
		</div>
	)
}

export default ProjectTeaser