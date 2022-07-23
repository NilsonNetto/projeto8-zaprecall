import logo from "../assets/images/logo.png"
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
      <select onChange={(e) => setDeck(e.target.value)}>
        <option selected disabled>Escolha seu deck</option>
        <option value='deckJSX'>React</option>
        <option value='deckPokemon'>Pokemon</option>
      </select>
      <button onClick={verifyStart}>Iniciar Recall!!</button>
    </div>
  )
}