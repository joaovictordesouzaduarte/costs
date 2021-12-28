import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <a href="https://www.linkedin.com/in/joão-victor-duarte/" target='_blank' rel="noreferrer" aria-label='Linkedin'>
                    <FaLinkedin/>
                </a>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <a href="https://github.com/joaovictordesouzaduarte" target='_blank' rel="noreferrer" aria-label='Github'>
                    <FaGithub/>
                </a>
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2021
        </p>
        </footer>
    )

}
export default Footer