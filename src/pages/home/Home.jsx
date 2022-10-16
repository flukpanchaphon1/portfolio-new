import VeggieBurger from '../../components/veggieBurger/VeggieBurger'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import AboutMe from '../../components/aboutMe/AboutMe'
import RecentProjects from '../../components/recentProjects/RecentProjects'
import MySkills from '../../components/mySkills/MySkills'
import ContactMe from '../../components/contactMe/ContactMe'
import Footer from '../../components/footer/Footer'
// import Cursor from '../../components/cursor/Cursor'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      {/* <Cursor /> */}
      <VeggieBurger />
      <Banner />
      <AboutMe />
      <RecentProjects />
      <MySkills />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home