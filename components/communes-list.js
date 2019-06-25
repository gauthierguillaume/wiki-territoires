import React from 'react'
import PropTypes from 'prop-types'

class CommunesList extends React.Component {
    render() {
        return (
            <div className='dropdownResult'>
                {this.props.communes.length ?
                this.props.communes.map(commune => {
                    return (
                        <div key={commune.code}>
                            {commune.nom} ({commune.code})
                        </div>
                        )
                }) :
                <div>nique</div>
                }
                <style jsx>{`
                    .dropdownResult {
                        background-color: white;
                        color: black;
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}

export default CommunesList