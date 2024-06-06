import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import Image from "next/image";
import { MotionDiv } from "../Motions";
const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-5">
      <div className="flex flex-col rounded-lg items-start  backdrop-blur-sm backdrop-contrast-125 bg-slate-200 dark:bg-blue-950">
        <div className="flex ">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex max-w-2xl flex-col items-start p-12 mr-20">
            <p className="text-body-medium mt-8 text-sky-500 mb-4 dark:text-sky-300">
              Let's Go Fishing...
            </p>
            <h1 className="text-heading1-bold mt-8 text-sky-900">
              Gear Up for Your Next Fishing Expedition
            </h1>
            <p className="text-base-medium mt-8 text-gray-500 mb-4 dark:text-gray-400">
              Everything you need to know about selecting the perfect fishing
              gear, with a special spotlight on the must-have ...
            </p>
            <Button className="border-none mt-8 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
              Visit Club Store
            </Button>
          </MotionDiv>
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Image
              src="https://res.cloudinary.com/dioas9lmz/image/upload/v1717055566/full_nat-fishing-gear-blog_r6lttf.jpg"
              alt="product"
              width={730}
              height={360}
              className="rounded-tr-lg max-lg:hidden"
            />
          </MotionDiv>
        </div>
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-5 gap-8 m-9 max-md:grid-cols-2 max-md:gap-4">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </MotionDiv>
        )}
      </div>
    </div>
  );
};

export default ProductList;
