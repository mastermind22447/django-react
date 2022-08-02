import "./App.css";
import { Routes, Route } from "react-router-dom";
import OrdersList from "./components/OrdersList";
import OrderDetail from "./components/OrderDetail";
import EditOrder from "./components/EditOrder";
import AddOrder from "./components/AddOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<OrdersList />} />
        <Route path="order/:id/" element={<OrderDetail />} />
        <Route path="order/add/" element={<AddOrder />} />
        <Route path="order/edit/:id/" element={<EditOrder />} />
      </Routes>
    </div>
  );
}

export default App;
