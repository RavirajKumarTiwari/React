import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    };

    return (
        <div className="w-full p-4 flex gap-x-10 border-b-4">
            <div className="h-56 w-52">
                <img
                    src={item.image}
                    alt="pro_img"
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-gray-700 font-semibold text-lg mt-1">
                        {item.title}
                    </h1>

                    <h1 className="text-gray-400 text-sm mt-3 ">
                        {item.description.split(" ").slice(0, 20).join(" ") +
                            "..."}
                    </h1>
                </div>

                <div className="flex justify-between items-center -mt-2">
                    <p className="text-green-600 font-semibold">
                        ${item.price}
                    </p>

                    <div
                        onClick={removeFromCart}
                        className="bg-red-300 rounded-full h-10 w-10 flex justify-center items-center hover:bg-red-500 transition duration-300 ease-in-out cursor-pointer"
                    >
                        <MdDelete className="fill-red-950 cursor-pointer rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
