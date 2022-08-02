import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";

const EditOrder = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`/orders/api/order_detail/${params.id}/`)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
  return (
    <div className="container">
      <div className="MuiInput-root">
        <h3>Edit {order.name}</h3>
        Order name
        <input className="MuiInput-input" value={order.name} />
        <br />
        <br />
        Order Quantity
        <input className="MuiInput-input" value={order.quantity} />
        <br />
        <br />
        Customer
        <input className="MuiInput-input" value={order.customer_name} />
      </div>
      <br />
      <br />
      <Button variant="contained">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          Update
        </Link>
      </Button>
    </div>
  );
};

export default EditOrder;
