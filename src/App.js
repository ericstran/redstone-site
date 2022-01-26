import './styles/App.css'
import HomePage from './pages/Home'
import TitleBanner from './components/TitleBanner'
import FooterBanner from './components/FooterBanner'

const App = () => {
  const startingPage = <HomePage />
  let currentPage = startingPage

  return (
    <div className='App'>
      <TitleBanner className='home-content-view'/>
      <hr/>
      {currentPage}
      <hr/>
      <FooterBanner />
    </div>
  )
}

export default App