import VeggieBurger from '../../components/veggieBurger/VeggieBurger'
import Header from '../../components/header/Header'
import ContactMe from '../../components/contactMe/ContactMe'
import Footer from '../../components/footer/Footer'
import RecentProjects from '../../components/recentProjects/RecentProjects'

const RecentWorks = () => {
  return (
    <div className='recentWorks'>
      <Header />
      <VeggieBurger />
      <RecentProjects allwork />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default RecentWorks