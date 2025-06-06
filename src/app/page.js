import Image from "next/image";
import Carousel from "./components/carousel/page";
import Section from "./components/section/page";
import CustomerArea from "./components/customerArea/page";
import Feedback from "./components/feedback/page";
import ProdcutArea from "./components/product/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <div id="carousel">
        <Carousel />
      </div>

      <div id="products">
        <ProdcutArea />
      </div>

      <div id="customers">
        <CustomerArea />
      </div>

      <div id="feedback">
        <Feedback />
      </div>

      <div id="services">
        <Section />
      </div>
      
    </>
  );
}
