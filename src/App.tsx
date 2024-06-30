import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Cart from "./pages/Cart"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
