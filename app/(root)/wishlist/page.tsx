"use client"
import Loader from "@/components/Loader"
import ProductCard from "@/components/products/ProductCard"
import { getProductDetails } from "@/lib/actions/actions"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
 import { 
  Home,
  Heart,
} from "lucide-react";
const Wishlist = () => {
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
  const [wishlist, setWishlist] = useState<ProductType[]>([])
  const getUser = async () => {
    try {
      const res = await fetch("/api/users")
      const data = await res.json()
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.log("[users_GET", err)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  const getWishlistProducts = async () => {
    setLoading(true)

    if (!signedInUser) return
    const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
      const res = await getProductDetails(productId)
      return res
    }))

    setWishlist(wishlistProducts)
    setLoading(false)
  }

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts()
    }
  }, [signedInUser])

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
  }

  return loading ? <Loader /> : (
    <div className="relative w-full h-[1000px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dioas9lmz/image/upload/v1716098657/MarineStripedMarlinAnimalBackgroundFishingPhotographyBackdropIBD-20099_wsgf2j.jpg')]">
    
    <div className=" px-80 py-40 max-md:px-10 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator  className="text-white dark:text-sky-300"/>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Heart className="text-white dark:text-sky-300"/>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator  className="text-white dark:text-sky-300" />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-white dark:text-sky-300">
              {user?.username}'s Wishlist
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      {wishlist.length === 0 && (
        <p>No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center gap-16 py-10 max-md:gap-4">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Wishlist
