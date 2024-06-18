import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
 import { 
  Home,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="relative w-full h-[1000px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dioas9lmz/image/upload/v1716098657/MarineStripedMarlinAnimalBackgroundFishingPhotographyBackdropIBD-20099_wsgf2j.jpg')]">

    <div className="px-80 py-40 text-sky-900 dark:text-sky-300 max-md:px-10">
    <div className=" text-sky-900 dark:text-sky-300 ">
         <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <ShoppingBag className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-white dark:text-sky-300">
               Orders
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  </div>
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">You have no orders yet.</p>
        ))}

      <div className="flex flex-col gap-10 mt-5">
        {orders?.map((order: OrderType) => (
          <div className="flex flex-col rounded-lg gap-8 p-4 bg-white hover:bg-gray-200 dark:bg-sky-900 dark:hover:bg-sky-950">
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold ">Order ID: {order._id}</p>
              <p className="text-base-bold">
                Total Amount: ${order.totalAmount}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-md:gap-2">
              {order.products.map((orderItem: OrderItemType) => (
                <div
                key={orderItem.product._id}
                
                className="flex gap-8 max-md:gap-2">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium ">
                      Title:{" "}
                      <span className="text-small-bold">
                        {orderItem.product.title}
                      </span>
                    </p>
                    {orderItem.color && (
                      <p className="text-small-medium">
                        Color:{" "}
                        <span className="text-small-bold">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {orderItem.size && (
                      <p className="text-small-medium">
                        Size:{" "}
                        <span className="text-small-bold">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    <p className="text-small-medium">
                      Unit price: $
                      <span className="text-small-bold">{orderItem.product.price}</span>
                    </p>
                    <p className="text-small-medium">
                      Quantity:{" "}
                      <span className="text-small-bold">{orderItem.quantity}</span>
                    </p>
                    <Link 
                    className="border-2 w-24 h-8 rounded-md text-center item py-[2px] mt-2 border-yellow-500 cursor-pointer "
                    href={{
                  pathname:`/products/${orderItem.product._id}`,
                  query:{
                    customer:order.customerClerkId.toString(),
                    order: order._id
                  }
                }}>Review It</Link>
                  </div>
                  
                </div>
                
              ))}
              
            </div>
         
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
