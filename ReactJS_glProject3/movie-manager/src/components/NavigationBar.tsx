import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';


const NavigationMenu = () =>{
    return ( 
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Movies On The Tip</Navbar.Brand>
          <Nav className="meuto">

            <Nav.Link ><Link to="/#moviesInTheatre"><Button variant="dark" size="sm">Movies In Theatre</Button></Link></Nav.Link>
            <Nav.Link ><Link to="/#commingSoon"><Button variant="dark" size="sm">Comming Soon</Button></Link></Nav.Link>
            <Nav.Link ><Link to='/#topRatedIndian'><Button variant="dark" size="sm">Top Rated Indian</Button></Link></Nav.Link>
            <Nav.Link ><Link to='/#topRatedMovies'><Button variant="dark" size="sm">Top Rated Movies</Button></Link></Nav.Link>
            <Nav.Link ><Link to='/#favourites'><Button variant="dark" size="sm">Favourites</Button></Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    )
}
export default NavigationMenu;