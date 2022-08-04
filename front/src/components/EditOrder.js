import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";

const EditOrder = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    fetch(`/orders/api/order_detail/${params.id}/`)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
  // let data = {
  //   name: order.name,
  // };

  const post = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: customer,
        name: name,
        quantity: quantity,
      }),
    };
    fetch(`/orders/api/edit_order/${params.id}/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {});
  };
  console.log("id:", params.id);

  return (
    <div className="container">
      <div className="MuiInput-root">
        <h3>Edit Order</h3>
        Order name
        <input
          className="MuiInput-input"
          type="text"
          id="name"
          defaultValue={order.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        Order Quantity
        <input
          className="MuiInput-input"
          defaultValue={order.quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <br />
        Customer
        <input
          className="MuiInput-input"
          defaultValue={order.customer_name}
          onChange={(e) => setCustomer(e.target.value)}
        />
      </div>
      <br />
      <br />
      <Button onClick={() => post()} variant="contained">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          Update
        </Link>
      </Button>
    </div>
  );
};

export default EditOrder;
