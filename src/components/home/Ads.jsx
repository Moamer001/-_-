// import React from 'react'
import { useState, useEffect } from 'react';
function Ads() {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-06-01`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    return (
        <>
            <h1 className="title w-fit text-center mt-20 text-3xl border-b-2 p-5 border-orange-500 m-auto py-5">
                الإعلانات
            </h1>

            <div className="
        mt-20
        px-10 py-12 
        rounded-3xl 
        shadow-xl 
        flex flex-col-reverse
        md:flex-row-reverse
        items-center justify-center
      bg-gray-100 
        w-4/5
        mx-auto ">

                <div className="p-5 w-full md:w-1/2">
                    <div>
                        <div className="text-xl text-bold flex flex-row gap-6 justify-center mt-20 text-orange-500">
                        <div className='flex flex-col items-center text-6xl'>   {timeLeft.days} <h3 className='text-2xl md:text-lg'>days</h3>     </div>
                            <div className='flex flex-col items-center text-6xl'>  {timeLeft.hours} <h3 className='text-2xl md:text-lg'>hours</h3>    </div>
                            <div className='flex flex-col items-center text-6xl'>{timeLeft.minutes} <h3 className='text-2xl md:text-lg'> minutes</h3> </div>
                            <div className='flex flex-col items-center text-6xl'>{timeLeft.seconds} <h3 className='text-2xl md:text-lg'>seconds</h3>  </div>
                        </div>
                        <h1 className='text-4xl w-full my-16 font-bold text-center text-orange-500'>
                            اليوم العالمية للتقنية
                        </h1>
                        <p className='text-center'>في الاول من يناير</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Ads


