import './nav.css'

const Nav = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav>
            <a href='/#' onClick={e => {
                scrollTop(e);
            }}>HOME</a>
            <a href='#about-me'>ABOUT</a>
            <a href='#recent-projrcts'>RECENT PROJECTS</a>
            <a href='#skills'>SKILLS</a>
            <a href='#contacts'>CONTACTS</a>
        </nav>
    )
}

export default Nav