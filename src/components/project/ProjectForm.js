import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type="text" name="name" text="Nome do projeto" placeholder="Insira o nome do projeto" />
            <Input type="number" name="name" text="Orçamento do projeto" placeholder="Insira o valor do orçamento total"/>
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm