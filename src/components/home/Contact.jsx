// import React from 'react'

function Contact() {
    return (
        <>
        <div id="cont">{""}</div>
         <h1 className="title w-fit text-center mt-20 text-3xl border-b-2 p-5 border-orange-500 m-auto py-5">
    تواصل معنا
            </h1>

            <div className=" relative flex min-h-screen flex-col justify-center overflow-hidden rounded-3xl 
        shadow-xl sm:py-12 bg-gray-100 
        w-full sm:w-4/5 mt-20 px-10 py-12 
        mx-auto">
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-6 h-full ">
                        <div className="rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 p-10 col-span-2">
                            <h2 className="mb-10 font-bold text-2xl text-orange-100 ">معلومات التواصل</h2>
                            <p className="font-bold text-orange-100 py-8 border-b border-white">
                                العنوان
                                <span className="font-normal text-xs text-orange-300 block">ترهونة-سوق الاحد</span>
                            </p>
                            <p className="font-bold text-orange-100 py-8 border-b border-white">
                                رقم الهاتف
                                <span className="font-normal text-xs text-orange-300 block">091 000 0000</span>
                            </p>
                            <p className="font-bold text-orange-100 py-8 border-b border-white">
                                البريد الالكتروني
                                <span className="font-normal text-xs text-orange-300 block">itcollegeazu@gmail.com</span>
                            </p>
                            <p className="font-bold text-orange-100 py-8 border-b border-white">
                                الموقع
                                <span className="font-normal text-xs text-orange-300 block">https://maps.app.goo.gl/BJcQQ1bWqx2hctKW9</span>
                            </p>

                        </div>
                        <div className=" p-14 col-span-4">
                            <h2 className="mb-14 font-bold text-4xl text-orange-500 text-right">راسلنا</h2>
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <div className="flex flex-col">
                                    <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="اسم المستخدم" placeholder="اسم المستخدم" />
                                </div>
                                <div className="flex flex-col">
                                    <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="البريد الالكتروني" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <textarea className="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="اكتب رسالة" name="" id="" rows="8"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button className="rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-bold py-4 px-6 min-w-40 hover:bg-orange-800 transition-all">إرسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact