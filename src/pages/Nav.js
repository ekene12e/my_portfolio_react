import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Nav = () => {

    const [Open, setOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(()=> {console.log(Open)},[Open])

    const tog = (link) => {
        setOpen((prev) => !prev)
        link && navigate(link)
    }

  return (
    
    <div>
    
      <header>
        <div className = {`menu-btn ${Open ? 'open' : ''}`}  onClick= {() => tog()} >
            <span className={`menu-btn__burger ${Open ? 'open' : ''}`} 
            ></span>
        </div>

        <nav className={`nav ${Open ? 'open' : ''}`}>
            <ul className={`menu-nav  ${Open ? 'open' : ''}`}>
                <li className={ `menu-nav__item ${Open ? 'open' : ''}`}>
                    <a onClick={()=> navigate('/')}  className={`menu-nav__link }`}>
                        Home
                    </a>
                </li>
                <li className={ `menu-nav__item ${Open ? 'open' : ''}`}>
                    <a onClick={()=> navigate('/about')} className="menu-nav__link">
                        About Me
                    </a>
                </li>
                <li className={`menu-nav__item ${Open ? 'open' : ''}` }>
                    <a onClick={()=> navigate('/projects')} className="menu-nav__link">
                        My projects
                    </a>
                </li>
                <li className={`menu-nav__item ${Open ? 'open' : ''}`}>
                    <a onClick={()=> navigate('/contact')} className="menu-nav__link">
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Nav;
