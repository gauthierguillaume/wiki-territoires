import React from 'react'

import Searchbar from '../components/searchbar.js'
import DepartementsList from '../components/departements-list.js'

const startsWithFilter = (a, b) => {
    return a.startsWith(b)
}

const getDepartements = async input => {
    const options = {
        mode: 'cors'
    }
    const res = await fetch(`https://geo.api.gouv.fr/departements?nom=${input}&limit=15`, options)

    return res.json()
}

class Departements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: '', filteredDepartements: []}
    }
    
    departementsFilter = input => {
        return departements.filter(departement => startsWithFilter(departement, input))
    }

    onSearch = async input => {
        this.setState({input})
        this.setState({filteredDepartements: input.length > 0 ?
            await getDepartements(input) :
            []
        })
    }

    render() {
        const {input, filteredDepartements} = this.state
        return (
            <div>
                <div className='section'>
                    <h1 className='section__title'>Départements</h1>
                </div>

                <div className="">
                    <h2 className="section__title">Rechercher</h2>
                    <div className='madame'>
                        <div className='monsieur'>
                            <Searchbar input={input} onChange={this.onSearch} />
                            {input.length > 0 && <DepartementsList departements={filteredDepartements} />}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .madame {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                    .monsieur {
                        width: 80%;
                    }
                    @media (max-width: 768px) {
                        .monsieur {
                            width: 100%;
                        }    
                    }
                    
                    `}</style>
            </div>
        )
    }
}

export default Departements


// import React from 'react'
// import PropTypes from 'prop-types'

// class departement extends React.Component {
//     render() {
//         const {nom, code, codeDepartement, codeRegion, codesPostaux, population} = this.props
//         return (
//             <div>
//                 <h2>departement de {nom}</h2>
//                 <div>Code INSEE : {code}</div>
//                 <div>Département : {codeDepartement}</div>
//                 <div>Région : {codeRegion}</div>
//                 <div>
//                     {codesPostaux.length > 1 ? 'Code postaux' : 'Code postal'} :
//                     <ul>
//                         {codesPostaux.map(function (codePostal) {
//                             return (
//                                 <li>{codePostal}</li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//                 <div>Population : {population === null ? 'Inconnue' : population}</div>
//             </div>
//         )
//     }
// }

// departement.propTypes = {
//     nom: PropTypes.string.isRequired,
//     code: PropTypes.string.isRequired,
//     codeDepartement: PropTypes.string.isRequired,
//     codeRegion: PropTypes.string.isRequired,
//     codesPostaux: PropTypes.array.isRequired,
//     population: PropTypes.number
// }

// departement.defaultProps = {
//     population: null
// }
  
// export default departement
