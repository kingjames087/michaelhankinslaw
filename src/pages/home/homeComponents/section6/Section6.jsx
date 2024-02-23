import React from "react";

const Section6 = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto max-w-screen-2xl py-7">
        <h1 className="text-center text-3xl pt-3 ">
          FREE CASE EVALUATION FORM
        </h1>
        <p className="py-5 text-center font-normal">
          It may be tempting to deal with your legal issues on your own.
          However, there are a variety of benefits to enlisting the help of a
          professional attorney, like Michael A. Hankins. First and foremost is
          the fact that the legal system is very complicated. Without the kind
          of training that a professional attorney has, you may miss many key
          factors to winning your case. Additionally, an attorney will know all
          the ins and outs of proper documentation, ensuring that your case goes
          smoothly.
        </p>
        <div className="w-full lg:w-3/4 mx-auto">
          <div className="">
            <form className="bg-white  rounded px-2 lg:px-8 pt-6 pb-8 mb-4">
              <div className="mb-4 flex gap-5 lg:gap-10">
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="LastName"
                />
              </div>
              <div className="mb-4 flex gap-5 lg:gap-10">
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="Phonenumber"
                />
              </div>
              <div className="flex gap-5 lg:gap-10 mb-5">
                <select
                  className=" appearance-none border rounded w-full py-3 pr-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="role"
                >
                  <option>Practice Area</option>
                  <option>Criminal Defense</option>
                  <option>Probate, Wills, POAs</option>
                  <option>Family Law</option>
                  <option>Traffic Law</option>
                  <option>Child Custody</option>
                  <option>Divorce</option>
                </select>
                <select
                  className=" appearance-none border rounded w-full py-3 pr-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  id="role"
                >
                  <option>Have you utilized our service before ?</option>
                  <option>Yes, I am returning Client</option>
                  <option>No, I am a new client</option>
                  <option>I am neither</option>
                </select>
              </div>
              <textarea
                className="resize-none border rounded-md w-full px-4 py-2  outline-none"
                rows="4"
                placeholder="Message..."
              ></textarea>
              <div className="flex items-center justify-center py-6">
                <button className="px-6 py-3 bg-[#4054B2] hover:bg-black text-white rounded-md">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
