import React,{Component} from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';

class NavBar extends Component{
	render(){
		return(
			<div>
				<Navbar bg="dark" expand="lg">
				  <Navbar.Brand style={{"color":"white","font-size":"20px"}}>News</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link style={{"color":"white","font-size":"18px"}}>Home</Nav.Link>
				      <Nav.Link style={{"color":"white","font-size":"18px"}}>Link</Nav.Link>
				      <NavDropdown id="basic-nav-dropdown">
				        <NavDropdown.Item >Action</NavDropdown.Item>
				        <NavDropdown.Item >Another action</NavDropdown.Item>
				        <NavDropdown.Item >Something</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item >Separated link</NavDropdown.Item>
				      </NavDropdown>
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