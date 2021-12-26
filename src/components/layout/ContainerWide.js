import styles from './ContainerWide.module.css'
import LinkPremium from './LinkPremium'

function ContainerWide(){
    return(
        <section className={styles.container_wide}>
            <div>
                <span>
                    Funcionalidades
                </span>
                <div>
                    <h3>
                        O que é um software de gerenciamento de projetos?
                    </h3>
                    <p>
                    É uma ferramenta que permite planejar, organizar e gerenciar todo o trabalho de sua equipe, da primeira à última etapa. Um bom software de gerenciamento de projetos também serve como ferramenta de colaboração. Você pode coordenar as tarefas da equipe para que todos saibam quem está fazendo o quê. Compartilhe feedbacks, arquivos e atualizações de status. E mais, com uma visão completa sobre os trabalhos, as equipes cuidam das tarefas certas no momento certo.
                    </p>
                    {/* <LinkPremium to={'/premium'} text={'Use Costs'}/> */}
                </div>
            </div>
        </section>

    )
}

export default ContainerWide