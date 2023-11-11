import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Navi.css';

function Navi() {
    return(
    
        <>
          <Navbar bg="light" data-bs-theme="light" className='navbar-custom'>
            <Container>
              
              <Navbar.Brand href="#home">ToDo APP</Navbar.Brand>
              <Nav className="homepanel">
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                
              </Nav>
            </Container>

            <Button className='btn1' variant="danger">Log in</Button>{' '}

            <Button className='btn2' variant="danger">Sign up</Button>{' '}

            <div class="vertical-line"></div>


      

      

          </Navbar>
          
        </>
    );

}

export default Navi;