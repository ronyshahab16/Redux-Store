import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "./Cart";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState("")
  const getdata = useSelector( (s)=> s.addReducer)
  console.log(getdata.carts)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Add to cart</Nav.Link>

            
          </Nav>
              <Badge badgeContent={getdata.carts.length} color="primary" className={
                isOpen?"active":""
              } onClick={()=> setIsOpen(!isOpen)}>
              {
                isOpen?
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: "white",position:"relative" }}
                  
                ></i>
                :
                <i class="fa-solid fa-cart-flatbed-suitcase" style={{ color: "white",position:"relative" }}></i>
                
              }
               
              </Badge>
                      <div className="dashboardContainer">
                        {
                          getdata.carts.length == 0? 
                          <p>Your cart is empty</p>
                          :
                          getdata.carts.map((i,index) => (

                          <Cart index={index}/>
                          ))

                        }
                      </div>

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
