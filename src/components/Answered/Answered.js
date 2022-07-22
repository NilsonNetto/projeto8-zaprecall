
export default function Answered({ number, footerIcons, questionIcon }) {

  switch (questionIcon) {
    case 'missed':
      return (
        <div className='question answered missed'>
          <p>Pergunta {number}</p>
          <ion-icon name="close-circle"></ion-icon>
        </div>
      );
    case 'almostMissed':
      return (
        <div className='question answered almost-missed'>
          <p>Pergunta {number}</p>
          <ion-icon name="help-circle"></ion-icon>
        </div>
      );
    case 'remembered':
      return (
        <div className='question answered remembered'>
          <p>Pergunta {number}</p>
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      );
    default:
      return ('error answered');
  }

}