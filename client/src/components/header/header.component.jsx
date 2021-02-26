import React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';



class Header extends Component{
  constructor(){
        super();
        this.state={
         isNavOpen: false,

        }
      this.toggleNav = this.toggleNav.bind(this);

    }
        toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  render(){
        
        return(
         
                <Navbar dark expand="md">
                 <NavbarToggler onClick={this.toggleNav}/>
                 <NavbarBrand className ="mr-auto" href="/">
                 CJM
                </NavbarBrand>
         <Collapse isOpen={this.state.isNavOpen} navbar> 
            <Nav navbar>
               <NavItem>
                    <NavLink className="nav-link" to="/cars">
                    <span className="fa fa-car fa-lg"></span>Cars
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/logistics">
                    <span className="fa fa-truck fa-lg"></span>Logistics
                    </NavLink>
                </NavItem>
          
                <NavItem>
                    <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                    </NavLink>
                </NavItem>
                </Nav>
              
                </Collapse>
                </Navbar>
          
          
        );
  }
     
  
}

export default Header;