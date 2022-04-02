import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import Characters from './components/characters/Characters';
import Header from './components/Header';
import axios from 'axios';
 

function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();

  const fetchData = async () => {
    let res = await axios(`https://www.breakingbadapi.com/api/characters`)
    setData(res.data); 
    setIsLoading(false)
  }

  const searchCharacter = useMemo(() => {
    if (query) {
      return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    }
    return data;
  }, [data, query])
   

  useEffect(() => {
   fetchData();
  }, [])

  return (
    <div className="App">
      <Header onChange={(q) => setQuery(q)} />
      <Characters cards={searchCharacter} isLoading={isLoading}/>
    </div>
  );
}

export default App;
