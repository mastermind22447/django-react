import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const OrdersList = ({ match }) => {
  // let orderId = match.params.id;
  const [orders, setOrders] = useState([]);

  // let id = params.id;
  // const orderId = orders.useParams.id;

  // const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  function getOrders() {
    fetch(`/orders/api/`)
      .then((res) => res.json())
      .then((res) => {
        setOrders(res["orders"]);
        // setCustomers(res["customers"]);
      })
      .catch((err) => console.error(err));
  }
  // console.log("order_id:", orders[0]);

  const deleteOrder = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };

    fetch(`/orders/api/delete_order/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        getOrders();
      });
  };
  return (
    <>
      <Link to={`/order/add`} style={{ textDecoration: "none" }}>
        Add Order
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Link
                    to={`/order/${order.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {order.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Button href="#" variant="text">
                    {order.customer_name}
                  </Button>
                </TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>
                  <Link
                    to={`/order/edit/${order.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                  |
                  <Button onClick={() => deleteOrder(order.id)} variant="text">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default OrdersList;
