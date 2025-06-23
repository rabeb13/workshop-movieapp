import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';



    const NavBar = () => {
	return (
		<header>
			<Navbar bg='dark' data-bs-theme='dark'>
				<Container>
					<Navbar.Brand href='/'>Movie App</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};


export default NavBar
