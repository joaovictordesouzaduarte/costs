import Message from "../layout/Message";
// import {useLocation} from 'react-router-dom';

function Projects(){

    // const location = useLocation()
    // let message = ''
    // if(location.state){
    //     message = location.state.message
    // }

    return(
        <div>
        <h1>Meus projetos</h1>
        <Message msg="Projeto criado com sucesso" type="success"/>
        
        </div>
    )   
}
export default Projects