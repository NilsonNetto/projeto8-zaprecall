import './Footer.css'
import party from '../assets/images/party.png'
import sad from '../assets/images/sad.png'

export default function Footer({ deckLength, footerIcons }) {

  let iconArray = []

  function makeIcon() {
    iconArray = footerIcons.map((icon) => (<ion-icon name={icon}></ion-icon>))
  }

  makeIcon();

  console.log(iconArray)

  function verifyMissed() {
    let missedIcons = []
    missedIcons = footerIcons.filter(icon => icon === "close-circle")
    if (missedIcons.length > 1) {
      return (
        <>
          <h3> <img src={sad} alt='Party emoticon'></img> Putz...</h3>
          <p>Ainda faltam mais alguns...<br />Mas não desanime! </p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {iconArray.map(icon => { return icon })}
          </div>
        </>
      )
    } else {
      return (
        <>
          <h3> <img src={party} alt='Party emoticon'></img> Parabéns!</h3>
          <p>Você não esqueceu de nenhum flashcard! </p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {iconArray.map(icon => { return icon })}
          </div>
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
          {iconArray.map(icon => { return icon })}
        </div>
      </>
    )
  }
}