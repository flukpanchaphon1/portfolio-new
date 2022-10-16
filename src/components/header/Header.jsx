import { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import './header.css'

const Header = () => {

  const [positionScroll, setPositionScroll] = useState(0);
  useEffect(() => {
    const printScroll = () => {
      setPositionScroll(window.scrollY)
    }
    window.addEventListener('scroll', printScroll)
    return () => {
      window.removeEventListener('scroll', printScroll)
    }

  }, [positionScroll])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <header className={positionScroll > 70 ? 'hidden' : ''}>
      <img src='./assets/logo.webp' className='logo' onClick={scrollTop} alt=""/>
      <Nav />
    </header>
  )
}

export default Header