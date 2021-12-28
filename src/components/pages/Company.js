import LinkButton from '../layout/LinkButton'
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
                            Com mais de 15 anos de experiência, a Costs é uma empresa especializada em gestão de projetos.                
                        </p>
                        <LinkButton to="/contact" text="Fale com nossa equipe"></LinkButton>
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