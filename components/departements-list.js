import React from 'react'
import PropTypes from 'prop-types'

class DepartementsList extends React.Component {
    render() {
        return (
            <div className='dropdownResult'>
                {this.props.departements.length ?
                this.props.departements.map(departement => {
                    return (
                        <div key={departement.code}>
                            {departement.nom} ({departement.code})
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

export default DepartementsList