import React,{Component} from 'react';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';

class NavBar extends Component{
	render(){
		return(
			<div>
				<Navbar bg="dark" expand="lg">
				  <Navbar.Brand >News</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link >Home</Nav.Link>
				      <Nav.Link >Link</Nav.Link>
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
			</div>
			);
	}
}
export default NavBar;