import { useEffect, useRef, useState } from 'react';
import './contactMe.css'

const ContactMe = () => {
  // SCROLL POSITIONS
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

  const refTitle = useRef(null);

  // Animation
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (refTitle.current.getBoundingClientRect().top <= window.innerHeight * 0.7) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [positionScroll])

  return (
    <section id='contacts'>
      <h5 className={show ? 'title show' : 'title'} style={{ marginBottom: '1.5rem' }} ref={refTitle}>Contacts</h5>
      <div className='container-contacts'>
        <div>
          <p className='second-header-contact'>Let’s  work together</p>
          <div className='contact-btn'>
            <a href="mailto:flukpanchaphon1@gmail.com">flukpanchaphon1@gmail.com</a>
            <a href="https://m.me/woosanook">Messenger : woosanook</a>
          </div>
          <div className='social-link'>

          </div>
        </div>
        <div>
          <div className='footer-img f-center'>
            <img src='./assets/me-0.webp' alt="contact-profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe