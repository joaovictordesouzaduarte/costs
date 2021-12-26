import React, {useState} from 'react'
import styles from './Dropdown.module.css'
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'

function Dropdown (){
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <>
            <ul onClick={handleClick} className={styles.dropdown_menu}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index} className={styles.dropdown_link}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        
        </>
    )
}
export default Dropdown;