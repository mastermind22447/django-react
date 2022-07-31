import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const EditOrder = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`/api/order_detail/${params.id}/`)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
  return (
    <div className="container">
      <div class="MuiInput-root">
        <h3>Edit {order.name}</h3>
        Order name
        <input class="MuiInput-input" value={order.name} />
        <br />
        <br />
        Order Quantity
        <input class="MuiInput-input" value={order.quantity} />
        <br />
        <br />
        Customer
        <input class="MuiInput-input" value={order.customer} />
      </div>
    </div>
  );
};

export default EditOrder;
