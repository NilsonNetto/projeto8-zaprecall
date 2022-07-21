
export default function Answered({ index, number, footerIcons }) {
  console.log(footerIcons)
  console.log(footerIcons[index].props.name)

  switch (footerIcons[number - 1].props.name) {
    case 'close-circle':
      return (
        <div className='question answered missed'>
          <p>Pergunta {number}</p>
          <ion-icon name="close-circle"></ion-icon>
        </div>
      );
    case 'help-circle':
      return (
        <div className='question answered almost-missed'>
          <p>Pergunta {number}</p>
          <ion-icon name="help-circle"></ion-icon>
        </div>
      );
    case 'checkmark-circle':
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