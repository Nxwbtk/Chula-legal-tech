// SubNav.tsx
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
      <div className="  fixed left-0 right-0 top-[64px]">
        <div
          className={`w-full h-[200px] transition-transform duration-300 bg-none
                        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="w-full h-1/2 bg-mainColor">
            <div className="mx-auto max-w-full px-4 h-full flex items-center">
              <input
                type="text"
                name="search"
                className="w-full md:w-1/2 p-3 rounded-md block mx-auto"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-full flex">
            <div className="mx-auto max-w-full px-4">
              <div className="flex w-full bg-white shadow-xl rounded-md -mt-3">
                <Button
                  variant="ghost"
                  className="flex-1 rounded-l-md rounded-r-none text-xl p-12 w-full
                                        text-mainColor bg-white hover:bg-gray-200 focus:underline whitespace-nowrap"
                >
                  ทนาย
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-xl p-12 w-full
                                        text-mainColor bg-white hover:bg-gray-200 focus:underline whitespace-nowrap"
                >
                  ตรวจสอบลิขสิทธิ์
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-xl p-12 w-full
                                        text-mainColor bg-white hover:bg-gray-200 focus:underline whitespace-nowrap"
                >
                  Chat Bot
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 rounded-l-none rounded-r-md text-xl p-12 w-full
                                        text-mainColor bg-white hover:bg-gray-200 focus:underline whitespace-nowrap"
                >
                  ข้อมูลเบื้องต้น
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full fixed left-0 right-0 transition-transform duration-300 bg-white z-30 top-[64px]
                        ${isVisible ? '-translate-y-full' : 'translate-y-0'}`}
        >
          <div className="mx-auto max-w-full px-4">
            <div className="flex w-full shadow-xl">
              <Button
                variant="ghost"
                className="flex-1 text-xl p-12 rounded-none 
                                    text-mainColor hover:bg-gray-200 
                                    focus:border-b-2 focus:border-mainColor whitespace-nowrap"
              >
                ทนาย
              </Button>
              <Button
                variant="ghost"
                className="flex-1 text-xl p-12 rounded-none 
                                    text-mainColor hover:bg-gray-200 
                                    focus:border-b-2 focus:border-mainColor whitespace-nowrap"
              >
                ตรวจสอบลิขสิทธิ์
              </Button>
              <Button
                variant="ghost"
                className="flex-1 text-xl p-12 rounded-none 
                                    text-mainColor hover:bg-gray-200 
                                    focus:border-b-2 focus:border-mainColor whitespace-nowrap"
              >
                Chat Bot
              </Button>
              <Button
                variant="ghost"
                className="flex-1 text-xl p-12 rounded-none 
                                    text-mainColor hover:bg-gray-200 
                                    focus:border-b-2 focus:border-mainColor whitespace-nowrap"
              >
                ข้อมูลเบื้องต้น
              </Button>
            </div>
          </div>
        </div>
      </div>
      <main className="relative z-0 bg-white" style={{ marginTop: 'calc(64px + 200px)' }}>
      </main>
    </>
  );
}

export default SubNav;