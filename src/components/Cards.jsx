import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./service/CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { itemAdded } from "../store/Cart";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (input) => {
    // console.log(input);
    dispatch(itemAdded(input));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Menu</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item) => (
          <Card
            style={{ width: "22rem", border: "none" }}
            className="mx-2 mt-4 card_style"
            key={item.id}
          >
            <Card.Img
              variant="top"
              src={item.imgdata}
              style={{ height: "16rem" }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{item.rname}</Card.Title>
              <Card.Text>
                Price: {item.price} $
                <br />
                Address: {item.address}
              </Card.Text>
              <div className="button_div d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => send(item)}
                  className="col-lg-12"
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
