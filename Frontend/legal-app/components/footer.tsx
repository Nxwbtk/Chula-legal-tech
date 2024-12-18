import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-full bottom-0 left-0 right-0 static">
            <div className="flex items-center mx-auto bg-mainColor w-full p-5">
                <div className="border-r-2 p-4">
                    <h2 className="font-medium text-xl text-white">ติดต่อเรา</h2>
                    <div className="space-y-1 text-white text-xl">
                        <p>amonnut@gmail.com</p>
                        <p>snowza52@gmail.com</p>
                    </div>
                </div>
                <div className="text-xl p-2 ml-4 text-white  ">
                    096-775-9338
                </div>
            </div>
            <div className="bg-footerColor w-full h-1/3 p-2 text-white">
                © สงวนลิขสิทธิ์ มิ้นซ่า เทคโนโลยีส์ จำกัด (เลขผู้เสียภาษี 0105559038520)
            </div>
        </footer>
    );
}

export default Footer