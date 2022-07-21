
export default function Answer({ answer, footerIcons, setFooterIcons, setQuestionState }) {

  function addFooterIcon(value) {
    setQuestionState('answered');
    if (value === "missed") {
      setFooterIcons([...footerIcons, <ion-icon name="close-circle"></ion-icon>])
    } else if (value === "almostMissed") {
      setFooterIcons([...footerIcons, <ion-icon name="help-circle"></ion-icon>])
    } else if (value === "remembered") {
      setFooterIcons([...footerIcons, <ion-icon name="checkmark-circle"></ion-icon>])
    }
  }

  return (
    <div className='question answer'>
      <p>{answer}</p>
      <div className="answers">
        <div onClick={() => addFooterIcon('missed')}>Não lembrei</div>
        <div onClick={() => addFooterIcon('almostMissed')}>Quase não lembrei</div>
        <div onClick={() => addFooterIcon('remembered')}>Zap!</div>
      </div>
    </div>
  )
}