import React from "react"

const deckJSX = [
  { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
  { question: 'O React é __', answer: 'Uma biblioteca JavaScript para construção de interfaces' },
  { question: 'Componentes devem iniciar com __', answer: 'Letra maiúscula' },
  { question: 'Podemos colocar __ dentro do JSX', answer: 'Expressões' },
  { question: 'O ReactDOM nos ajuda __', answer: 'Interagindo com a DOM para colocar componentes React na mesma' },
  { question: 'Usamos o npm para __', answer: 'Gerenciar os pacotes necessários e suas dependências' },
  { question: 'Usamos props para __', answer: 'Passar diferentes informações para componentes' },
  { question: 'Usamos estado (state) para __', answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
]


export default function MainPage() {

  const [footerIcons, setFooterIcons] = React.useState([])

  function addFooterIcon(value) {
    if (value === "missed") {
      setFooterIcons([...footerIcons, <ion-icon name="close-circle"></ion-icon>])
    } else if (value === "almostMissed") {
      setFooterIcons([...footerIcons, <ion-icon name="help-circle"></ion-icon>])
    } else if (value === "remembered") {
      setFooterIcons([...footerIcons, <ion-icon name="checkmark-circle"></ion-icon>])
    }
  }

  return (
    <main>
      <header>
        <img src="images/logo.png"></img>
        <h1>ZapRecall</h1>
      </header>
      <div className='deck'>
        <div className='question'>
          <p>Pergunta 1</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className='question title'>
          <p>Esse seria o título da pergunta a ser lembrada</p>
          <img src="images/setinha.png"></img>
        </div>
        <div className='question answered missed'>
          <p>Pergunta 1</p>
          <ion-icon name="close-circle"></ion-icon>
        </div>
        <div className='question answered almost-missed'>
          <p>Pergunta 1</p>
          <ion-icon name="help-circle"></ion-icon>
        </div>
        <div className='question answered remembered'>
          <p>Pergunta 1</p>
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
        <div className='question answer'>
          <p>Esse deve ser o texto que é a resposta da questão</p>
          <div className="answers">
            <div onClick={() => addFooterIcon('missed')}>Não lembrei</div>
            <div onClick={() => addFooterIcon('almostMissed')}>Quase não lembrei</div>
            <div onClick={() => addFooterIcon('remembered')}>Zap!</div>
          </div>
        </div>
      </div>

      <footer>
        <p>0/4 CONCLUÍDOS</p>
        <div className='answers-icons'>
          {footerIcons.map((icon) => { return icon })}
        </div>
      </footer>
    </main>
  )
}