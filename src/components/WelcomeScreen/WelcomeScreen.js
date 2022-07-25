import logo from "../../assets/images/logo.png"
import './WelcomeScreen.css'

export default function WelcomeScreen({ deck, setDeck, setPage }) {

  function verifyStart() {
    if (deck === '') {
      alert('Selecione o deck')
    } else {
      setPage('mainPage')
    }
  }

  return (
    <div className="welcome">
      <img src={logo} alt="ZapRecall logo"></img>
      <h1>ZapRecall</h1>
      <select defaultValue='' onChange={(e) => setDeck(e.target.value)}>
        <option value='' disabled>Escolha seu deck</option>
        <option value='deckJSX'>React</option>
        <option value='deckPokemon'>Pokemon</option>
        <option value='deckNaruto'>Naruto</option>
      </select>
      <button onClick={verifyStart}>Iniciar Recall!!</button>
    </div>
  )
}