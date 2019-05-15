
import React from 'react';
// import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  
   } from 'reactstrap';
import auth0 from '../../services/auth0';   

const BsNavlink = (props) => {
  const {route,title} = props;
  const className = props.className || "";
  return (

    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
    // <Link href={route}>
    //   <a className='nav-link port-navbar-link'>{title}</a>
    // </Link>

  )
}   

const Login = () => {
  return (
    <span onClick={auth0.login} className='nav-link port-navbar-link clickable'>Login</span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className='nav-link port-navbar-link clickable'>Logout</span>
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {isAuthenticated,user,className} = this.props;
    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
          <NavbarBrand className='port-navbar-brand' href="/">Babul Deb</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='port-navbar-item'>
                <BsNavlink route='/' title='Home' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavlink route='/about' title='About' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavlink route='/portfolios' title='Portfolio' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavlink route='/blogs' title='Blog' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavlink route='/cv' title='Cv' />
              </NavItem>
              {!isAuthenticated &&
              <NavItem className='port-navbar-item'>
                <Login />
              </NavItem>
              }
              {isAuthenticated &&
              <NavItem className='port-navbar-item'>
                <Logout />
              </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}