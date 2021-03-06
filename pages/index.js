import React from 'react'

import Searchbar from '../components/searchbar'
import ResultsLists from '../components/results-lists'

const getRegions = async input => {
  const options = {
    mode: 'cors'
  }
  const res = await fetch(`https://geo.api.gouv.fr/regions?nom=${input}&limit=8`, options)

  return res.json()
}

const getDepartements = async input => {
  const options = {
    mode: 'cors'
  }
  const res = await fetch(`https://geo.api.gouv.fr/departements?nom=${input}&limit=8`, options)

  return res.json()
}

const getCommunes = async input => {
  const options = {
    mode: 'cors'
  }
  const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${input}&limit=8`, options)

  return res.json()
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: '', regions: [], departements: [], communes: []}
  }

  onSearch = async input => {
    this.setState({input})
    this.setState({regions: input.length > 0 ?
      await getRegions(input) :
      []
    })
    this.setState({departements: input.length > 0 ?
      await getDepartements(input) :
      []
    })
    this.setState({communes: input.length > 0 ?
      await getCommunes(input) :
      []
    })
  }

  render() {
    const {input, regions, departements, communes} = this.state
    const results = {regions, departements, communes}

    return (
      <div>
        <div className='hero__container'>
          <h1 className='hero__white-background'>Wiki-Territoires</h1>
          <p className='hero__white-background'>Site de consultation d’informations relative aux territoires français.</p>
        </div>

        <div>
          <h2 className='section__title'>Rechercher</h2>
          <div className='wrap'>
            <div className='wrapper'>
              <Searchbar input={input} onChange={this.onSearch} />
              <ResultsLists results={results} />
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

export default Home
