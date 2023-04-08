import {Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainLayout({children}){
    return (
    <div className='bg-warning h-100'>
        <Navbar className='navbar-dark py-3 bg-dark' expand='md'>
            <Container fluid>
                <Link to="/" className='navbar-brand'>
                    <h3 className='d-inline-middle'>Book Store</h3>
                </Link>
            </Container>
        </Navbar>
        <Container>
            {children}
        </Container>
    </div>
    )
}