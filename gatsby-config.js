module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Strata by HTML5 UP",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/conradlin/1aa283fcd5ae4a73ba0f73c062de745e?v=6a40014bee144152b55203e2caf0c02e',
            cacheType: 'html'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
