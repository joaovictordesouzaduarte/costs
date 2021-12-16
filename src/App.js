import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
    <Navbar/>      
    <Container className="min-height">
    <Routes>       
      <Route exact path ='/' element={<Home />}>
      </Route>
      <Route exact path ='/company' element={<Company />}>        
      </Route>
      <Route exact path ='/contact' element={<Contact />}>
      </Route>
      <Route exact path ='/newproject' element={<NewProject />}>
      </Route>
    </Routes>    
    </Container>
    <Footer/>
    </Router>
    
  );
}

export default App;
