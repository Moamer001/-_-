// import React from 'react'
import EmptyLogo from '../../assets/emptyLogo.png'
import FaceBook from '../../assets/facebook.svg'
import Telegram from '../../assets/telegram.svg'
import Whatsapp from '../../assets/whatsapp.svg'
function Footer() {
    return (
        <>
            <div className="flex flex-col mt-40 bg-gray-100 h-auto ">
                <div className="w-full draggable">
                    <div className="container flex flex-col mx-auto">
                        <div className="flex flex-col items-center w-full pt-5 mb-10">
                            <span className="mb-8 w-80">
                                <img src={EmptyLogo} alt="" />
                            </span>
                            <div className="flex flex-col items-center gap-6 mb-8">
                                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                                    <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">عن الكلية</a>
                                    <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">الاسئلة الشائعة</a>
                                    <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">مساعدة</a>
                                    <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">سياسة الخصوصية</a>
                                </div>
                                <div className="flex items-center gap-8">
                                    <a href="https://www.facebook.com/profile.php?id=100078057726101&mibextid=ZbWKwL" className="w-10 ">
                                        <img src={FaceBook} alt="" />
                                    </a>
                                    <a href="javascript:void(0)" className="w-10 ">
                                        <img src={Telegram} alt="" />
                                    </a>
                                    <a href="javascript:void(0)" className="w-10 ">
                                        <img src={Whatsapp} alt="" />
                                    </a>
                                    {/* <a href="javascript:void(0)" className="w-10 ">
                                        <img src="" alt="" />
                                    </a>
                                    <a href="javascript:void(0)" className="w-10 ">
                                        <img src="" alt="" />
                                    </a> */}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-base font-normal   leading-7 text-center text-grey-700">
                                   جامعة الزيتونة - كلية تقنية المعلومات.كل الحقوق محفوظة
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer