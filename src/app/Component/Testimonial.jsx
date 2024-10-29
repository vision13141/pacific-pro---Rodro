import Heading from "./Common/Heading";
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import verifyimg from "../../assets/verifyed.svg";
import img1 from "../../assets/1.png";
import img2 from "../../assets/3.png";

const Testimonial = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        {/* heading */}
        <div className="pb-12">
          <Heading
            topTitle={"testimonial"}
            mainTitle={"What Our Customer Have To Says"}
            description={
              "We share common trends, strategies ideas, Opinion, short & log stories from the team behind company"
            }
          />
        </div>
        {/* testimonial card */}
        <div className="flex items-center justify-between">
          <div className="max-w-[370px] py-[50px] px-14 rounded-[10px] shadow-md">
            <div className="flex items-center gap-2 text-yellow-600 text-2xl">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <p className="font-openSans font-normal text-base text-secondary pt-[20px] pb-[30px]">
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="flex items-center gap-x-3">
              <Image src={img1} alt="" className="w-[50px]" />
              <div>
                <h4 className="font-openSans font-bold text-xl text-primary pb-3">
                  Daniel Anderson
                </h4>
                <div className="flex items-center gap-x-2">
                  <span>
                    <Image src={verifyimg} alt="" className="w-6" />
                  </span>
                  <h5 className="font-openSans font-normal text-base text-secondary italic">
                    Verified customer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[370px] py-[50px] px-14 rounded-[10px] shadow-md">
            <div className="flex items-center gap-2 text-yellow-600 text-2xl">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <p className="font-openSans font-normal text-base text-secondary pt-[20px] pb-[30px]">
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="flex items-center gap-x-3">
              <Image src={img1} alt="" className="w-[50px]" />
              <div>
                <h4 className="font-openSans font-bold text-xl text-primary pb-3">
                  Viola Manisa
                </h4>
                <div className="flex items-center gap-x-2">
                  <span>
                    <Image src={verifyimg} alt="" className="w-6" />
                  </span>
                  <h5 className="font-openSans font-normal text-base text-secondary italic">
                    Verified customer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[370px] py-[50px] px-14 rounded-[10px] shadow-md">
            <div className="flex items-center gap-2 text-yellow-600 text-2xl">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <p className="font-openSans font-normal text-base text-secondary pt-[20px] pb-[30px]">
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="flex items-center gap-x-3">
              <Image src={img2} alt="" className="w-[50px]" />
              <div>
                <h4 className="font-openSans font-bold text-xl text-primary pb-3">
                  Viola Manisa
                </h4>
                <div className="flex items-center gap-x-2">
                  <span>
                    <Image src={verifyimg} alt="" className="w-6" />
                  </span>
                  <h5 className="font-openSans font-normal text-base text-secondary italic">
                    Verified customer
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
