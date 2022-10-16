import './mySkills.css'
import skillsData from '../../data/skills'
import { useEffect, useRef, useState } from 'react';

const MySkills = () => {
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
    <div id="skills" ref={refTitle} className='f-width'>
      <h4 className={show ? 'title show' : 'title'} >My Skills</h4>
      <div className="container-skill">
        <ul>
          {skillsData.map((skill) => {
            return (
              <li key={skill.name}>
                <img src={skill.img} alt={skill.name} />
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default MySkills