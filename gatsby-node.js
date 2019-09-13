/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressWpProjects {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressWpProjects } = result.data

	const ProjectTemplate = path.resolve(`./src/templates/project.js`)

	allWordpressWpProjects.edges.forEach(edge => {
	  createPage({
	    // will be the url for the page
	    path: 'project/' + edge.node.slug,
	    // specify the component template of your choice
	    component: slash(ProjectTemplate),
	    // In the ^template's GraphQL query, 'id' will be available
	    // as a GraphQL variable to query for this posts's data.
	    context: {
	      id: edge.node.id,
	    },
	  })
	})
}