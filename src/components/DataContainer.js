import React, {useState, useEffect} from 'react'
import Data from './Data'

export default function DataContainer() {

    const [data, setData] = useState('')
    // const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then( resp => resp.json()
        .then((data) => {
            setData(data)
            // setLoaded(true)
        }))
    }, [])

    const mapChar = () => {
        return data.results.map(person => < Data name =  {person.name} birth_year = {person.birth_year} key = {person.url} /> )
    }

    return (
        <div>
            <h1>This is the data component</h1>
            {console.log(data.results)}
            {console.log(data)}
            {console.log(typeof data)}
            { typeof data === 'object' ? mapChar() : null }
        </div>
    )
}
