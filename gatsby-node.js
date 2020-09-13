// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = await graphql(`
  query {
      allPosts(filter: {status: {eq: "published"}, content_type: {eq: "article"}}) {
          nodes {
            slug
            url
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }
      
      result.data.allPosts.nodes.forEach(({ slug, url }) => {
        createPage({
            path: `blog/posts/${url}`,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: slug,
            },
        });
    });
  });
  const newsPost = await graphql(`
  query {
      allPosts(filter: {status: {eq: "published"}, content_type: {eq: "newsletter"}}) {
          nodes {
            slug
            url
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }
      
      result.data.allPosts.nodes.forEach(({ slug, url }) => {
        createPage({
            path: `subscribe/posts/${url}`,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: slug,
            },
        });
    });
  });

  return Promise.all([blogPost, newsPost]);
};