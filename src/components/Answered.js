
export default function Answered({ footerIcon }) {
  console.log(footerIcon)
  switch (footerIcon) {
    case '<ion-icon name="close-circle"></ion-icon>':
      return (
        <div className='question answered missed'>
          <p>Pergunta 1</p>
          <ion-icon name="close-circle"></ion-icon>
        </div>
      );
    case '<ion-icon name="help-circle"></ion-icon>':
      return (
        <div className='question answered almost-missed'>
          <p>Pergunta 1</p>
          <ion-icon name="help-circle"></ion-icon>
        </div>
      );
    case '<ion-icon name="checkmark-circle"></ion-icon>':
      return (
        <div className='question answered remembered'>
          <p>Pergunta 1</p>
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      );
    default:
      return ('error');
  }

}