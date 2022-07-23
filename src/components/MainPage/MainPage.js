import React from "react"

import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import logo from "../assets/images/logo.png"
import './MainPage.css'

export default function MainPage({ deck }) {

  const [useDeck, setUseDeck] = React.useState([])

  if (useDeck.length === 0) {
    if (deck === 'deckJSX') {
      setUseDeck([
        { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __', answer: 'Uma biblioteca JavaScript para construção de interfaces' },
        { question: 'Componentes devem iniciar com __', answer: 'Letra maiúscula' },
        { question: 'Podemos colocar __ dentro do JSX', answer: 'Expressões' },
        { question: 'O ReactDOM nos ajuda __', answer: 'Interagindo com a DOM para colocar componentes React na mesma' },
        { question: 'Usamos o npm para __', answer: 'Gerenciar os pacotes necessários e suas dependências' },
        { question: 'Usamos props para __', answer: 'Passar diferentes informações para componentes' },
        { question: 'Usamos estado (state) para __', answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
      ])
    } else if (deck === 'deckPokemon') {
      setUseDeck([
        { question: 'Quais são so 3 iniciais de Kanto?', answer: 'Bulbasauro, Charmander e Squirtle' },
        { question: 'Qual é o melhor dos iniciais de Kanto?', answer: 'Squirtle' },
        { question: 'Qual é a ultima evolução do Charmander?', answer: 'Charizard' },
        { question: 'O jogo pokemon Emerald é de qual geração de Pokemons?', answer: 'Terceira Geração (Hoenn)' },
        { question: 'Qual molho o Pikachu do Ash é viciado?', answer: 'Ketchup!' },
        { question: 'Quem é o personagem mais mulherengo?', answer: 'Brock' },
        { question: 'Misty é uma treinadora de Pokemons do tipo ___', answer: 'Aquático' },
        { question: 'Gyarados é um Pokemon dos tipos __ e __', answer: 'Aquático e Voador' }
      ])
    }
    useDeck.sort(() => Math.random() - 0.5);
  }

  const [footerIcons, setFooterIcons] = React.useState([])
  const deckLength = useDeck.length;

  function reloadPage() {
    window.location.reload();
  }

  return (
    <main>
      <header>
        <img onClick={reloadPage} src={logo} alt="ZapRecall logo"></img>
        <h1 onClick={reloadPage}>ZapRecall</h1>
      </header>
      <div className='deck'>

        {useDeck.map((card, index) => (
          <Card key={index} number={index + 1} title={card.question} answer={card.answer} footerIcons={footerIcons} setFooterIcons={setFooterIcons} />
        ))}
      </div>

      <footer>
        <Footer deckLength={deckLength} footerIcons={footerIcons} />
      </footer>
    </main>
  )
}