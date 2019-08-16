import React, {useState, useEffect} from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import "./index.css";
import "./App.scss";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
        const char = response.data.results;    
        console.log("Star Wars Characters", char);
        setChars(char)                
      })
  },[]);

  return (
    <div className = "App">
        <h1 className="Header">React Wars</h1>
        <CharacterList data={chars}/>
    </div>   
  );
}

export default App;
