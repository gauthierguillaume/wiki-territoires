import React from 'react'

class Nav extends React.Component {
    render() {
        return (
        <header className="navbar" role="navigation">
            <div className="navbar__container">
                <a className="navbar__home" href="/">
                    <img className="navbar__logo" src="static/images/logo-marianne.svg"></img>
                    <span className="navbar__domain">Wiki-Territoires</span>
                    <img src="static/images/pointdatagouvfr.svg" className="navbar__gouvfr" alt="data.gouv.fr"></img>
                </a>

                <nav>
                    <ul className="nav__links">
                    <li className="nav__item"><a href="regions">Régions</a></li>
                    <li className="nav__item"><a href="departements">Départements</a></li>
                    <li className="nav__item"><a href="communes">Communes</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        )
    }
}

export default Nav
