import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./components/Cart/Cart"
import { CartContextProvider } from "./context/CartContext"
import { Order } from "./components/Order/Order"


function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:category" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/confirmar-compra" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
