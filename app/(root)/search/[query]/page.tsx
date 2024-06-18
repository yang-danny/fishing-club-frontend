import ProductCard from '@/components/products/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'
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
    Search,
  } from "lucide-react";
const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className="relative w-full h-[1000px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dioas9lmz/image/upload/v1716098657/MarineStripedMarlinAnimalBackgroundFishingPhotographyBackdropIBD-20099_wsgf2j.jpg')]">
    <div className='px-60 py-40'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="/search">
                <Search className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white dark:text-sky-300"/>
          </BreadcrumbList>
        </Breadcrumb>
      <p className='text-heading3-bold my-10 text-white dark:text-sky-300'>Search results for key word: {decodedQuery}</p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-start gap-8'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage