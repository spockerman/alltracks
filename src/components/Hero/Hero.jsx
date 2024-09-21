import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Entregando soluções digitais sob medida para seus desafios empresarias</h1>
        <p>Desenvolvemos soluções de software personalizadas para empresas, focando em resolver problemas específicos e impulsionar o crescimento. Com uma abordagem centrada no cliente, colaboramos para entender profundamente suas necessidades e prioridades.</p>
        <button className='btn'>Explore mais <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero