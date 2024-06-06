"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "../HeartFavorite";
import { Rating } from "../Rating";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <div className="border-2 drop-shadow-xl bg-white dark:bg-sky-900 p-4 rounded-lg border-sky-500">
      <Link
        href={`/products/${product._id}`}
        className="w-[220px] flex flex-col gap-2 text-sky-900 dark:text-sky-300">
        <Image
          src={product.media[0]!}
          alt="product"
          width={250}
          height={300}
          className="h-[220px] rounded-lg object-cover hover:scale-105"
        />
        <div>
          <p className="text-base-bold">{product.title}</p>
          <div className="mt-2">
            <Rating
              value={product.rating}
              caption={`${product.reviews} ratings`}
            />
          </div>
          <div className="mt-2 flex justify-between gap-2">
            <p className="text-small-medium ">{product.brand} </p>
            <p className="text-small-medium text-grey-2">{product.category} </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-bold">${product.price}</p>
          <HeartFavorite
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
