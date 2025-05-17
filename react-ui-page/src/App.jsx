
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import EventTime from './components/event-time/EventTime'
import FAQ from './components/faqs/Faq'
import Footer from './components/footer/Footer'

import './style/fonts.css';
import NewsLatter from './components/subscribe-news/NewsLatter'
import CountBox from './components/count-box/CountBox'
import CardGrid from './components/card-grid/CardGrid'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <EventTime />
      <CardGrid />
      <CountBox />
      <FAQ />
      <NewsLatter />
      <Footer />
    </>
  )
}

export default App
