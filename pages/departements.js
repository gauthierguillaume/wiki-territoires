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