const Submit = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="py-[100px] flex flex-col items-center justify-center text-center">
            <h4 className="font-openSans font-bold text-xl lg:text-[40px] text-white max-w-[893px] leading-10">
              Ready To Get Insured? Submit Your Request And Hear Back As Soon As
              Tomorroe.
            </h4>
            <div className="flex flex-col md:flex-row justify-center gap-y-4 w-full items-center gap-x-2 pt-10">
              <input
                type="text"
                className="py-4 rounded-lg px-4 placeholder:text-base placeholder:font-openSans placeholder:text-secondary placeholder:font-normal w-full md:w-[400px]"
                placeholder="Your Email"
              />
              <button className="bg-thirdColor text-white text-sm lg:text-[18px] font-openSans font-bold py-3 lg:py-[15px] px-4 lg:px-8 rounded-lg">
                Get started
              </button>
            </div>
            <p className="font-openSans text-base text-secondary font-normal max-w-[555px] pt-8">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
