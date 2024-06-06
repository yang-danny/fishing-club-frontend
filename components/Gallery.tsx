"use client"

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="p-5">
    <div className="flex gap-4 items-center">
        <div className="flex flex-col rounded-md gap-2 border-2 p-2 border-base-400">
            {productMedia.map((img, index)=>( 
                <Image 
                key={index} 
                src={img} 
                alt="product"
                width={100} 
                height={100} 
                className={`w-[80px] h-[80px] cursor-pointer rounded-md mb-1 object-cover object-top ${mainImage === img ? "border-[2px] border-sky-300":" "}`}
                onClick={e=>(setMainImage(img))}/>
            ))}
        </div>
        <div>
            <Image 
            src={mainImage} 
            alt="Current Image" 
            width={550} 
            height={480}
            className="rounded-md"/>
        </div>
    </div>
</div>
  );
};

export default Gallery;