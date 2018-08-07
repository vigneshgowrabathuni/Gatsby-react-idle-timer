import React from 'react'
import Link from 'gatsby-link'
import Highlight from 'react-highlight'

const IndexPage = () => (
  <div>
    <h3>React Idle Timer</h3>
    <p>
      It is mainly used for <b>session timeout</b>. If you user not performed
      any operation in the website it is considered as a inactivity of user.{' '}
    </p>
    <p>
      This project helps you to setup react idle timer for gatsbyjs project.
    </p>
    <p>
      I have given timeout of 5 seconds. So after 5 seconds of inactivity it
      will display an alert box.
    </p>
    <Highlight language="javascript">
      {`src>layouts>index.js
--------------------
      
const onIdle = e => {
  alert('60 seconds Inactivity of User!!')
}

const Layout = ({ children, data }) => (
<IdleTimer onIdle={onIdle} timeout={5000}>
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
)`}
    </Highlight>
    <p>
      for more info regarding react-idle-timer{' '}
      <a href="https://www.npmjs.com/package/react-idle-timer" target="_blank">
        click here
      </a>
    </p>
    <p>
      for more interesting posts on GatsbyJS please visit{' '}
      <a href="http://www.tech-prompt.com" target="_blank">
        www.tech-prompt.com
      </a>
    </p>
  </div>
)

export default IndexPage
