import Image from "next/image";
import hero from "../../assets/hero.png";
import Button from "./Common/Button";

const Hero = () => {
  return (
    <div className="relative pb-28">
      <div className="container">
        <div className="flex items-center justify-between lg:gap-x-12">
          {/* left */}
          <div className="max-w-[608px] pt-[130px]">
            <h1 className="font-openSans font-bold lg:text-[50px] xl:text-[70px] text-primary leading-[60px] xl:leading-[90px]">
              We Are Ready To Make Your New Life Happier.
            </h1>
            <p className="max-w-[500px] font-xl font-normal text-secondary font-openSans pt-[30px]">
              We work with several leading insurance companies to secure
              insurance coverages tailored to meet your needs.
            </p>

            <div className="mt-12">
              <Button title={"Get a consultation"} />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="absolute top-0 right-0">
        <picture>
          <Image src={hero} alt={hero} className="lg:w-[500px] xl:w-full" />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
