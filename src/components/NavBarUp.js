
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';



import React from 'react'


const NavBarUp = () => {

  const {user}=useSelector((state)=>state.users)
  const {userLogin}=useSelector((state)=>state.login)
  console.log(user)
  console.log(userLogin)
  const kk=user.find((e)=>e.id===userLogin.id)
  console.log(kk)

  const pdt=kk.cartitem

  const customer=kk.name

  return (

    <>

    <Navbar expand="lg" className="bg-info sticky-top nav-color">

    <Container fluid>

      <Navbar.Brand to="/products" as={Link} className='text-BLACK'>G- commerce</Navbar.Brand>

      <Nav>

        <Nav.Link to="/products" as={Link} className='text-black'><b>Products</b></Nav.Link>

      </Nav>

      <Navbar.Toggle />

      <Navbar.Collapse className='justify-content-end me-5'>

      <Navbar.Text className='nav-text'>

          <Nav.Link to="/" className='text-black' as={Link}>{customer}</Nav.Link>

        </Navbar.Text>

      <Navbar.Text>

          <Nav.Link to="/" className='text-black ' as={Link}>Log out</Nav.Link>

        </Navbar.Text>

        <Navbar.Text>

        <Nav.Link to="/cart" className='text-black shop' as={Link}>
        <i class="bi bi-cart-fill"></i> {pdt.length}
  </Nav.Link>

        </Navbar.Text>

      </Navbar.Collapse>

    </Container>

  </Navbar>

  <main>

    <Outlet/>

  </main>

  </>

  );

}

export default NavBarUp