import "./Section5.css";
const Section5 = () => {
  return (
    <div className="section-bg border-b-8 border-yellow-300">
      <div className="w-11/12 max-w-screen-2xl mx-auto relative z-50">
        <h1 className="text-white text-center text-2xl lg:text-3xl font-medium py-9">
          Do You Want to Know What Else is Great? Our Attorney Representation
          isn’t Only Limited to Jacksonville, Illinois – We Provide Legal
          Service Throughout the Entire Area, Including:
        </h1>
        <div className="flex flex-col lg:flex-row justify-between text-white gap-20 w-3/4 mx-auto">
        
        <ul className="flex flex-col gap-7 pb-9">
                <li> <h1 className="text-2xl text-center">Brown County</h1></li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Cass County</h1> </li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Greene County</h1> </li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Jersey County</h1> </li>
            </ul>
            <ul className="flex flex-col gap-7">
                <li> <h1 className="text-2xl text-center"> Pike County</h1></li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Pittsfield, IL</h1> </li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Scott County</h1> </li>
                <hr className="border-b-[1px] border-white " />
                <li> <h1 className="text-2xl text-center">Schuyler County</h1> </li>
            </ul>
           
        </div>
         
        <h2 className="text-center text-white text-xl py-6 "><i>Our Office Is Located At 301 W. State Street, Jacksonville, IL 62650</i></h2>
        </div>
      </div>
  );
};

export default Section5;
