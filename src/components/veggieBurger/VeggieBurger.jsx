import { useEffect, useState } from 'react';
import './veggieBurger.css'
import Rightbar from '../rightbar/Rightbar'

const VeggieBurger = () => {

  const [positionScroll, setPositionScroll] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const printScroll = () => {
      setPositionScroll(window.scrollY)
    }
    window.addEventListener('scroll', printScroll)
    return () => {
      window.removeEventListener('scroll', printScroll)
    }

  }, [positionScroll])

  const fadeBg = () => {
    const bgBlur = document.createElement('div');
    bgBlur.id = 'frd-bg';
    bgBlur.style.position = 'fixed';
    bgBlur.style.top = '0';
    bgBlur.style.left = '0';
    bgBlur.style.width = '100%';
    bgBlur.style.height = '100%';
    bgBlur.style.backgroundColor = 'black';
    bgBlur.style.opacity = '.75'
    bgBlur.style.zIndex = '100';
  
    // Disable scroll
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
  
    // handleEvent
    bgBlur.addEventListener('click', () => {
      bgBlur.remove();
      document.getElementById('veggie-icon').click();
  
      // Enable scroll
      document.querySelector('body').style.overflow = '';
      document.querySelector('html').style.overflow = '';
    });
    document.getElementById('veggie-icon').addEventListener('click', () => {
      bgBlur.remove();
  
      // Enable scroll
      document.querySelector('body').style.overflow = '';
      document.querySelector('html').style.overflow = '';
    })
  
    
    document.body.appendChild(bgBlur);
  }


  return (
    <>
      <div id='veggieBurger' className={positionScroll < 70 ? 'hidden' : ''}>
        <div id='veggie-icon' onClick={() => {
          setDisplay(!display);
          if (display !== true) {
            fadeBg();
          }
        }} className={display ? 'actived' : ''}>
          <span></span>
          <span></span>
        </div>
      </div>
      <Rightbar className={display ? 'actived' : ''} />
    </>
  )
}

export default VeggieBurger