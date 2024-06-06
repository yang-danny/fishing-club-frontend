"use client";
import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const cart = useCart();
  const [query, setQuery] = useState("");
  return (
    <div className="absolute top-20  left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-between items-center max-lg:left-0 max-lg:-translate-x-0 max-lg:w-full">
      <Menu
        size={30}
        className="cursor-pointer left-2 lg:hidden text-white dark:text-sky-900"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 10 },
        }}
        className="px-4 h-20 flex flex-row justify-between gap-16  rounded-lg items-center backdrop-blur-sm backdrop-contrast-125 bg-sky-300 dark:bg-sky-900 max-lg:hidden">
        <div className="flex gap-4 text-base-bold ">
          <Link
            href="/"
            className={`p-2 hover:border-b-2 text-sky-900 hover:border-sky-500 hover:-translate-y-1 hover:scale-105 duration-300 dark:text-sky-300 ${
              pathname === "/" ? "text-orange-400" : "text-sky-900"
            }`}>
            Home
          </Link>
          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className={`p-2 hover:border-b-2 text-sky-900 hover:border-sky-500 hover:-translate-y-1 hover:scale-105 duration-300 dark:text-sky-300 ${
              pathname === "/wishlist" ? "text-orange-400" : "text-sky-900"
            }`}>
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className={`p-2 hover:border-b-2 text-sky-900 hover:border-sky-500 hover:-translate-y-1 hover:scale-105 duration-300 dark:text-sky-300 ${
              pathname === "/orders" ? "text-orange-400" : "text-sky-900"
            }`}>
            Orders
          </Link>
        </div>
        <Link href="/" className="flex justify-center ">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <div className="flex gap-3 border-2 border-sky-900 py-1 items-center rounded-lg dark:border-sky-300">
          <input
            className="outline-none w-auto max-sm:max-w-[100px] bg-transparent placeholder-sky-900 dark:placeholder-sky-300 ml-2"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={query === ""}
            onClick={() => router.push(`/search/${query}`)}>
            <Search className="cursor-pointer mr-2 h-4 w-4 text-sky-900 dark:text-sky-300" />
          </button>
        </div>
        <div className="relative flex gap-3 items-center">
          <div className=" max-md:hidden ">
            <ModeToggle />
          </div>
          <div className="relative border-2 border-sky-900 hover:bg-sky-500 rounded-full w-10 h-10 dark:border-sky-300 max-md:hidden">
            <Link href="/cart" className="flex items-center  p-2 ">
              <ShoppingCart
                size={20}
                className="text-sky-900 dark:text-sky-300"
              />
            </Link>
            <span className="w-5 h-5 bg-sky-900 dark:bg-sky-300 text-[14px] absolute rounded-full right-[-6px] top-[-8px] px-[6px] py-0 text-sky-300 dark:text-sky-900">
              {cart.cartItems.length}
            </span>
          </div>
          <div className="relative border-2 rounded-full w-10 h-10 border-sky-900 dark:border-sky-300 ">
            {user ? (
              <span className=" absolute left-1 top-1">
                <UserButton afterSignOutUrl="/sign-in" />
              </span>
            ) : (
              <Link href="/sign-in" className=" absolute left-1 top-1">
                <CircleUserRound />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex justify-center py-2 lg:hidden">
          <Image src="/logo.png" alt="logo" width={130} height={120} />
        </Link>

        {dropdownMenu && (
          <div className="absolute top-10 left-10 flex flex-col gap-4 p-3 rounded-lg border-none backdrop-blur-sm backdrop-contrast-125 bg-sky-300 dark:bg-sky-900  text-base-bold lg:hidden">
            <Link
              href="/"
              className="p-2 text-sky-900 dark:text-sky-300  hover:translate-x-2 duration-300">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="p-2 text-sky-900 dark:text-sky-300   hover:translate-x-2 duration-300">
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="p-2 text-sky-900 dark:text-sky-300   hover:translate-x-2 duration-300">
              Orders
            </Link>
            <div className="flex justify-center ">
              <ModeToggle />

              <div className="relative border-2 border-sky-900 text-sky-900 hover:bg-sky-500 dark:text-sky-900 rounded-full w-10 h-10 dark:border-sky-300 mx-4">
                <Link href="/cart" className="flex items-center  p-2 ">
                  <ShoppingCart
                    size={20}
                    className="text-sky-900 dark:text-sky-300"
                  />
                </Link>
                <span className="w-5 h-5 bg-sky-900 dark:bg-sky-300 text-[14px] absolute rounded-full right-[-6px] top-[-8px] px-[6px] pt-0.5 text-sky-300 dark:text-sky-900">
                  {cart.cartItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative border-2 right-2 lg:hidden rounded-full w-10 h-10 border-sky-900 dark:border-sky-900 ">
        {user ? (
          <span className=" absolute left-1 top-1">
            <UserButton afterSignOutUrl="/sign-in" />
          </span>
        ) : (
          <Link href="/sign-in" className=" absolute left-2 top-2">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
