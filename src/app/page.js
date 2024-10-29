import Benefits from "./Component/Benefits";
import Customer from "./Component/Customer";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Nav from "./Component/Nav";
import Service from "./Component/Service";
import Submit from "./Component/Submit";
import Testimonial from "./Component/Testimonial";
import Tips from "./Component/Tips";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Customer />
      <Benefits />
      <Tips />
      <Testimonial />
      <Submit />
      <Footer />
    </>
  );
}
