
export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, { cache: 'no-store' })
  return await collections.json()
}
export const getEvents = async () => {
  const events = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, { cache: 'no-store' })
  return await events.json()
} 
export const getPublishNews = async () => {
  const publishNews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publishNews`, { cache: 'no-store' })
  return await publishNews.json()
} 
  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`, { cache: 'no-store' })
    return await collection.json()
  }
  export const getEventDetails = async (eventId: string) => {
    const events = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, { cache: 'no-store' })
    return await events.json()
  } 
  export const getPublishNewsDetails = async (publishNewsId: string) => {
    const publishNews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publishNews/${publishNewsId}`, { cache: 'no-store' })
    return await publishNews.json()
  } 
  export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { cache: 'no-store' })
    return await products.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
       {mode: 'cors',}
    )
    return await product.json()
  }
  
  export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
    return await searchedProducts.json()
  }
  
  export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`, { cache: 'no-store' })
    return await orders.json()
  }
  export const getCustomer = async (customerId: string) => {
    const customer = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/customer/${customerId}`, { cache: 'no-store' })
    return await customer.json()
  }
  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`, { cache: 'no-store' })
    return await relatedProducts.json()
  }
  export const getProductReviews = async (productId: string) => {
    const productReviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${productId}`, { cache: 'no-store' })
    return await productReviews.json()
  }