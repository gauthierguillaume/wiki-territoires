import React from 'react'

import Searchbar from '../components/searchbar.js'
import CommunesList from '../components/communes-list.js'

const startsWithFilter = (a, b) => {
    return a.startsWith(b)
}

const getCommunes = async input => {
    const options = {
        mode: 'cors'
    }
    const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${input}&limit=15`, options)

    return res.json()
}

class Communes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: '', filteredCommunes: []}
    }
    
    communesFilter = input => {
        return communes.filter(commune => startsWithFilter(commune, input))
    }

    onSearch = async input => {
        this.setState({input})
        this.setState({filteredCommunes: input.length > 0 ?
            await getCommunes(input) :
            []
        })
    }

    render() {
        const {input, filteredCommunes} = this.state
        return (
            <div>
                <div className='section'>
                    <h1 className='section__title'>Communes</h1>
                </div>

                <div className="">
                    <h2 className="section__title">Rechercher</h2>
                    <div className='madame'>
                        <div className='monsieur'>
                            <Searchbar input={input} onChange={this.onSearch} />
                            {input.length > 0 && <CommunesList communes={filteredCommunes} />}
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

export default Communes


// import React from 'react'
// import PropTypes from 'prop-types'

// class Commune extends React.Component {
//     render() {
//         const {nom, code, codeDepartement, codeRegion, codesPostaux, population} = this.props
//         return (
//             <div>
//                 <h2>Commune de {nom}</h2>
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

// Commune.propTypes = {
//     nom: PropTypes.string.isRequired,
//     code: PropTypes.string.isRequired,
//     codeDepartement: PropTypes.string.isRequired,
//     codeRegion: PropTypes.string.isRequired,
//     codesPostaux: PropTypes.array.isRequired,
//     population: PropTypes.number
// }

// Commune.defaultProps = {
//     population: null
// }
  
// export default Commune
