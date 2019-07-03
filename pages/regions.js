import React from 'react'
import Link from 'next/link'

class Regions extends React.Component {
    static getInitialProps = async () => {
      const res = await fetch('https://geo.api.gouv.fr/regions', {mode: 'cors'})
      const json = await res.json()

      return {
        regions: json
      }
    }

    render() {
      return (
        <div className='section'>
          <h1 className='section__title'>Régions</h1>
          <div className='container'>
            <div className='grid'>
              {this.props.regions.map(region => {
                return (
                  <Link key={region.code} href={`/regions/${region.code}`}><a>
                    <div className='region'>
                      {region.nom} ({region.code})
                    </div>
                  </a></Link>
                )
              })}
            </div>
          </div>
          <style jsx>{`
                        .region {
                            padding: 1em;
                            background: #0053b3;
                        }
                        a {
                         color: white;
                         text-decoration: none;   
                         width: 100%;
                        }
                    `}</style>
        </div>
      )
    }
}

export default Regions
