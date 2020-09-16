import React from 'react'
import { graphql } from 'gatsby'
import PostItem from "../components/postItem"
import Layout from '../components/layout'

const Blog = (props) => {
  const { data: { allPosts } } = props
  return (
    <Layout>
      <div id= "main">
        {
          allPosts.nodes.map(node => <PostItem data={node} />)
        }
      </div>
    </Layout>
  )
}

export default Blog
export const query = graphql`
  query {
    allPosts(filter: {status: {eq: "published"}, content_type: {eq: "article"}}  sort: { fields: [publish_date___startDate], order: DESC }) {
      nodes {
        title
        tags
        desc
        content_type
        status
        url
        read_time
        cover_image
        slug
        publish_date{
          startDate(formatString: "YYYY-MMM-DD", fromNow: false)
        }
      }
    }
  }
`