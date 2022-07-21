import React from "react"
import WelcomeScreen from "./WelcomeScreen"
import MainPage from "./MainPage"

export default function App() {

  const [page, setPage] = React.useState('welcome')

  if (page === 'welcome') {
    return <WelcomeScreen setPage={setPage} />
  } else if (page === 'mainPage') {
    return <MainPage />
  }
}