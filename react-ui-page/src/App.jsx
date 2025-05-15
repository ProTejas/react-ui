import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import './style/fonts.css';
import Banner from './components/banner/Banner'
import EventTime from './components/event-time/EventTime'
import FAQ from './components/faqs/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <EventTime />
      <FAQ />
    </>
  )
}

export default App
