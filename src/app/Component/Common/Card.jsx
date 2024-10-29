import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import home from "../../../assets/home.png";
const Card = ({ learnmore, icon, title, des }) => {
  return (
    <div
      id="serviceCard"
      className="group max-w-[370px] cursor-pointer shadow-md hover:-translate-y-4 
           flex items-center border-2 border-transparent hover:shadow-xl hover:border-thirdColor flex-col justify-center rounded-[10px] py-[35px] px-[35px]"
    >
      <div className="p-[20px] rounded-[10px] border-2 border-thirdColor">
        <Image src={icon ? icon : home} alt={icon} />
      </div>
      <h3 className="font-openSans font-bold max-w-[290px] text-nowrap overflow-hidden text-ellipsis text-primary text-center text-2xl pt-[30px] pb-5">
        {title ? title : "Home insurance "}
      </h3>
      <p className="max-w-[250px] font-openSans font-normal pb-5 text-base text-secondary text-center">
        {des
          ? des
          : " Home insurance is a type of insurance policy that provides cover for your home."}
      </p>
      {learnmore ? (
        <div className="flex items-center gap-x-1 font-openSans font-bold text-base text-primary">
          <p className="font-openSans font-bold text-base text-primary">
            Learn more
          </p>
          <span className="text-2xl group-hover:text-thirdColor group-hover:translate-x-1 duration-300 transition-all">
            <GrFormNextLink />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
