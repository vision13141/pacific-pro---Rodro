const Submit = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="py-[100px] flex flex-col items-center justify-center text-center">
            <h4 className="font-openSans font-bold text-[40px] text-white max-w-[893px]">
              Ready To Get Insured? Submit Your Request And Hear Back As Soon As
              Tomorroe.
            </h4>
            <div className="flex items-center gap-x-2 pt-10">
              <input
                type="text"
                className="py-4 rounded-lg px-4 placeholder:text-base placeholder:font-openSans placeholder:text-secondary placeholder:font-normal w-[400px]"
                placeholder="Your Email"
              />
              <button className="bg-thirdColor text-white text-[18px] font-openSans font-bold py-[15px] px-8 rounded-lg">
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
