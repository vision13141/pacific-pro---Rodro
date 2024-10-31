const Heading = ({ topTitle, mainTitle, description }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <span className="font-openSans uppercase font-bold text-sm lg:text-base text-thirdColor -tracking-tighter">
        {topTitle ? topTitle : "OUR SERVICES"}
      </span>
      <div className="w-[270px] pt-3 lg:pt-5">
        <div className="border-b-[3px] border-dashed border-b-primary"></div>
      </div>
      <h4 className="font-openSans font-bold text-xl lg:text-[40px] text-primary pt-5 lg:pt-[30px] pb-4">
        {mainTitle ? mainTitle : "Insurance made simple for you"}
      </h4>
      <p className="font-openSans font-normal text-sm lg:text-base text-secondary max-w-[600px]">
        {description
          ? description
          : "We work with several leading insurance companies to secure insurance coverages tailored to meet your needs"}
      </p>
    </div>
  );
};

export default Heading;
