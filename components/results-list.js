import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class ResultsList extends React.Component {
  render() {
    return (
      <div className='dropdown-result'>
        {this.props.list.length > 0 ?
          this.props.list.map(item => {
            return (
              <Link key={item.code} href={`/list/${item.code}`}>
                <a>
                  <div>
                    {item.nom} ({item.code})
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

ResultsList.propTypes = {
  list: PropTypes.array.isRequired
}

export default ResultsList
