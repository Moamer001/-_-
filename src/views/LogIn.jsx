import '../assets/fonts.css'
import {Link} from 'react-router-dom'

export default function LogIn() {

    
    return (
        <>
        
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-gray-100 rounded-md shadow-lg lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-orange-500 ">
                    تسجيل الدخول
                    </h1>
                    <form className="mt-6 flex flex-col items-center">
                        <div className="mb-2 flex flex-row-reverse justify-between items-center w-80">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-orange-500 text-left w-24"
                            >
                                :اسم المستخدم
                            </label>
                            <input
                                type="text"
                                className="block min-w-20 px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-2xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2 flex flex-row-reverse justify-between items-center w-80">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-orange-500 text-left w-24"
                            >
                        :رقم القيد  
                            </label>
                            <input
                                type="email"
                                className="block  min-w-20 px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-2xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <button className="min-w-20 px-8 py-2 text-white bg-orange-500 rounded-2xl hover:bg-orange-600 focus:outline-none focus:bg-gray-600">
                        تسجيل الدخول
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-xs text-center text-gray-700">
                        {" "}
                            هل أنت جديد؟ {" "}
                        <Link to='/signup' className="font-medium text-gray-600 hover:underline">
                        إنتسب
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}