"use client";
import { useState } from "react";
import HeartFavorite from "../HeartFavorite";
import { MinusCircle, PlusCircle, Tag } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { Rating } from "../Rating";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4 text-sky-900 dark:text-sky-300">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>
      <div className="flex justify-start gap-2 items-center">
        {productInfo.tags.map((tag, index) => (
          <div className="flex flex-row gap-2" key={index}>
            <Tag /> {tag}
          </div>
        ))}
      </div>
      <div>
        <Rating
          value={productInfo.rating}
          caption={`${productInfo.reviews} ratings`}
        />
      </div>
      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{productInfo.category}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Brand:</p>
        <p className="text-base-bold">{productInfo.brand}</p>
      </div>
      <p className="text-heading3-bold">$ {productInfo.price}</p>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border-2 border-sky-300 text-center px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color
                    ? "bg-sky-900 text-white"
                    : " bg-sky-100 text-sky-900"
                }`}
                onClick={() => setSelectedColor(color)}>
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border-2 border-sky-300 text-center px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size
                    ? "bg-sky-900 text-white"
                    : " bg-sky-100 text-sky-900"
                }`}
                onClick={() => setSelectedSize(size)}>
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Quantity:</p>
          <div className="flex gap-4 items-center">
            <MinusCircle
              size={30}
              className="hover:text-sky-300 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-body-bold">{quantity}</p>
            <PlusCircle
              size={30}
              className="hover:text-sky-300 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        </div>

        <div className="mb-2 flex flex-col gap-2 justify-between">
          <p className="text-base-medium text-grey-2">Status:</p>
          <div className="flex gap-4 items-center">
            {productInfo.instock > 0 ? "✅ In stock" : "❌ Unavailable"}
          </div>
        </div>
      </div>
      {productInfo.instock > 0 ? (
        <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-sky-900 hover:text-white"
       
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}>
        Add To Cart
      </button>
      ) : (
        <div
        className="outline text-base-bold text-center py-3 bg-gray-300 rounded-lg"
         >
        Add To Cart
      </div>
      )}
      
      <div>
        <h2 className="text-lg font-semibold mt-2">Shipping Fee:</h2>
        <p className="mt-2">
          Standard Shipping 2-5 Business Days - <strong>AUD $10.00</strong>
        </p>
        <p className="mt-2">
          Express Post 1-3 Business Days - <strong>AUD $20.00</strong>
        </p>
        <p className="mt-2">
          Pickup in club - <strong>Free</strong>
        </p>
        <p className="text-sm text-sky-600 mt-2">
          *Can't be delivered to a PO Box or Parcel Locker{" "}
        </p>
        <p className="text-sm text-sky-600 mt-2">
          **Ship within Australia only, not support oversea shipping
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
