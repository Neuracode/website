import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg='light' variant='light' id='navbar'>
        <Container>
          <Navbar.Brand href='#home'>SynapticAI</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link href='#courses'>Courses</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
            <Nav.Link href='#donate'>Donate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
