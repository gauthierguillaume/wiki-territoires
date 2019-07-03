import React from 'react'

import Searchbar from '../components/searchbar'
import DepartementsList from '../components/departements-list'

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
    super(props)
    this.state = {input: '', filteredDepartements: []}
  }

    departementsFilter = input => {
      return this.departements.filter(departement => startsWithFilter(departement, input))
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

          <div>
            <h2 className='section__title'>Rechercher</h2>
            <div className='wrap'>
              <div className='wrapper'>
                <Searchbar input={input} onChange={this.onSearch} />
                {input.length > 0 && <DepartementsList departements={filteredDepartements} />}
              </div>
            </div>
          </div>
          <style jsx>{`
                    .wrap {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                    .wrapper {
                        width: 80%;
                    }
                    @media (max-width: 768px) {
                        .wrapper {
                            width: 100%;
                        }    
                    }
                    `}</style>
        </div>
      )
    }
}

export default Departements
