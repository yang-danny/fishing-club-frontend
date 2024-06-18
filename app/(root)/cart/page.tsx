"use client";

import useCart from "@/lib/hooks/useCart";

import { useUser } from "@clerk/nextjs";
import {
  MinusCircle,
  PlusCircle,
  Trash,
  DollarSign,
  SquareX,
  Home,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="relative w-full h-[1000px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dioas9lmz/image/upload/v1716098657/MarineStripedMarlinAnimalBackgroundFishingPhotographyBackdropIBD-20099_wsgf2j.jpg')]">

    <div className="flex gap-20 py-40 px-60 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart" className="text-white dark:text-sky-300">
                <ShoppingCart />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
          </BreadcrumbList>
        </Breadcrumb>
        <hr className="my-6 border-white dark:border-sky-300" />

        {cart.cartItems.length === 0 ? (
          <div className=" text-sky-900">
            Cart is empty. 
            <Link href="/" className="flex">Back for shopping</Link>
          </div>
        ) : (
          <div>
            <table className="w-full  items-center text-sky-300">
              <thead>
                <tr className="text-lg text-white dark:text-sky-300 w-full grid grid-cols-3 items-center">
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <hr className="my-6 border-white dark:border-sky-300" />
              <tbody className="w-full ">
                {cart.cartItems.map((cartItem, index) => (
                  <tr
                    key={index}
                    className="w-full grid grid-cols-3 p-2 rounded-md items-center mb-4 text-sky-900 bg-white dark:bg-sky-900 dark:text-sky-300">
                    <td className="flex">
                      <Image
                        src={cartItem.item.media[0]}
                        width={100}
                        height={100}
                        className="rounded-lg w-32 h-32 object-cover"
                        alt="product"
                      />
                      <div className="flex flex-col gap-3 ml-4">
                        <Link href={`/products/${cartItem.item._id}`}>
                          <p className="text-body-bold">
                            {cartItem.item.title}
                          </p>
                        </Link>
                        <div className="flex gap-2">
                          <p className="text-small-medium text-gray-400">
                            Color:
                          </p>
                          {cartItem.color && (
                            <p className="text-small-medium">
                              {cartItem.color}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <p className="text-small-medium text-gray-400">Size:</p>
                          {cartItem.size && (
                            <p className="text-small-medium">{cartItem.size}</p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-4 justify-center items-center">
                        <MinusCircle
                          size={30}
                          className="hover:text-sky-300 cursor-pointer"
                          onClick={() =>
                            cart.decreaseQuantity(cartItem.item._id)
                          }
                        />
                        <p className="text-body-bold">{cartItem.quantity}</p>
                        <PlusCircle
                          size={30}
                          className="hover:text-sky-300 cursor-pointer"
                          onClick={() =>
                            cart.increaseQuantity(cartItem.item._id)
                          }
                        />
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-4 justify-center items-center ">
                        <p className="text-body-bold">${cartItem.item.price}</p>
                        <SquareX
                          className="text-red-500 text-lg cursor-pointer hover:scale-110 "
                          onClick={() => cart.removeItem(cartItem.item._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="w-1/3 max-h-52 max-lg:w-full flex flex-col gap-8 bg-sky-300 dark:bg-sky-900 dark:text-sky-300 rounded-lg px-4 py-5 mt-10 text-sky-900">
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-start text-body-semibold">
          <span>Total Amount: </span>
          <span>${totalRounded}</span>
        </div>
        <div className="flex justify-center gap-4">
          <div className=" flex  relative">
            <DollarSign className="text-green-300 cursor-pointer absolute top-2 left-3 z-10 " />
            <button
              className="border rounded-lg text-body-semibold bg-white py-3 w-44 dark:bg-sky-500 hover:bg-sky-900 hover:text-white"
              onClick={handleCheckout}>
              Checkout
            </button>
          </div>

          <div className=" flex  relative">
            <Trash className="text-red-500 cursor-pointer absolute top-2 left-3 z-10 " />
            <button
              className="border rounded-lg text-body-semibold bg-white py-3 w-44 dark:bg-sky-500 hover:bg-sky-900 hover:text-white"
              onClick={() => cart.clearCart()}>
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
