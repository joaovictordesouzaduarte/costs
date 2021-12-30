import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"
import { useNavigate } from "react-router-dom"

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
         
        //initialize cost and service
        project.cost = 0
        project.services = []

        fetch("https://my-json-server.typicode.com/joaovictordesouzaduarte/costs-project/projects", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(project)           
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>
                Crie seu projeto
            </h1>
            <p>
                Crie seu projeto para depois 
            </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject