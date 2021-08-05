import React, {useState, useEffect} from 'react'
import Char from './Char'


export default function CharContainer() {

    const [Char, setchar] = useState('')
    // const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then( resp => resp.json()
        .then((char) => {
            setchar(char)
            // setLoaded(true)
        }))
    }, [])

    const mapChar = () => {
        return char.results.map(person => < Char name =  {person.name} birth_year = {person.birth_year} key = {person.url} /> )
    }

    return (
        <div>
              <div>
            <h1>This is the char component</h1>
            {console.log(char.results)}
            {console.log(char)}
            {console.log(typeof char)}
            { typeof char === 'object' ? mapChar() : null }
        </div>
        </div>
    )
}
