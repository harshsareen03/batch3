
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCartOutlined } from '@ant-design/icons';

import "../App.css";
const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="danger">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={
                "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              }
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                style={{ color: "white", fontSize: 25 }}
                className="menuColour"
              >
                {props.Home}
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ color: "white", fontSize: 25}}
              >
                {props.second}
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ color: "white", fontSize: 25 }}
              >
                {props.Third}
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ color: "white", fontSize: 25 }}
              >
                {props.Four}
              </Nav.Link>
              <ShoppingCartOutlined  style={{color:'red',width:1000, fontSize: '45px'}}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
