import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './list-item'

class ResultsLists extends React.Component {
  render() {
    const {results} = this.props

    return (
      <div className='dropdown-result'>
        {Object.keys(results).map(key => {
          return results[key].length > 0 && (
            <div key={key}>
              <div className='title'>{key}</div>
              {results[key].map(item => (
                <ListItem key={item.code} item={item} page={key} />
              ))}
            </div>
          )
        })}

        <style jsx>{`
          .dropdown-result {
              background-color: white;
              color: black;
              padding: 10px;
          }

          .title:first-letter {
            font-size: large;
          }
        `}</style>
      </div>
    )
  }
}

ResultsLists.propTypes = {
  results: PropTypes.shape({
    regions: PropTypes.array,
    departements: PropTypes.array,
    communes: PropTypes.array
  }).isRequired
}

export default ResultsLists
