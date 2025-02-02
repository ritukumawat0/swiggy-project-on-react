import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const store =useSelector((store)=>store);
  console.log(store)
  const dispatch = useDispatch();
  
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="Cart">
      <h1 className="text-lg font-bold text-center">Cart</h1>
      {cartItems.length===0 && <h1 className="text-md font-semibold  w-6/12 mx-auto p-2 mt-4 bg-green-200">Your cart is empty!!</h1>}
      <div>
        <div className="w-6/12 mt-8 px-4">
        
        <button onClick={handleClearCart} className="text-md font-semibold text-center bg-slate-300 mb-8 px-4 py-2">Clear Cart</button>
            <ItemsList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
