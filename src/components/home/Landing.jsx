// import React from 'react'
import LandingImage from "../../assets/landingImage.svg"
function Landing() {
  return (
    <>
      <div className="
        mt-20
        px-10 py-12 
        rounded-3xl 
        shadow-xl 
        flex flex-col-reverse
        md:flex-row-reverse
        items-center justify-evenly
      bg-gray-100 
        w-4/5
        mx-auto ">

        <div className="p-5 md:p-20 w-full md:w-1/2">

          <h3 className="text-2xl text-right ">
            <span className="font-bold text-orange-500"> مرحبًا بك{" "}</span>
            {" "}في كلية تقنية المعلومات
          </h3>

          <p className="text-xl pt-4 text-right">
            نحن ملتزمون بتقديم تعليم عالي الجودة في مجال تقنية المعلومات، وتزويد طلابنا بالمهارات اللازمة
          </p>

        </div>

        <div className="md:w-1/3 w-full pb-20">
          <img src={LandingImage} alt="" />
        </div>

      </div>
    </>
  )
}

export default Landing