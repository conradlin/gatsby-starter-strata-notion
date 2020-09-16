import React from 'react'
import { graphql } from 'gatsby'
import NewsItem from "../components/newsItem"
import Layout from '../components/layout'

const Subscribe = (props) => {
  const { data: { allPosts } } = props
    return (
    <Layout>
      <div id= "main">
        {
          allPosts.nodes.map(node => <NewsItem data={node} />)
        }
      </div>
    </Layout>
  )
}

export default Subscribe
export const query = graphql`
  query {
    allPosts(filter: {status: {eq: "published"}, content_type: {eq: "newsletter"}} sort: { fields: [publish_date___startDate], order: DESC }) {
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