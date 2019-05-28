import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="footer__logo">
                        <img src="static/images/etalab.svg" alt="Logo Etalab"></img>
                        <ul className="footer__social">
                            <li>
                                <a href="https://twitter.com/etalab" title="Twitter">
                                    <img src="static/images/medias/twitter.svg" className="icon"></img>
                                </a>
                            </li>
                            <li>    
                                <a href="https://github.com/etalab" title="Github">
                                    <img src="static/images/medias/github.svg" className="icon"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/etalab" title="Facebook">
                                    <img src="static/images/medias/facebook.svg" className="icon"></img>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@data.gouv.fr" title="Nous écrire un mail">
                                    <img src="static/images/medias/envelop.svg" className="icon"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                <ul className="footer__links">
                    <li><h2>Wiki-Territoires</h2></li>
                    <li><a href="https://www.data.gouv.fr/reference">Données de référence</a></li>
                    <li><a href="https://www.data.gouv.fr/terms">Conditions générales d'utilisation</a></li>
                    <li><a href="https://www.data.gouv.fr/api">API</a></li>
                </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
