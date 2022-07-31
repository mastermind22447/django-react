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

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`api/`)
      .then((res) => res.json())
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Button href="#text-buttons">Add Order</Button>
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
                  <Link to={`/order/${order.id}`}>{order.name}</Link>
                </TableCell>
                <TableCell>
                  <Button href="#" variant="text">
                    {order.customer}
                  </Button>
                </TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>
                  <Link to={`/order/edit/${order.id}`}>Edit</Link>|
                  <Button href="#" variant="text">
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
