import React from "react"
import Commune from "../components/commune";

const communes = [
    {
        nom: "Rouen",
        code: "76540",
        codeDepartement: "76",
        codeRegion: "28",
        codesPostaux: [
            "76000",
            "76100",
            "76600"
        ],
        population: 110117,"_score":1
    },    
    {   nom: "Sotteville-lès-Rouen",
        code: "76681",
        codeDepartement: "76",
        codeRegion: "28",
        codesPostaux:[
            "76300"
        ],
        population: null,
        _score: 0.6774746174842392
    },
    {
        nom: "Déville-lès-Rouen",
        code: "76216",
        codeDepartement: "76",
        codeRegion: "28",
        codesPostaux:[
            "76250"
        ],
        population: 10345,
        _score: 0.6563848072324793
    },
    {
        nom: "Vieux-Rouen-sur-Bresle",
        code: "76739",
        codeDepartement: "76",
        codeRegion: "28",
        codesPostaux:[
            "76390"
        ],
        population: 570,
        _score: 0.620662612755878
    }
]

class App extends React.Component {
    render() {
        const elements = communes.map(function(commune) {
            return (
                <Commune
                    nom={commune.nom}
                    code={commune.code}
                    codeDepartement={commune.codeDepartement}
                    codeRegion={commune.codeRegion}
                    codesPostaux={commune.codesPostaux}
                    population={commune.population}   
                />
            )
        })

        return (
            <div>
                <h1>Wiki-Territoires</h1>
                {elements}
            </div>
        )
    }
}

export default App
