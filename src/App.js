import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import Filter from './Filter'
import UserList from './UserList'


function App(){
    const [user, setUser] = useState([])
    const [countrySearch, setCountrySearch] = useState([])
    // const key = process.env.REACT_APP_API_KEY
    // console.log(key)

    useEffect(() =>{
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
              setCountrySearch(response.data)
          }).catch(e => console.log(e))
    }, [])
    
    return (
        <div>
            <h2>Results</h2>
            <div>
               <Filter countrySearch={countrySearch}/>
            </div>
        </div>
    )
}


export default App