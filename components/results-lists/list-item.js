import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <Link key={this.props.item.code} href={`/${this.props.page}/${this.props.item.code}`}>
          <a>{this.props.item.nom} ({this.props.item.code})</a>
        </Link>
      </div>
    )
  }
}

ListItem.propTypes = {
  item: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired
}

export default ListItem
