import { useState, useEffect } from "react"
import './App.css'
import './components/Navbar/Navbar'
import Navbar from "./components/Navbar/Navbar";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";

function App() {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const url = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.error(error));
  }

  const onPrevious = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  }

  const onNext = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  }

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleBack = () => {
    setSelectedCharacter(null);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, [])

  return (
    <>
      <Navbar marca="Rick and Morty" />
      {selectedCharacter ? (
        <CharacterDetails character={selectedCharacter} onBack={handleBack} />
      ) : (
        <>
          <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
          <Characters characters={characters} onSelectCharacter={handleSelectCharacter} />
          <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        </>
      )}
    </>
  )
}

export default App
