import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class DepartementsList extends React.Component {
    render() {
        return (
            <div className='dropdownResult'>
                {this.props.departements.length ?
                this.props.departements.map(departement => {
                    return (
                        <Link key={departement.code} href={`/departements/${departement.code}`}><a>
                            <div>
                                {departement.nom} ({departement.code})
                            </div>
                        </a></Link>
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
                    a {
                        text-decoration: none;
                        color: #26353f;
                    }
                `}</style>
            </div>
        )
    }
}

export default DepartementsList