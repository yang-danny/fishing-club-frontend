import ProductCard from "@/components/products/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home,Shapes } from "lucide-react";
const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);
 
  return (
    <div className="bg-slate-200 dark:bg-sky-950">
    <div className="flex justify-start  items-start gap-16 pt-48 px-96 max-md:px-12">
   <Breadcrumb>
     <BreadcrumbList>
       <BreadcrumbItem>
         <BreadcrumbLink href="/">
           <Home />
         </BreadcrumbLink>
       </BreadcrumbItem>
       <BreadcrumbSeparator />
       <BreadcrumbItem>
         <BreadcrumbLink href="#">
           <Shapes />
         </BreadcrumbLink>
       </BreadcrumbItem>
       <BreadcrumbSeparator />
       <BreadcrumbItem>
         <BreadcrumbPage>{collectionDetails.title}</BreadcrumbPage>
       </BreadcrumbItem>
     </BreadcrumbList>
   </Breadcrumb>
 </div>
    <div className="px-10 py-5 flex flex-col items-center gap-8 text-sky-900 dark:text-sky-300">
      <Image
        src={collectionDetails.image}
        width={960}
        height={400}
        alt="collection"
        className="w-[960px] h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";