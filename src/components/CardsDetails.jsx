import React, { useEffect, useState } from "react";
import Tabel from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { itemAdded, itemRemoved, itemDecremented } from "../store/Cart";

import { getItemById } from "./../store/Cart";

const CardsDetails = (props) => {
  // const [item, setItem] = useState([]);
  const id = props.match.params.id;
  const history = props.history;
  const cart = useSelector((state) => state.entities.cart);
  const item = getItemById(cart, id);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = getItemById(cart, id);
  //   setItem(data);
  // });

  const handelDelete = (id) => {
    dispatch(itemRemoved({ id }));
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <h2 className="text-center">Item details page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            <div className="items_img">
              <img src={item.imgdata} alt="" />
            </div>
            <div className="details">
              <Tabel>
                <thead style={{ border: 0 }}>
                  <tr>
                    <td>
                      <p>
                        <strong>Resturant</strong>: {item.rname}
                      </p>
                      <p>
                        <strong>Price</strong>: {item.price} $
                      </p>
                      <p>
                        <strong>Dishes</strong>: {item.address}
                      </p>
                      <p>
                        <strong>Total</strong>: {item.price * item.qnty} $
                      </p>

                      <div
                        className="mt-5 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                        }}
                      >
                        <span
                          onClick={
                            item.qnty <= 1
                              ? () => handelDelete(item.id)
                              : () => dispatch(itemDecremented(item.id))
                          }
                          style={{ fontSize: 24, marginLeft: "10%" }}
                        >
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{item.qnty}</span>
                        <span
                          onClick={() => dispatch(itemAdded(item))}
                          style={{ fontSize: 24, marginRight: "10%" }}
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td>
                      <p>
                        <strong>Rating: </strong>
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: 5,
                          }}
                        >
                          {item.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review: </strong>
                        <span>{item.somedata}</span>
                      </p>
                      <p>
                        <strong>Remove: </strong>
                        <span>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => handelDelete(item.id)}
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          ></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </thead>
              </Tabel>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CardsDetails;
