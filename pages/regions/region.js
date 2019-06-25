import React from "react"

class Region extends React.Component {
    static getInitialProps = async ({ query }) => {
        const res = await fetch(`https://geo.api.gouv.fr/regions/${query.codeRegion}`, {mode: 'cors'})
        const region = await res.json()
        
        return {
            region
        }
    } 

    render() {
        return (
                <div className="section">
                    <h1 className="section__title">{this.props.region.nom}</h1>
                    <div>Code INSEE : {this.props.region.code}</div>
                </div>
        )
    }
}   

export default Region
