import About from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Platform from "./components/Platform/Platform"
import Solution from "./components/Solution/Solution"
import Title from "./components/Title/Title"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar className='nav'/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Platform/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Solution/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
