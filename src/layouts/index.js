import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import IdleTimer from 'react-idle-timer'

import Header from '../components/header'
import './index.css'

const onIdle = e => {
  alert('60 seconds Inactivity of User!!')
}

const Layout = ({ children, data }) => (
  <IdleTimer onIdle={onIdle} timeout={60000}>
    <div>
      <Helmet title={data.site.siteMetadata.title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  </IdleTimer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
