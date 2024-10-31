import Image from "next/image";
import quotes from "../../assets/quote.png";
import verify from "../../assets/verifyed.svg";

const customer = () => {
  return (
    <div className="pb-[100px] pt-8 md:pt-[50px]">
      <div className="container">
        <div className="py-[50px] w-full md:bg-customer-image bg-cover bg-center rounded-[10px] md:p-[50px]">
          <div className="flex items-start justify-start flex-col">
            <div className="bg-white shadow-lg md:w-[371px] md:shadow-none w-full py-7 md:py-[50px] px-6 rounded-xl">
              <Image src={quotes} alt="" />
              <p className="font-semibold text-xl md:text-2xl text-secondary font-openSans pt-5 max-w-[356px]">
                This platform is one of the best companies I have dealt with in
                Indonesia. They’re always happy to help, and i wouldn’t hesitate
                to recommend them.
              </p>
              <div className="pt-[30px]">
                <h4 className="font-openSans font-bold text-xl text-primary pb-3">
                  Daniel Anderson
                </h4>
                <div className="flex items-center gap-x-2">
                  <span>
                    <Image src={verify} alt="" />
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

export default customer;
