import React from 'react'
import PropTypes from 'prop-types'
import _fetch from 'isomorphic-unfetch'

class Departement extends React.Component {
    static getInitialProps = async ({query}) => {
      const res = await fetch(`https://geo.api.gouv.fr/departements/${query.codeDepartement}`, {mode: 'cors'})
      const departement = await res.json()

      return {
        departement
      }
    }

    render() {
      return (
        <div className='section'>
          <h1 className='section__title'>{this.props.departement.nom}</h1>
          <div>Code INSEE : {this.props.departement.code}</div>
          <div>Code Région : {this.props.departement.codeRegion}</div>
        </div>
      )
    }
}

Departement.propTypes = {
  departement: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codeRegion: PropTypes.string.isRequired
  }).isRequired
}

export default Departement
