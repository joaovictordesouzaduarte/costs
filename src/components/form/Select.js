import styles from './Select.module.css'

function Select ({text, name, options, handleOnChange}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select id={name} 
            name={name}
            onChange={handleOnChange}>
            </select>
        </div>

    )
}
export default Select