type CollectionType = {
    _id: string;
    title: string;
    products: number;
    image: string;
  };
  
  type ProductType = {
    _id: string;
    title: string;
    brand: string;
    description: string;
    media: [string];
    category: string;
    collections: [CollectionType];
    tags: [string];
    sizes: [string];
    colors: [string];
    price: number;
    expense: number;
    reviews:number;
    rating: number;
    instock: number;
    createdAt: Date;
    updatedAt: Date;
  };
  
  type UserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
  };
  
  type OrderType = {
    shippingAddress: Object;
    _id: string;
    customerClerkId: string;
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
  }
  
  type OrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    _id: string;
  }
  type ReviewType={
   
    _id: string;
    customer:CustomerType;
    product:ProductType;
    order:OrderType;
    title:string;
    rating:number;
    media: [string];
    body:string;
    createdAt: Date;
  }
  type PublishNewsType = {
    _id: string;
    title: string;
    author: string;
    publisher:string;
    media: [string];
    body: string;
  };
  type EventType = {
    _id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    funder:string;
    media: [string];
    body: string;
   
  };