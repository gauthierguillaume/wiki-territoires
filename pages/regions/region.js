import React from 'react'
import PropTypes from 'prop-types'
import _fetch from 'isomorphic-unfetch'

class Region extends React.Component {
    static getInitialProps = async ({query}) => {
      const res = await _fetch(`https://geo.api.gouv.fr/regions/${query.codeRegion}`, {mode: 'cors'})
      const region = await res.json()

      return {
        region
      }
    }

    render() {
      return (
        <div className='section'>
          <h1 className='section__title'>{this.props.region.nom}</h1>
          <div>Code INSEE : {this.props.region.code}</div>
        </div>
      )
    }
}

Region.propTypes = {
  region: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  }).isRequired
}

export default Region
