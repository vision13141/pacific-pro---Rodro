import Image from "next/image";

import life from "../../assets/life.png";
import car from "../../assets/car.png";
import { GrFormNextLink } from "react-icons/gr";
import Heading from "./Common/Heading";
import Card from "./Common/Card";

const Service = () => {
  return (
    <div className="lg:py-24 py-10">
      <div className="container">
        {/* heading */}
        <Heading />
        {/* service */}
        <div className="lg:pt-[100px] pt-12 flex md:flex-row flex-col gap-y-7 items-center justify-between">
          {/* card */}
          <Card learnmore={true} />
          <Card
            learnmore={true}
            title={"Life Insurance"}
            des={
              "Helping you bridge gaps in you health care coverage during times of transition"
            }
            icon={life}
          />
          <Card
            learnmore={true}
            title={"Car Insurance"}
            des={
              "Car insurance is a type of insurance policy that provides cover for your car."
            }
            icon={car}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
