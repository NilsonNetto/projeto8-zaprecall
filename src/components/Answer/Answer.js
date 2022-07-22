
export default function Answer({ answer, footerIcons, setFooterIcons, setQuestionState, setQuestionIcon }) {

  function addFooterIcon(value) {

    setQuestionState('answered');
    if (value === "missed") {
      setFooterIcons([...footerIcons, 'close-circle'])
      setQuestionIcon('missed')
    } else if (value === "almostMissed") {
      setFooterIcons([...footerIcons, 'help-circle'])
      setQuestionIcon('almostMissed')
    } else if (value === "remembered") {
      setFooterIcons([...footerIcons, 'checkmark-circle'])
      setQuestionIcon('remembered')
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