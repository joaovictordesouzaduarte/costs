import SubmitButton from "../form/SubmitButton"
import styles from './Company.module.css'
import Container from '../layout/Container'
import ContainerWide from "../layout/ContainerWide"

function Company(){

    return (
        <div>
            <div>
                <Container className="column">  
                    <section className={styles.company_container}>       
                        <h1>Gerencie projetos</h1>                
                        <p>
                            Com mais de 15 anos de experiência, a Cost é especializada em gestão de recursos para grandes ideias.                
                        </p>
                        <SubmitButton text={"Fale com nossa equipe"}>
                        </SubmitButton>
                    </section> 
                </Container>
            </div>
            <div>
                <ContainerWide>
                </ContainerWide>
                
            </div>

        </div>
        

        
    )
}

export default Company