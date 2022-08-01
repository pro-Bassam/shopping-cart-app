import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import giff from "./media/giphy.webp";
import { itemRemoved } from "../store/Cart";

function Header(props) {
  const cart = useSelector((state) => state.entities.cart);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(itemRemoved({ id }));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTotal = () => {
    let price = 0;
    cart.map((item) => {
      price = price + item.price * item.qnty;
    });
    return price;
  };

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light me-5">
          Shopping App <i className="fa-brands fa-shopify ms-1"></i>
        </NavLink>

        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={cart.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {cart.length ? (
          <div className="card_details" style={{ width: "25rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                        <img
                          src={item.imgdata}
                          style={{ width: "5rem", height: "5rem" }}
                          alt=""
                        />
                      </NavLink>
                    </td>
                    <td>
                      <p>{item.rname}</p>
                      <p>Price: {item.price}$</p>
                      <p>Quantity: {item.qnty}</p>
                      <p
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                      >
                        <i
                          className="fa-solid fa-trash smalltrash"
                          onClick={() => handelDelete(item.id)}
                        ></i>
                      </p>
                    </td>
                    <td
                      className="mt-5"
                      style={{
                        color: "red",
                        fontSize: 20,
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-solid fa-trash largetrash"
                        onClick={() => handelDelete(item.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
                <p className="text-center">Total: {getTotal()}$</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: 320, height: 90, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 20 }}>Your Cart is Empty</p>
            <img
              src={giff}
              alt="Cart"
              className="emptycart_img"
              style={{ width: 80, height: 100, padding: 0 }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
}

export default Header;
