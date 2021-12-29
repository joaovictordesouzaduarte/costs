import styles from './InputContact.module.css'


function InputContact(props){
    const {label, onChange, id, ...inputProps} = props
    return(
        <div className={styles.contact}>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}/>
        </div>
    )
}

export default InputContact