import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
const SubNav = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setIsVisible(false);
            }
            else if (window.scrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [lastScrollY]);

    return (
        <>
            <div
                className={`w-full h-[200px] transition-transform duration-300 
                            ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
                style={{ marginTop: '64px' }}
            >
                <div className='flex justify-center items-start bg-mainColor w-full h-1/2'>
                    <input
                        type="text"
                        name="search"
                        id=""
                        className='w-1/2 p-3 rounded-md mt-2'
                        placeholder='Search'
                    />
                </div>
                <div className='flex justify-center items-center w-full h-fit'>
                    <div className='flex w-3/4 bg-none shadow-xl text-center h-fit mt-[-20px] hover:bg-white rounded-md'>
                        <Button className='rounded-r-none text-xl p-12 w-full bg-white text-mainColor hover:bg-gray-200 focus:underline'>
                            ทนาย
                        </Button>
                        <Button className='rounded-r-none rounded-l-none w-full text-xl p-12 bg-white text-mainColor hover:bg-gray-200 focus:underline'>
                            ตรวจสอบลิขสิทธิ์
                        </Button>
                        <Button className='rounded-r-none rounded-l-none w-full text-xl p-12 bg-white text-mainColor hover:bg-gray-200 focus:underline'>
                            Chat Bot
                        </Button>
                        <Button className='rounded-l-none text-xl w-full p-12 bg-white text-mainColor hover:bg-gray-200 focus:underline'>
                            ข้อมูลเบื้องต้น
                        </Button>
                    </div>
                </div>
            </div>
            <div className={` w-full transition-transform duration-300 fixed top-16 bg-white z-30
                ${isVisible ? 'translate-y-[-100%]' : 'transition-y-full'}
                `}>
                <div className='flex w-full shadow-xl text-center h-fit bg-white'>
                    <Button className='text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 focus:border-b-2 focus:border-mainColor '>
                        ทนาย
                    </Button>
                    <Button className='text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 focus:border-b-2 focus:border-mainColor'>
                        ตรวจสอบลิขสิทธิ์
                    </Button>
                    <Button className='text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 focus:border-b-2 focus:border-mainColor'>
                        Chat Bot
                    </Button>
                    <Button className='text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 focus:border-b-2 focus:border-mainColor'>
                        ข้อมูลเบื้องต้น
                    </Button>
                </div>
            </div>
        </>
    );
}

export default SubNav;
