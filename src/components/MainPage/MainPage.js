import React from "react"

import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import logo from "../../assets/images/logo.png"
import './MainPage.css'

export default function MainPage({ deck, setDeck, setPage }) {

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
      ].sort(() => Math.random() - 0.5))
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
      ].sort(() => Math.random() - 0.5))
    } else if (deck === 'deckNaruto') {
      setUseDeck([
        { question: 'Naruto e Sasuke lutam em um local chamado __', answer: 'Vale do Fim' },
        { question: 'Qual dupla lutou e derrotou Sasori?', answer: 'Sakura e Chiyo' },
        { question: 'Qual o nome do sapo invocado pelo Jiraiya?', answer: 'Gamabunta' },
        { question: 'Quem são os três ninjas lendários de Konoha?', answer: 'Jiraiya, Tsunade e Orochimaru' },
        { question: 'Naruto, Sasuke e Sakura fazem parte do Time __', answer: 'Time 7' },
        { question: 'Quem é o Sexto Hokage?', answer: 'Kakashi' },
        { question: 'Quem foi o fundador da Vila do Som?', answer: 'Orochimaru' },
        { question: 'Qual é o nome do Kage da Vila da Areia?', answer: 'Kazekage' }
      ].sort(() => Math.random() - 0.5))
    }
  }

  const [footerIcons, setFooterIcons] = React.useState([])
  const deckLength = useDeck.length;

  function reloadPage() {
    setPage('welcome');
    setDeck('')
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
        <Footer setDeck={setDeck} setPage={setPage} deckLength={deckLength} footerIcons={footerIcons} />
      </footer>
    </main>
  )
}