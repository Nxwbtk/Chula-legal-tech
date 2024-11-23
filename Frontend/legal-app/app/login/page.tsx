"use client";

import Link from "next/link";
import "../globals.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string;
    password: string;
}

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className="flex justify-center items-center bg-white h-screen w-screen font-kanit">
            <div className="relative flex flex-col justify-around items-center text-center bg-[url(https://oddatelier.net/wp-content/uploads/2024/09/web_profile01.jpg)] bg-center bg-cover w-[22%] h-screen p-8">
                <div className="">
                    <h1 className="text-4xl text-white">Login</h1>
                </div>
                <div className="">
                    <h1 className="text-sm text-white">Log in to access expert legal assistance at any time.</h1>
                </div>
                <div className="">
                    {/* <h1 className="text-4xl text-white">Login</h1> */}
                </div>
            </div>
            <div className="flex jusitfy-center items-center text-center w-full h-screen">
                <div className="flex flex-col justify-center items-center w-full h-full bg-white">
                    <div className="mt-3">
                        <h1 className="text-2xl text-black">WELCOME TO <b className="text-pink-600">BLACK</b><b className="text-black">PINK</b></h1>
                    </div>
                    <div className="mt-[5%] border-b-2 border-[#143D7C] w-1/2">
                        <h1 className="text-xl font-semibold text-black">Login</h1>
                    </div>
                    <div className="mt-2 w-[50%]">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="mt-8">
                                <input type="text" {...register("username", {required:"Username is required."})} className="border text-black w-full border-black h-12 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="ชื่อผู้ใช้งาน *" name="username" id="" />
                            </div>
                            <div className="mt-8">
                                <input type="password" {...register("password", {required:"Password is required."})} className="border w-full border-black h-12 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500 text-black" placeholder="รหัสผ่าน *" name="password" id="" />
                            </div>
                            <div className="text-left text-black mt-3">
                                User Agreement: By using this app, you agree to our terms and conditions, including responsible use and compliance with all applicable laws
                            </div>
                            {
                                errors.username || errors.password ? <div className="text-red-500 text-left mt-3">Please fill in the required fields.</div> : null
                            }
                            <div className=" mt-3">
                                <button type="submit" className="bg-[#143D7C] text-2xl p-3 font-bold w-full rounded-md outline-none transition focus:scale-90 duration-300 hover:bg-[#147D4C]">Sign In</button>
                            </div>
                        </form>s
                    </div>
                    
                    
                    <div className="text-left w-[50%] text-black">
                        Don't have an account ? <Link href="/signUp" className="text-[#143D7C] border-b-2 border-[#143D7C]">Sign Up Here!</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-[15%] h-full">
                <h1 className="text-4xl mt-[15%]">Logo</h1>
            </div>
        </div>
    );
}
export default LoginPage;