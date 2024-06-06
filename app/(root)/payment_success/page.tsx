"use client"
import { Home } from 'lucide-react';
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-sky-900">
      <p className="text-heading4-bold text-green-600">Successful Payment ✅ </p>
      <p className='text-base-bold'>Thanks for your purchase, your order is in processing...⌛</p>
      <Link
        href="/"
        className="flex justify-center items-center p-4 border-2 rounded-lg text-base-bold hover:bg-sky-300 hover:text-white"
      >
       Back to Home  <Home className='ml-4'/> 
      </Link>
    </div>
  );
};

export default SuccessfulPayment;