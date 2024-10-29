const Button = ({ title }) => {
  return (
    <button className="py-[14px] px-[30px] hover:shadow-lg hover:shadow-[#8ad32a42] font-openSans font-bold text-xl text-white bg-thirdColor  rounded-[10px] cursor-pointer relative after:absolute after:top-0 transition-all overflow-hidden  z-10 after:left-0 after:h-full after:w-full after:bg-primary  after:scale-x-0 after:origin-right after:hover:scale-x-100 after:hover:-z-10 after:transition-all after:duration-300">
      {title ? title : "Call Now "}
    </button>
  );
};

export default Button;
