import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import NavigationBar from './components/NavigationBar'
import SignupCard from './components/SignupCard'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className='min-vh-100'>
      <header className='container-fluid bg-white'>
        <NavigationBar />
      </header>
      <main className='container-fluid'>
        <div className='row py-5 mt-5 banner'>
          <div className='col-md-4 mx-auto '>
            <div>
              <h1 className='text-white title animate-pop-in header-title'>Make money driving with bolt</h1>
              <p className='text-white text-break animate-pop-in header-subtitle'>Become a Bolt driver, set your schedule and earn extra money by driving!</p>
              <a href='#' className="text-white learn-text text-decoration-none d-none d-lg-block animate-pop-in header-link">
                LEARN MORE <span className='ml-1'><FontAwesomeIcon fill='transparent' color='#fff' icon={faCircleChevronDown} /></span>
              </a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mx-auto'>
            <SignupCard />
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
