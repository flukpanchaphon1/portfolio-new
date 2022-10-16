import { useEffect, useRef, useState } from 'react';
import './aboutMe.css'

const AboutMe = () => {

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

    const btnDlCV = () => {
        alert('ตอนนี้ยังไม่ข้อมูลจ้า!!')
    }

    // CURSOR
    // positions
    const [x, setX] = useState();
    const [y, setY] = useState();
    useEffect(() => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        };
        window.addEventListener("mousemove", update);
        window.addEventListener("touchmove", update);

        return () => {
            window.removeEventListener("mousemove", update);
            window.removeEventListener("touchmove", update);
        };
    }, [setX, setY]);

    const [showGlasses, setShowGlasses] = useState(false);
    const changeGlasses = () => setShowGlasses(!showGlasses);

    // animate desc
    const refTitle = useRef(null);
    const [show, setShow] = useState(false)
    const aboutMeSection = useRef();
    const refImg = useRef();
    const descText = useRef();
    const [xPosition, setXPosition] = useState(0);
    const [slideDesc, setslideDesc] = useState(false)
    const [slideBgtext, setslideBgtext] = useState(false)

    // Animation

    useEffect(() => {
        const maxLeft = refImg.current.getBoundingClientRect().x + refImg.current.offsetWidth * 0.2;
        const originObject = descText.current.offsetWidth;
        setXPosition(maxLeft - originObject)

        if (refTitle.current.getBoundingClientRect().top <= window.innerHeight * 0.7) {
            setShow(true)
        } else {
            setShow(false)
        }

        if (descText.current.getBoundingClientRect().top <= window.innerHeight * 0.70) {
            setslideDesc(true)
        } else {
            setslideDesc(false)
        }

        if (descText.current.getBoundingClientRect().top <= window.innerHeight * 0.60) {
            setslideBgtext(true)
        } else {
            setslideBgtext(false)
        }

    }, [positionScroll])

    return (
        <section id='about-me' className='f-width' ref={aboutMeSection}>
            <h2 className={show ? 'title show' : 'title'} ref={refTitle}>About Me</h2>
            <div className="container-about-desc">
                <p className='desc-about-me' style={{
                    left: window.innerWidth > 767 ? (slideDesc ? `${xPosition}px` : '50vw') : '',
                    transform: window.innerWidth > 767 ? 'translateY(-50%)' : (slideDesc ? 'translateY(0)' : 'translateY(70%)')
                }} ref={descText}>Hello, my name is Panchaphon Somsan, my nickname is Fluk. I'm studying of Computer Science. Faculty of School of Science and Technology at Sukhothai Thammathirat Open University. I'm interested in work in Font-End and Back-End, UX/UI, I'm calm and reasonable, always ready to practice, learn and listen to new thing.
                </p>
                <div className="img-profile" style={{ position: 'relative' }}>
                    <img src="./assets/glasses.png" alt="" id='glasses' style={{ left: `${x}px`, top: `${y}px`, display: `${showGlasses ? 'block' : 'none'}` }} />
                    <img src="./assets/me-1.webp" id='my-img-profile' ref={refImg} onMouseEnter={changeGlasses} onMouseLeave={changeGlasses} alt="profile" />
                    <button onClick={btnDlCV}><i>DOWNLOAD CV</i></button>
                </div>
            </div>
            <span className='bg-text about-bg-textd' style={{ left: slideBgtext ? '65vw' : '50vw' }}>ABOUT ME</span>
        </section>
    )
}

export default AboutMe