import React,{Component} from 'react';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';

class NavBar extends Component{
	onSearchChange = (e)=>{
		this.props.onSearchChange(e.target.value);
	}
	render(){
		return(
			<div>
				<Navbar bg="dark" expand="lg">
				  <a href="/"><Navbar.Brand >News</Navbar.Brand></a>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onSearchChange} />
				      <Button variant="outline-success" onClick={this.props.onSearchRequest} >Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
			</div>
			);
	}
}
export default NavBar;