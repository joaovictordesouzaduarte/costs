import React, { useState} from 'react'
// import { useState } from "react"
import InputContact from '../form/InputContact'
import SubmitButton from '../form/SubmitButton'
import styles from './Contact.module.css'

function Contact(){
    const [values, setValues] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        empresa: "",
    });
    
    const inputs = [
        {
            id:1,
            name:"nome",
            type: "text",
            placeholder:"Nome",
            label:"Nome"
        },
        {
            id:2,
            name:"sobrenome",
            type: "text",
            placeholder:"Sobrenome",
            label:"Sobrenome"
        },
        {
            id:3,
            name:"email",
            type: "text",
            placeholder:"E-mail",
            label:"E-mail"
        },
        {
            id:4,
            name:"empresa",
            type: "text",
            placeholder:"Empresa",
            label:"Empresa"
        },
        {
            id:5,
            name:"assunto",
            type:"text",
            placeholder:"Conte-nos um pouco sobre o seu projeto",
            label: "Você gostaria de falar sobre o quê?"
        }
    
    ]
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.contact}>
            <form onSubmit={handleSubmit}>
                <h1>Converse com nossa equipe de vendas</h1>
                {inputs.map(input => (
                    <InputContact key = {input.id} {...input} value={values[input.name]} onChange={onChange}/>                    
                ))}
                <SubmitButton text="Enviar"/>
            </form>
        </div>
    )
}

export default Contact