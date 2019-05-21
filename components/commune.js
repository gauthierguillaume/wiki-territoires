import React from 'react'
import PropTypes from 'prop-types'

class Commune extends React.Component {
    render() {
        const {nom, code, codeDepartement, codeRegion, codesPostaux, population} = this.props
        return (
            <div>
                <h2>Commune de {nom}</h2>
                <div>Code INSEE : {code}</div>
                <div>Département : {codeDepartement}</div>
                <div>Région : {codeRegion}</div>
                <div>
                    {codesPostaux.length > 1 ? 'Code postaux' : 'Code postal'} :
                    <ul>
                        {codesPostaux.map(function (codePostal) {
                            return (
                                <li>{codePostal}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>Population : {population === null ? 'Inconnue' : population}</div>
            </div>
        )
    }
}

Commune.propTypes = {
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codeDepartement: PropTypes.string.isRequired,
    codeRegion: PropTypes.string.isRequired,
    codesPostaux: PropTypes.array.isRequired,
    population: PropTypes.number
}

Commune.defaultProps = {
    population: null
}
  
export default Commune
