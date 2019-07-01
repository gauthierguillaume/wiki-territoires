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
    super(props)
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

          <div>
            <h2 className='section__title'>Rechercher</h2>
            <div className='wrap'>
              <div className='wrapper'>
                <Searchbar input={input} onChange={this.onSearch} />
                {input.length > 0 && <CommunesList communes={filteredCommunes} />}
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

export default Communes
