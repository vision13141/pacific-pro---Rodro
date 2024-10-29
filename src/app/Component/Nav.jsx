import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "./Common/Button";

const Nav = () => {
  const list = ["home", "pages", "Services", "Portfolio", "Blog", "Contact Us"];
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-x-2">
            <picture>
              <Image src={logo} alt={logo} />
            </picture>
            <h5 className="font-mulish font-bold text-[35px] text-primary">
              Pacific Corp.
            </h5>
          </div>
          <div>
            <ul className="flex items-center gap-x-10">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="font-openSans cursor-pointer hover:text-primary transition-all font-normal hover:scale-105 text-secondary text-base capitalize"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
