import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render () {

      return (
        <div className="blog-links">
          <ul>
            {config.siteFacebookUrl && (
              <li>
                <a href={config.siteFacebookUrl}>
                  <i className="fa fa-facebook" />
                </a>
              </li>
            )}
            {config.siteTwitterUrl && (
              <li>
                <a href={config.siteTwitterUrl}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
            )}
          </ul>
        </div>
      )
  }
}

export default SiteLinks