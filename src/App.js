import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import data from './data'
import CharacterGrid from './components/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const filter = query.toLowerCase()
    const characters = data

    const filteredCharacters = characters.filter((character) => {
      const name = character.nickname.toLowerCase()
      return name.startsWith(filter)
    })

    setItems(filteredCharacters)
  }, [query])


  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={items}/>
    </div>
  );
}

export default App;
