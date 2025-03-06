import './App.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Home} from './home';
import {Contact} from './contact';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Hank Meyer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="https://www.canoecanuck.com" target="_blank">Blog</Nav.Link>
            <Nav.Link href="/contact" target="_blank">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <footer className='d-flex justify-content-center bg-dark text-white'>
    <small><i class="bi bi-c-circle"></i> 2023 - Hank Meyer -&nbsp;
      <a href="https://www.linkedin.com/in/hank-meyer-1aa156127" target="_blank" className="footerlinks" ><i className="bi bi-linkedin" fill="currentcolor"> </i></a>
      <a href="https://www.facebook.com/HankMeyer.ca/" target="_blank" className="footerlinks"><i className="bi bi-facebook"> </i></a>
      <a href="https://twitter.com/Canoe_Canuck" target="_blank" className="footerlinks"><i className="bi bi-twitter"> </i></a>
      <a href="https://www.instagram.com/canoe_canuck/" target="_blank" className="footerlinks"><i className="bi bi-instagram"> </i></a>
      <a href="https://www.youtube.com/@CanoeCanuck" target="_blank" className="footerlinks"><i className="bi bi-youtube"> </i></a>
      <a href="https://github.com/CanoeCanuck" target="_blank" className="footerlinks"><i className="bi bi-github"> </i></a>
    </small>
</footer>
    </BrowserRouter>
  );
}

export default App;
