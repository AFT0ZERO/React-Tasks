
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Edu from './components/edu';
import Footer from './components/footer';
import Skills from './components/skills';
import Project from './components/projects';

function App() {
  return (
      <>
        <Header />
        <main>
          <Hero/>
          <Edu/>
          <Skills/>
            <Project />
          <Footer/>

        </main>
      </>
  )
      ;
}

export default App;
