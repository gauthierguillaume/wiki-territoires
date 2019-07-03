import React from 'react'
import Link from 'next/link'

class CommunesList extends React.Component {
  render() {
    return (
      <div className='dropdown-result'>
        {this.props.communes.length > 0 ?
          this.props.communes.map(commune => {
            return (
              <Link key={commune.code} href={`/communes/${commune.code}`}><a>
                <div>
                  {commune.nom} ({commune.code})
                </div>
              </a></Link>
            )
          }) :
          <div>Aucun résultats</div>
        }
        <style jsx>{`
                    .dropdown-result {
                        background-color: white;
                        color: black;
                        padding: 10px;
                    }
                    a {
                        text-decoration: none;
                        color: #26353f;
                    }
                `}</style>
      </div>
    )
  }
}

export default CommunesList
