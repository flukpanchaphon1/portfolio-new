import './banner.css'

const Banner = () => {

  const contactMe = () => {
    window.location.href = "https://m.me/woosanook";
  }

  return (
    <section id='banner'>
      <div className="container-text">
        <p>Hello, I'm</p>
        <h1>PANCHAPHON<br />SOMSAN</h1>
        <p>Full Stack Developer / WordPress Expert</p>
        <button onClick={contactMe}>CONTACT ME</button>
      </div>
      <div className='banner-profile'>
        <img src="./assets/me-0.webp" alt="" />
      </div>
    </section>
  )
}

export default Banner