import Header from "./component/Header.jsx";
import Meals from "./component/Meals.jsx";
import { CartContextProvider } from "./component/store/CartContext.jsx";
import { UserProgressContextProvider } from "./component/store/UserProgressContext.jsx";
import Cart from "./component/Cart.jsx";
import CheckOut from "./component/UI/CheckOut.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
export default App;
