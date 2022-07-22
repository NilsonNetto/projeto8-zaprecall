import './Footer.css'

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
        <div>
          <h3> Putz...</h3>
          <p>Ainda faltam mais alguns...</p>
          <p>Mas não desanime!</p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {iconArray.map(icon => { return icon })}
          </div>
        </div>

      )
    } else {
      return (
        <div>
          <h3> Parabéns!</h3>
          <p>Você não esqueceu de </p>
          <p>nenhum flashcard!</p>
          <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
          <div className='answers-icons'>
            {iconArray.map(icon => { return icon })}
          </div>
        </div>
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
      </>)
  }
}