
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {

  return (
    <div id='top'>
      <Header />

      <main className="container-fluid">
        <div className="row ">
          <About />
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App