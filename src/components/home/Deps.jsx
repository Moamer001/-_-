// import React from 'react'
import SE from '../../assets/SE.svg'
import CS from '../../assets/cs.svg'

function Deps() {
    return (
        <>
        <div id ="deps">{""}</div>
            <h1   className="title w-fit text-center mt-20 text-3xl border-b-2 p-5 border-orange-500 m-auto py-5">
                الأقسام
            </h1>

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

                    <h3 className="text-2xl text-right font-bold text-orange-500 ">
                        هندسة البرمجيات
                    </h3>

                    <p className="text-xl pt-4 text-right">
                        يهدف هذا القسم الى اعداد الكوادر القادرة على انجاز المشاريع البرمجية بالطرق الهندسية.يتم تدريس مجموعة متنوعة من المواضيع التي تغطي جميع جوانب تطوير البرمجيات، بما في ذلك التحليل و تحديد المتطلبات والتصميم وإدارة المشاريع وتأكيد الجودة
                    </p>
                    <h2 className='text-right my-3 text-orange-500'>
                        متطلبات هذا القسم
                    </h2>
                    <p className='text-right my-3'>
                        يحق للطالب الالتحاق بقسم هندسة البرمجيات عند انجازه 65 وحدة من ضمنها مقرر مقدمة في هندسة البرمجيات بمعدل لا يقل عن %60 
                    </p>
                </div>

                <div className="md:w-1/3 w-full pb-20">
                    <img src={SE} alt="" />
                </div>

            </div>

            
            <div className="
        mt-20
        px-10 py-12 
        rounded-3xl 
        shadow-xl 
        flex flex-col-reverse
        md:flex-row
        items-center justify-evenly
      bg-gray-100 
        w-4/5
        mx-auto ">

                <div className="p-5 md:p-20 w-full md:w-1/2">

                    <h3 className="text-2xl text-right font-bold text-orange-500 ">
                        علوم الحاسوب
                    </h3>

                    <p className="text-xl pt-4 text-right">
                    يركز هذا القسم على دراسة الأساس النظري للمعلومات والحوسبة بالإضافة إلى تطبيقاتها العملية.يتعلم الطلاب كيفية تحليل البيانات وإدارة الشبكات والعديد من المواضيع الأخرى الخاصة بتقنية المعلومات 
                    </p>
                    <h2 className='text-right my-3 text-orange-500'>
                        متطلبات هذا القسم
                    </h2>
                    <p className='text-right my-3'>
                        يحق للطالب الالتحاق بقسم هندسة البرمجيات عند انجازه 45 وحدة من ضمنها مقرر مقدمة في تقنية المعلومات و تقنيات حل المشكلة بمعدل لا يقل عن %60 
                    </p>
                </div>

                <div className="md:w-1/3 w-full pb-20">
                    <img src={CS} alt="" />
                </div>

            </div>
        </>
    )
}

export default Deps