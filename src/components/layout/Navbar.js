import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import {FaAngleDown} from 'react-icons/fa'
import Dropdown from './Dropdown'


import {useState} from 'react'


function Navbar(){

    const[dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth < 960)  {
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    }
    // const[dropdown, setDropdown] =
    
    // const handleClick = () => setclick(!click)
    
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projects</Link> 
                    </li>
                    <li className={styles.item} onMouseEnter={onMouseEnter} onMouseLeave= {onMouseLeave}>
                        A <b> Costs </b>     
                        <FaAngleDown/>                         
                        {dropdown && <Dropdown/>} 
                                          
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link> 
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar