import './rightbar.css'

const Rightbar = ({ className }) => {

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleClick = () => {
    document.querySelector('#frd-bg').click();
  }

  return (
    <div id='rightbar' className={className}>
      <a href='/' onClick={e => {
        scrollTop(e);
        handleClick();
      }}>HOME</a>
      <a href='#about-me' onClick={handleClick}>ABOUT</a>
      <a href='#recent-projrcts' onClick={handleClick}>PROJECTS</a>
      <a href='#skills' onClick={handleClick}>SKILLS</a>
      <a href='#contacts' onClick={handleClick}>CONTACTS</a>
    </div>
  )
}

export default Rightbar