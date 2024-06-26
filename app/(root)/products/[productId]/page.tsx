import Gallery from "@/components/Gallery";
import ProductCard from "@/components/products/ProductCard";
import ProductInfo from "@/components/products/ProductInfo";
import {
  getProductDetails,
  getRelatedProducts,
  getProductReviews,
  getCustomer,
} from "@/lib/actions/actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Review from "@/components/Review";
import { Separator } from "@/components/ui/separator";

const ProductDetails = async ({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { order: string; customer: string };
}) => {

  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);
  const productReviews = await getProductReviews(params.productId);
  const customer = await getCustomer(searchParams.customer);

  return (
  <div className="bg-slate-200 dark:bg-sky-950">
      <div className="flex justify-start  items-start gap-16 pt-48 px-64 max-md:px-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="text-sky-900 dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-sky-900 dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-sky-900 dark:text-sky-300">
                {productDetails.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-sky-900 dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sky-900 dark:text-sky-300">{productDetails.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-start gap-16 py-2 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>
      <div className="flex flex-col justify-center items-start gap-8 py-2 px-24 max-md:flex-col max-md:items-center">
        <p className="text-heading3-bold text-sky-900 dark:text-sky-300">Description:</p>
        <p className="text-small-medium text-justify text-sky-900 dark:text-sky-300">
          {productDetails.description}
        </p>
        <Separator />
      </div>
      <Review
        productReviews={productReviews}
        customerId={customer._id}
        productId={productDetails._id}
        orderId={searchParams.order}
      />
      <div className="flex flex-col items-start px-24 py-5 max-md:px-10">
        <p className="text-heading3-bold text-sky-900 dark:text-sky-300">Related Products</p>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 mt-8">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      </div>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
