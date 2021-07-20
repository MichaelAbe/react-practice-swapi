import React, {useState, useEffect} from 'react'
import Data from './Data'

export default function DataContainer() {

    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then( resp => resp.json()
        .then(data => setData(data)))
    }, [])

    const mapChar = () => {
        return data.results.map(person => < Data name =  {person.name} /> )
    }

    return (
        <div>
            <h1>This is the data component</h1>
            {console.log(data)}
            { mapChar() }
        </div>
    )
}
