import './Footer.css'
import party from '../assets/images/party.png'
import sad from '../assets/images/sad.png'

export default function Footer({ setDeck, setPage, deckLength, footerIcons }) {

  function MakeIcon({ icon }) {
    return <ion-icon name={icon}></ion-icon>
  }

  function reloadPage() {
    setPage('welcome');
    setDeck('')
  }

  function verifyMissed() {
    let missedIcons = footerIcons.filter(icon => icon === "close-circle")
    if (missedIcons.length >= 1) {
      return (
        <>
          <h3> <img src={sad} alt='Party emoticon'></img> Putz...</h3>
          <p>Ainda faltam mais alguns...<br />Mas não desanime! </p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {footerIcons.map((icon, index) => <MakeIcon icon={icon} key={index} />)}
          </div>
          <button onClick={reloadPage}>REINICIAR RECALL</button>
        </>
      )
    } else {
      return (
        <>
          <h3> <img src={party} alt='Party emoticon'></img> Parabéns!</h3>
          <p>Você não esqueceu de nenhum flashcard! </p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {footerIcons.map((icon, index) => <MakeIcon icon={icon} key={index} />)}
          </div>
          <button onClick={reloadPage}>REINICIAR RECALL</button>
        </>
      )
    }
  }

  if (deckLength === footerIcons.length) {
    return verifyMissed();
  } else {
    return (
      <>
        <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
        <div className='answers-icons'>
          {footerIcons.map((icon, index) => <MakeIcon icon={icon} key={index} />)}
        </div>
      </>
    )
  }
}