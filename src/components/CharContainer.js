import React, {useState, useEffect} from 'react'
import Char from './Char'


export default function CharContainer() {

    const [Char, setData] = useState('')
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
            
        </div>
    )
}
