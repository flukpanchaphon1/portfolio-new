import { useEffect, useRef, useState } from 'react'
import './recentProjects.css'
import { recentWorks } from '../../data/recentWork'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'

const RecentProjects = ({ allwork }) => {

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

  const [sizeScreen, setSizeScreen] = useState(0);

  useEffect(() => {
    const newSizeScreen = () => {
      setSizeScreen(window.innerWidth)
    }
    window.addEventListener('resize', newSizeScreen)
    return () => {
      window.removeEventListener('resize', newSizeScreen)
    }
  }, [sizeScreen])


  const defaultPosition = useRef()
  const [positionFilterSelect, setPositionFilterSelect] = useState(0)

  useEffect(() => {
    setPositionFilterSelect(defaultPosition.current.getBoundingClientRect().left);
  }, [sizeScreen])

  // FILTER BTN
  const allWorks = () => {
    setRecentWork(recentWorks.filter(c => (c.cate === 'WordPress')))
    setPositionCarousel(0);
    setCurrentCountItem(0);
  }
  const wordPressWorks = () => {
    setRecentWork(recentWorks.filter(c => (c.cate === 'WordPress')))
    setPositionCarousel(0);
    setCurrentCountItem(0);
  }
  const ourProjectWorks = () => {
    setRecentWork(recentWorks.filter(c => (c.cate === 'MyProjects')))
    setPositionCarousel(0);
    setCurrentCountItem(0);
  }

  const handleSelected = e => {
    const rect = e.target.getBoundingClientRect();
    setPositionFilterSelect(rect.left)
    switch (e.target.getAttribute('data-value')) {
      case 'all':
        allWorks()
        break;
      case 'wordpress':
        wordPressWorks()
        break;
      case 'ourProjects':
        ourProjectWorks()
        break;

      default:
        break;
    }
  }

  // WORKS
  const refContainerWork = useRef();
  const [workContentSize, setWorkContentSize] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const gapSize = 16
  const [recentWork, setRecentWork] = useState([])
  useEffect(() => {
    setRecentWork(recentWorks)
  }, [])

  useEffect(() => {
    if (window.innerWidth < 767) {
      setPerPage(2)
    } else {
      setPerPage(4)
    }
  }, [sizeScreen])

  // set size
  useEffect(() => {
    setWorkContentSize((refContainerWork.current.offsetWidth - (gapSize * (perPage - 1))) / perPage)
  }, [refContainerWork, perPage])

  const [positionCarousel, setPositionCarousel] = useState(0);

  // btn
  const [currentCountItem, setCurrentCountItem] = useState(0);
  const [maxClick, setMaxClick] = useState(0);

  useEffect(() => {
    setMaxClick(recentWork.length - perPage)
  }, [recentWork, perPage])

  const slideWork = (e) => {
    switch (e) {
      case 'NEXT':
        setCurrentCountItem(currentCountItem + 1)
        setPositionCarousel(positionCarousel - workContentSize - gapSize)
        break;
      case 'PREV':
        setCurrentCountItem(currentCountItem - 1)
        setPositionCarousel(positionCarousel + workContentSize + gapSize)
        break;

      default:
        break;
    }
  }


  return (
    <div id='recent-projrcts'>
      {allwork ? (<hr className='hrRecentWork' style={{ padding: '20px', border: 'none' }} />) : ''}
      <h3 className={show ? 'title show' : 'title'} ref={refTitle}>{allwork ? 'All Projects' : 'Recent Projects'}</h3>
      <div className="filter-works">
        <ul>
          <li className='actived' ref={defaultPosition} onClick={handleSelected} data-value="all">All</li>
          <li onClick={handleSelected} data-value="wordpress">WordPress</li>
          <li onClick={handleSelected} data-value="ourProjects">MyProjects</li>
        </ul>
        <div className="bgLiActived" style={{ left: `${positionFilterSelect}px` }}></div>
      </div>
      <div className="container-work" ref={refContainerWork}>
        <div className="progress-bar" style={{ width: `${currentCountItem / maxClick * 100}%` }}></div>
        <div className="warp-work" style={{ transform: `translateX(${positionCarousel}px)` }}>
          {recentWork.map(worklist => (
            <a key={worklist.id} href={worklist.link} target="_blank" rel="noopener noreferrer" className="work-list" style={{ width: `${workContentSize}px` }}>
              <div className="overlayWork">
                <AiOutlineSearch style={{ color: 'white', fontSize: '1.2rem' }} />
                <p>VISIT WEBSITE</p>
              </div>
              <span className="tag">{worklist.cate}</span>
              <img src={worklist.src} alt="" />
            </a>
          ))}
        </div>
        {recentWork.length > 4
          ? (
            <>
              <button className='work-btn-control' id='prev-work' onClick={() => slideWork('PREV')} style={{ display: currentCountItem === 0 ? 'none' : '' }}><FaAngleLeft /></button>
              <button className='work-btn-control' id='next-work' onClick={() => slideWork('NEXT')} style={{ display: currentCountItem === maxClick ? 'none' : '' }}><FaAngleRight /></button>
            </>
          )
          : ''}
      </div>
      {recentWork.length > 0 ? (<button className='see-more' to='/works' style={{display: 'none'}}>View All</button>) : ''}
    </div>
  )
}

export default RecentProjects