import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Navbar = () => {
  const { amount } = useSelector((store: RootState) => store.cart);
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center h-16 px-40">
      {/* Brand Name or Logo */}
      <div className="text-xl font-bold">My App</div>

      <div className="flex gap-2">
        <MdShoppingCart size={30} />
        <h1>{amount}</h1>
      </div>
    </nav>
  );
};

export default Navbar;
