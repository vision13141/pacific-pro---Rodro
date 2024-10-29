import Heading from "./Common/Heading";
import Card from "./Common/Card";
import benefits1 from "../../assets/benefits-1.png";
import benefits2 from "../../assets/benefits-2.png";
import benefits3 from "../../assets/benefits-3.png";
import benefits4 from "../../assets/benefits-4.png";
import benefits5 from "../../assets/benefits-5.png";

const Benefits = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        <div>
          {/* heading */}
          <Heading
            topTitle={"your benefits"}
            mainTitle={"We’re Your Right Insurance Advocate"}
            description={
              "We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
            }
          />

          {/* benefits */}
          <div className="pt-[48px] flex items-center justify-between flex-wrap">
            <Card
              icon={benefits1}
              title={"We’re unbiased"}
              des={
                "Our online tools help you decide what product is best for you. We’re here to insurance plan you choose."
              }
            />
            <Card
              icon={benefits2}
              title={"We have the best prices"}
              des={
                "Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find."
              }
            />
            <Card
              icon={benefits3}
              title={"We’re your insurance advocate"}
              des={
                "We will deal with the insurance companies for you, even after you’ve bought your plan."
              }
            />
          </div>
          <div className="flex items-center justify-center pt-14 gap-x-16">
            <Card
              icon={benefits4}
              title={"We’re availabe 24/7"}
              des={
                "We have your back 24/7 between our online chat function, email and telephone support."
              }
            />
            <Card
              icon={benefits5}
              title={"We make insurance simple"}
              des={
                "We’re commited to making applying for insurance as simple as can be for our customers."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
