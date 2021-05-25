import Layout from "../src/component/layout";
import AccordionFaq from "../src/component/home/Accordion";
import Footer from "../src/component/home/Footer";
import Navigation from "../src/component/home/Navigation";
import Separator from "../src/component/separator";
import Hero from "../src/component/home/Hero";
import Testimony from "../src/component/home/Testimony";
import ShoesCarousel from "../src/component/home/ShoesCarousel";
import FeaturedProduct from "../src/component/home/FeaturedProduct";
import Guarantee from "../src/component/home/Guarantee";
import Pitching from "../src/component/home/Pitching";
import HeroShoes from "../src/component/home/HeroShoes";

export default function Home() {
  const title = "Bakul Sepatu";
  const desc = "A simple Landing page using next";

  return (
    <Layout title={title} desc={desc}>
      <header>
        <Navigation />

        <Hero />
      </header>

      <HeroShoes />

      <Separator className="pb-2" />

      <Testimony />

      <Separator className="pb-5" />

      <ShoesCarousel />

      <Separator className="pb-5" />

      <FeaturedProduct />

      <Separator className="pt-5" />

      <Guarantee />

      <Separator className="pt-5" />

      <Pitching />

      <Separator className="pt-5" />

      <AccordionFaq />

      <Separator className="p-5" />

      <Footer />
    </Layout>
  );
}
