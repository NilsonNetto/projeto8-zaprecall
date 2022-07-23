import React from "react"
import './assets/css/reset.css';
import './assets/css/style.css';
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen"
import MainPage from "./MainPage/MainPage"

export default function App() {

  const [page, setPage] = React.useState('welcome')
  const [deck, setDeck] = React.useState('')

  if (page === 'welcome') {
    return <WelcomeScreen deck={deck} setDeck={setDeck} setPage={setPage} />
  } else if (page === 'mainPage') {
    return <MainPage deck={deck} />
  }
}