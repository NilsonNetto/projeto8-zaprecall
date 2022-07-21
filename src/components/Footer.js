
export default function Footer({ deckLength, footerIcons }) {
  function verifyMissed() {
    footerIcons.filter(icon => icon === <ion-icon name="close-circle"></ion-icon>)
    if (footerIcons.length > 1) {
      return (
        <div>
          <h3> Putz...</h3>
          <p>Ainda faltam mais alguns...</p>
          <p>Mas não desanime!</p>
        </div>
      )
    } else {
      return (
        <div>
          <h3> Parabéns!</h3>
          <p>Você não esqueceu de </p>
          <p>nenhum flashcard!</p>
        </div>
      )
    }

  }

  if (deckLength === footerIcons.length) {
    verifyMissed();
  } else {
    return (
      <>
        <p>{footerIcons.length}/{deckLength} CONCLUÍDOS</p>
        <div className='answers-icons'>
          {footerIcons.map((icon) => { return icon })}
        </div>
      </>)
  }

}