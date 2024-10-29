import Heading from "./Common/Heading";
import Image from "next/image";
import img1 from "../../assets/tips1.png";
import img2 from "../../assets/tips2.png";
import img3 from "../../assets/tips3.png";

const Tips = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        <Heading
          topTitle={"our tips for you"}
          mainTitle={"Reinventing Your Protection"}
          description={
            "We share common trends, strategies ideas, opinion, short & log stories from the team behind company"
          }
        />
        <div className="pt-12 flex justify-between">
          <div className="max-w-[370px] h-full rounded-xl overflow-hidden">
            <Image src={img1} alt="" className="w-full h-full" />
          </div>
          <div className="max-w-[370px] h-full rounded-xl flex flex-col justify-between items-center  overflow-hidden">
            <Image src={img2} alt="" className="w-full h-full" />
            <div className="pt-5">
              <h3 className="font-openSans leading-[40px] font-semibold text-primary text-2xl text-center">
                How to prevent and protect your family from Carbon monoxide
              </h3>
              <p className="font-openSans font-normal text-secondary text-base pt-3 text-center">
                We share common trends, strategies ideas, opinion, short & log
                stories from the team behind company.
              </p>
            </div>
          </div>
          <div className="max-w-[370px] h-full rounded-xl overflow-hidden">
            <Image src={img3} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
