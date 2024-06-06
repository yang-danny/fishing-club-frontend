
import Events from "@/components/events/Events";
import Collections from "@/components/collections/Collections";
import ProductList from "@/components/products/ProductList";
import ImageSlider from "@/components/ImageSlider";
import PublishNews from "@/components/publishNews/PublishNews";
import Header from "@/components/Header";
import JoinClub from "@/components/JoinClub";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
    <Header />
      <ImageSlider />
      <Events />
      <PublishNews />
      <Collections />
      <ProductList />
      <JoinClub />
      <Newsletter />
    </>
  );
}
