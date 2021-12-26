import styles from './LinkPremium.module.css'
import {Link} from 'react-router-dom'
function LinkPremium(to, text){
    return (
        <Link to={to} className={styles.btn_premium}>
            {text}        
        </Link>
    )
}
export default LinkPremium