import { useState } from 'react'
import WeatherPage from './Pages/WeatherPage/WeatherPage'
import MainPage from './Pages/MainPage/MainPage'
import TodoPage from './Pages/TodoPage/TodoPage'
import './App.css'
import Header from './Widgets/Header/Header'
import Footer from './Widgets/Footer/Footer'

function App() {
  const [page, setPage] = useState("main")

  let current_page = null

  if (page == "main") {
    current_page = <MainPage />
  }
  else if (page == "weather") {
    current_page = <WeatherPage />
  }
  else if (page == "todo") {
    current_page = <TodoPage />
  }

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
      />
      {current_page}
      <Footer />
    </>
  )
}

export default App
