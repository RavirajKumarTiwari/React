import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    console.log("Printing Cart");
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="flex flex-col items-center p-5 gap-y-5 w-[80vw] m-auto">
            {cart.length > 0 ? (
                <div className="w-full max-w-[80vw] px-5">
                    <div className="flex justify-between gap-x-10 lg:gap-x-5">
                        <div className="w-[60%]">
                            {cart.map((item, index) => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        itemIndex={index}
                                    />
                                );
                            })}
                        </div>

                        <div className="flex flex-col">
                            <div className=" p-5 flex flex-col justify-between gap-y-[400px]">
                                <div className="mr-52">
                                    <div className="flex flex-col">
                                        <div className="font-bold uppercase text-green-700">
                                            Your Cart
                                        </div>

                                        <div className="text-[30px] font-bold text-green-700 uppercase">
                                            Summary
                                        </div>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="font-semibold">
                                                Total Items: {cart.length}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-x-1 pt-5">
                                        <p className="font-semibold">
                                            Total Amount:
                                        </p>

                                        <p className="font-bold truncate">
                                            ${totalAmount.toFixed(2)}
                                        </p>
                                    </div>

                                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-5">
                                        CheckOut Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-red-500 text-[60px]">
                        Cart Empty 🥲
                    </h1>

                    <Link to={"/"}>
                        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-5">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
