
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
        <div class='question'>
          <p>Pergunta 1</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
        <div class='question'>
          <p>Pergunta 1</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
        <div class='question answer'>
          <p>Esse deve ser o texto que é a resposta da questão</p>
          <div class="answers">
            <div class='missed'>Não lembrei</div>
            <div class='almost-missed'>Quase não lembrei</div>
            <div class='remember'>Zap!</div>
          </div>
        </div>
      </div>

      <footer>
        <p>0/4 CONCLUÍDOS</p>
      </footer>
    </main>
  )
}