import React from 'react'
import Link from 'next/link'

class Nav extends React.Component {
  render() {
    return (
      <header className='navbar' role='navigation'>
        <div className='navbar__container'>
          <a className='navbar__home' href='/'>
            <img className='navbar__logo' src='/static/images/logo-marianne.svg' />
            <span className='navbar__domain'>Wiki-Territoires</span>
            <img src='/static/images/pointdatagouvfr.svg' className='navbar__gouvfr' alt='data.gouv.fr' />
          </a>

          <nav>
            <ul className='nav__links'>
              <li className='nav__item'><Link href='/regions'><a>Régions</a></Link></li>
              <li className='nav__item'><Link href='/departements'><a>Départements</a></Link></li>
              <li className='nav__item'><Link href='/communes'><a>Communes</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Nav
