import React from 'react'
import PropTypes from 'prop-types'
import _fetch from 'isomorphic-unfetch'

class Commune extends React.Component {
    static getInitialProps = async ({query}) => {
      const res = await _fetch(`https://geo.api.gouv.fr/communes/${query.codeCommune}`, {mode: 'cors'})
      const commune = await res.json()

      return {
        commune
      }
    }

    render() {
      return (
        <div className='section'>
          <h1 className='section__title'>{this.props.commune.nom}</h1>
          <div>Code INSEE : {this.props.commune.code}</div>
          <div>Code Département : {this.props.commune.codeDepartement}</div>
          <div>Code Région : {this.props.commune.codeRegion}</div>
          <div>
            {this.props.commune.codesPostaux.length > 1 ? 'Codes Postaux' : 'Code Postal'} :
            <ul>
              {this.props.commune.codesPostaux.map(codePostal => {
                return (
                  <li key={codePostal}>{codePostal}</li>
                )
              })}
            </ul>
          </div>
          <div>Population : {this.props.commune.population === null ? 'Inconnue' : this.props.commune.population}</div>
        </div>
      )
    }
}

Commune.propTypes = {
  commune: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codeRegion: PropTypes.string.isRequired,
    codeDepartement: PropTypes.string.isRequired,
    codesPostaux: PropTypes.array.isRequired,
    population: PropTypes.number.isRequired
  }).isRequired
}

export default Commune
