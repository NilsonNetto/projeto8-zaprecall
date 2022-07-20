
export default function MainPage() {
  return (
    <main>
      <header>
        <img src="images/logo.png"></img>
        <h1>ZapRecall</h1>
      </header>
      <div class='deck'>
        <div class='question'>
          <p>Pergunta 1</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
        <div class='question answered missed'>
          <p>Pergunta 1</p>
          <ion-icon name="close-circle"></ion-icon>
        </div>
        <div class='question answered almost-missed'>
          <p>Pergunta 1</p>
          <ion-icon name="help-circle"></ion-icon>
        </div>
        <div class='question answered remembered'>
          <p>Pergunta 1</p>
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
        <div class='question answer'>
          <p>Esse deve ser o texto que é a resposta da questão</p>
          <div class="answers">
            <div>Não lembrei</div>
            <div>Quase não lembrei</div>
            <div>Zap!</div>
          </div>
        </div>
      </div>

      <footer>
        <p>0/4 CONCLUÍDOS</p>
        <div class='answers-icons'>
          <ion-icon name="checkmark-circle"></ion-icon>
          <ion-icon name="help-circle"></ion-icon>
          <ion-icon name="close-circle"></ion-icon>
        </div>
      </footer>
    </main>
  )
}