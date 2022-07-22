import React from "react"

import Card from "../Card/Card";
import Footer from "../Footer/Footer";


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

const deckLength = deckJSX.length;

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffleArray(deckJSX)

function reloadPage() {
  window.location.reload();
}

export default function MainPage() {


  const [footerIcons, setFooterIcons] = React.useState([])
  console.log(footerIcons.length)
  return (
    <main>
      <header>
        <img onClick={reloadPage} src="./logo.png" alt="ZapRecall logo"></img>
        <h1 onClick={reloadPage}>ZapRecall</h1>
      </header>
      <div className='deck'>

        {deckJSX.map((card, index) => (
          <Card key={index} number={index + 1} title={card.question} answer={card.answer} footerIcons={footerIcons} setFooterIcons={setFooterIcons} />
        ))}
      </div>

      <footer>
        <Footer deckLength={deckLength} footerIcons={footerIcons} />
      </footer>
    </main>
  )
}