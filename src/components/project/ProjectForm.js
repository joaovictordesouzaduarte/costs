import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import {useEffect, useState} from 'react';


 function ProjectForm({handleSubmit, btnText, projectData}){
    const[categories, setCategories] = useState([])
    const[project, setProject] = useState(projectData || {})


    useEffect(() => {
        fetch ("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((error) => console.log(error))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
        // console.log(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        
    }

    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
        
    }


    return(
        <form  onSubmit={submit}  className={styles.form}>
            <Input type="text" name="name" text="Nome do projeto" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>
            <Input type="number" name="name" text="Orçamento do projeto" placeholder="Insira o valor do orçamento total" handleOnChange={handleChange}/>
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : '' }/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm