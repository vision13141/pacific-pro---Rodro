import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex justify-between">
          <div>
            {/* logo */}
            <div className="flex items-center gap-x-2">
              <Image src={logo} alt="" />
              <span className="font-mulish font-bold text-primary text-[26px]">
                Pacific Corp.
              </span>
            </div>
            <p className="text-base font-openSans font-normal text-secondary pt-[15px] pb-[32px] max-w-[263px]">
              Build a modern and creative website with crealand
            </p>
            {/* social media */}
            <div className="flex items-center gap-x-3">
              <div className="size-[40px] hover:text-yellow-400 hover:-translate-y-1 transition-all hover:bg-sky-600 cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="size-[40px] hover:text-white hover:-translate-y-1 transition-all hover:bg-sky-600 cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaTwitter />
                </span>
              </div>
              <div className="size-[40px] hover:text-[#ffc001] hover:-translate-y-1 transition-all hover:bg-[#a508f2] cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaInstagram />
                </span>
              </div>
              <div className="size-[40px] hover:text-white hover:-translate-y-1 transition-all hover:bg-[#087cb6] cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-between gap-x-32">
            <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-primary text-[18px]">
                Product
              </li>
              {[
                "Landingpage",
                "Features",
                "Documentation",
                "Referral Program",
                "Pricing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-openSans hover:text-thirdColor hover:underline font-normal text-base text-secondary"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-primary text-[18px]">
                Services
              </li>
              {[
                "Documentation",
                "Design",
                "Themes",
                "Illustrations",
                "UI Kit",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-openSans font-normal hover:text-thirdColor hover:underline text-base text-secondary"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-primary text-[18px]">
                Company
              </li>
              {["About", "Terms", "Privacy Policy", "Careers"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="font-openSans hover:text-thirdColor hover:underline font-normal text-base text-secondary"
                  >
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-primary text-[18px]">
                More
              </li>
              {["Documentation", "License", "Changelog"].map((item, index) => (
                <li
                  key={index}
                  className="font-openSans hover:text-thirdColor hover:underline font-normal text-base text-secondary"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
