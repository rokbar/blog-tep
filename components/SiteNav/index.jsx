import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to={ prefixLink('/')} activeClassName="current" onlyActiveOnIndex> Įrašai
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/about/')} activeClassName="current"> Apie
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/team/')} activeClassName="current"> Komanda
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
