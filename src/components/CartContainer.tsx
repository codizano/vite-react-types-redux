import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeItem } from "../features/cart/cartSlice";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CartContainer = () => {
  const { items, total } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();

  /*  if (amount < 1) {
    return (
      <section className="">
        <header>
          <h2>Tu Carrito</h2>
          <h3>Esta Vacio</h3>
        </header>
      </section>
    );
  } */

  return (
    <>
      <p className="text-center my-4">Center</p>
      <div className="flex justify-center mt-8">
        <ul>
          {items.map((item: CartItem) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Qty {item.quantity}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 ml-1 my-2 rounded"
                onClick={() => {
                  dispatch(removeItem(item.id));
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="text-center my-4">Total: {total}$</footer>
    </>
  );
};

export default CartContainer;
