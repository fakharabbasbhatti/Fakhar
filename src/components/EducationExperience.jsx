import { Fragment, useEffect } from "react";

const EducationExperience = () => {
 return (
  <Fragment>
   <div id="resume">
    <h1 className="text-2xl font-bold text-center mb-8 text-white">
     Education & Work Experience
    </h1>
    <div className="flex justify-center text-start gap-2 p-2 md:p-2 lg:p-4 items-start">
     {/* Education Section */}
     <div className="px-2">
      <h1 className="text-2xl font-semibold mb-4 text-white">Education</h1>
       <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Matric</h1>
       <h2 className="text-lg text-gray-300">2019-2021</h2>
       <p className="text-gray-300">Govt APS School Bahawalpur</p>
      </div>
      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Intermediate</h1>
       <h2 className="text-lg text-gray-300">2021-2023</h2>
       <p className="text-gray-300">PostGraduate College Bahawalpur</p>
      </div>
     </div>


     <div className="w-1 h-[40vh] md:h-[28vh] rounded lg:h-[40vh] text-white bg-gradient-to-b from-[#FF014F] to-[#FF5733] mx-4"></div>


     <div className="text-wrap">
      <h1 className="text-2xl font-semibold mb-4 text-white"> Experience</h1>
      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className="text-xl font-medium text-white">Frontend Developer </h1>
       <h2 className="text-lg text-gray-300">2024-Present</h2>
       <p className="text-gray-300">Codes Thinker Company (Onsite)</p>
      </div>

      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className=" lg:text-xl text-sm font-medium text-white">WordPress Developer</h1>
       <h2 className="text-lg text-gray-300">2025-January</h2>
       <p className="text-gray-300 text-wrap">Tech Thrill Company (Remote)</p>
     </div>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default EducationExperience;