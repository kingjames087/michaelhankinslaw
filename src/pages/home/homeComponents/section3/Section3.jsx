import React from "react";
import img1 from '../../../../assets/sectionthree-img.webp'
import img2 from '../../../../assets/secthree-img2.webp'

const Section3 = () => {
  return (
    <div className="bg-[#16163F]">
      <div className="w-11/12  max-w-screen-2xl mx-auto py-14">
        <h1 className="text-white text-center text-4xl">
          WHAT OUR LAW FIRM DOES & HOW WE CAN HELP YOU
        </h1>
        <div className="grid grid-cols-1 gap-10 py-10">
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
          <p className="text-white text-center lg:text-start ps-0 lg:ps-9">
            Michael A. Hankins Attorney at Law is proud to be the law firm that
            people in the Jacksonville, Illinois, area call for their complex
            legal issues. We are always happy to help our community with legal
            matters pertaining to family, traffic, or criminal defense. Speak
            with our attorneys about injuries that you’ve received; no one
            should get away with causing you physical harm. Whether it be due to
            negligence, an auto accident, or filing a wrongful death claim, you
            can rely on our experienced attorney with over 32 years of trial
            experience. Additionally, we can help if you have been charged with
            a DUI/DWI or other traffic violations; use our expertise to help
            avoid these charges getting onto your driving record – which can
            lead to various problems.
          </p>
          <img className="w-[657px]" src={img1} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
          <p className="text-white text-center lg:text-start ps-0 lg:ps-9">
            We’re also the lawyers to call for any criminal cases. We have
            plenty of trial experience, using it to win your case. Assault,
            robbery, felonies, misdemeanors – we can handle them all. Lastly, we
            also specialize in family law and can help if you are going through
            a rough time. Talk to us about your divorce, and we’ll provide legal
            help to determine custody, child support, and more. Furthermore, we
            help with issues of guardianship, adoption, and paternity. When you
            call Michael A. Hankins Attorney at Law, you get the expertise of
            the former Assistant State’s Attorney of St. Clair County. You can
            trust that you’ll have the experience of 32 years of trial knowledge
            on your side. Give us a call for a consultation regarding your
            claims today
          </p>
          <img className="w-[657px] " src={img2} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
