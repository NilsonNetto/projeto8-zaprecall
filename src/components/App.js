import React from "react"
import WelcomeScreen from "./WelcomeScreen"
import MainPage from "./MainPage"

export default function App() {

  const [page, setPage] = React.useState('welcome')

  return (
    <>
      {page === 'welcome' ? <WelcomeScreen setPage={setPage} /> : <MainPage />}
    </>
  )
}