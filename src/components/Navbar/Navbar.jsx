import './Navbar.css'
import { useState } from 'react'
import logo from '../../assets/alltracks/logo.svg'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect } from 'react';
import { Link} from 'react-scroll'



const Navbar = () => {
  const [sticky, setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="All 4 Track" className='logo' />
      <ul className={mobileMenu ? '' :'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='platforms' smooth={true} offset={-300} duration={500}>Plataforma</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre</Link></li>
        <li><Link to='solution' smooth={true} offset={-380} duration={500}>Soluções</Link></li>
        <li>
          <Link to='contact' smooth={true} offset={-350} duration={500} className='btn'>Contato</Link>
          </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar