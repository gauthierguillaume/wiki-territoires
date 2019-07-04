import React from 'react'

import Searchbar from '../components/searchbar'
import ResultsList from '../components/results-list'

const startsWithFilter = (a, b) => {
  return a.startsWith(b)
}

const getCommunes = async input => {
  const options = {
    mode: 'cors'
  }
  const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${input}&limit=50`, options)

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
      await getregions(input) :
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
              <ResultsList list={regions} />
              <ResultsList list={departements} />
              <ResultsList list={communes} />
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
