import React, { useState } from 'react'
import UserList from './UserList'

const Filter = ({countrySearch}) => {
    const [countryName, setCountryName] = useState('')
    const filteredCountries = countrySearch.filter(item =>{
        if(!countryName) return true
        if(item.name.startsWith(countryName)) return true
    })
    
    // const countryLstLen = () =>{
    //     setCountriesQty(filteredCountries.length)
    // }

    return(
        <div>
            <input
                type="text"
                value={countryName}
                onChange={e =>{
                    e.preventDefault()
                    setCountryName(e.target.value)
                } }
            />
            {filteredCountries.length> 40? <h2>Too Many Results</h2> :<UserList users={filteredCountries}/> }

            
            
        </div>
    )
}

export default Filter;