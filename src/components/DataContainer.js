import React, {useState, useEffect} from 'react'
import Data from './Data'

export default function DataContainer() {

    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch('https://swapi.dev/api/people/1')
        .then( resp => resp.json()
        .then(data => setData(data)))
    }, [])

    return (
        <div>
            <h1>This is the data component</h1>
            <h3>{data.name} </h3>
            < Data birth_year = {data.birth_year} />
        </div>
    )
}
