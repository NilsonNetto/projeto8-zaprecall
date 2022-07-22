import logo from "../assets/images/logo.png"
import './WelcomeScreen.css'

export default function WelcomeScreen({ setPage }) {
  return (
    <div className="welcome">
      <img src={logo} alt="ZapRecall logo"></img>
      <h1>ZapRecall</h1>
      <button onClick={() => setPage('mainPage')}>Iniciar Recall!!</button>
    </div>
  )
}