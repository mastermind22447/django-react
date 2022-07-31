import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import OrderDetail from "./OrderDetail";

const OrderDetail = () => {
  const params = useParams();
  //   console.log("params: ", params);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`/api/order_detail/${params.id}/`)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
  //   console.log("order: ", order);

  return (
    <div>
      <h1>This is {order.name} detail page</h1>
      <p>{order.name}</p>
      <p>{order.customer}</p>
      <p>{order.quantity}</p>
    </div>
  );
};

export default OrderDetail;
