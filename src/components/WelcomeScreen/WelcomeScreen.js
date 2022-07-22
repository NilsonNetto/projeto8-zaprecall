
export default function WelcomeScreen({ setPage }) {
  return (
    <div className="welcome">
      <img src="images/logo.png" alt="ZapRecall logo"></img>
      <h1>ZapRecall</h1>
      <button onClick={() => setPage('mainPage')}>Iniciar Recall!!</button>
    </div>
  )
}