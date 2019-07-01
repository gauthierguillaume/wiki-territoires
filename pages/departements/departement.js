import React from 'react'
import _fetch from 'isomorphic-unfetch'

class Departement extends React.Component {
    static getInitialProps = async ({ query }) => {
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

export default Departement
