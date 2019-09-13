module.exports = {
  siteMetadata: {
    title: `Devani Creative`,
    description: `Devani is creatief reclamebureau en actief in omgeving van Hoorn, Enkhuizen, Purmerend en Alkmaar.`,
    author: `Devani Creative`,
    siteUrl: `https://www.devani.nl`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `devani.nl/cms`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        acfOptionPageIds: [18,34],
        keepMediaSizes: true
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'zts8hgc'
        }
      }
    },
    'gatsby-plugin-layout',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\inline\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32907253-2",
        // Setting this parameter is optional
        anonymize: true
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms'
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}