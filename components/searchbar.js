import React from 'react'
import PropTypes from 'prop-types'
import FaSearch from 'react-icons/lib/fa/search'

class Searchbar extends React.Component {
  handleChange(event) {
    const input = event.target.value
    this.props.onChange(input)
  }

  render() {
    return (
      <div className='search__group'>
        <input
          type='text'
          className='search'
          placeholder='Tapez le nom d’une commune...'
          value={this.props.input}
          onChange={e => this.handleChange(e)}
        />
        <div className='icon-search'><FaSearch /></div>

        <style jsx>{`
                    .icon-search {
                        position: absolute;
                        right: 0.7em;
                        top: 0.5em;
                        color: #26353f;
                    }
                    `}</style>
      </div>
    )
  }
}

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired
}

export default Searchbar
