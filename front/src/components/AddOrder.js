import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const AddOrder = () => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customer, setCustomer] = useState();

  // console.log("orders: ", orders);
  useEffect(() => {
    fetch("/orders/api/")
      .then((res) => res.json())
      .then((res) => {
        setOrders(res["orders"]);
        setCustomers(res["customers"]);
      })
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (event) => {
    setCustomer(event.target.value);
  };
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
    fetch(`/orders/api/add_order/`, requestOptions).then((response) =>
      response.json()
    );
    // .then((data) => {});
  };
  // console.log("customer:", customer);

  return (
    <div className="container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div>
            <br />
            <br />
            <FormControl style={{ minWidth: 180 }}>
              <InputLabel id="demo-simple-select-label">
                Select Customer
              </InputLabel>
              <Select
                //
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customer}
                label="Customer"
                onChange={handleChange}
              >
                {customers.map((customer) => (
                  <MenuItem value={customer.id} key={customer.id}>
                    {customer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <br />

          <TextField
            onChange={(e) => setName(e.target.value)}
            required
            id="outlined-required"
            label="Order Name"
            defaultValue=""
          />
          <br />
          <br />

          <TextField
            onChange={(e) => setQuantity(e.target.value)}
            id="outlined-required"
            label="Quantity"
            type="number"
            variant="filled"
          />
        </div>
      </Box>

      <Button onClick={() => post()} variant="contained">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          SUBMIT
        </Link>
      </Button>
    </div>
  );
};

export default AddOrder;
