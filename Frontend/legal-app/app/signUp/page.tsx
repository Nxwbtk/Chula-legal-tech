"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import BgImage from '../../img/background-login.png';

const signUpPage: React.FC = () => {

    const router = useRouter();

    return (
        <div className="flex justify-center items-center bg-white w-screen h-screen font-kanit">
            <div className="flex justify-center items-center w-full h-screen">
                <img src={BgImage.src} className="object-cover w-full h-full" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <Card className="w-2/3 shadow-lg border-2">
                    <CardHeader className="text-center">
                        <h1><b className="text-4xl text-pink-500">BLACK</b><b className="text-4xl text-black"> PINK</b></h1>
                    </CardHeader>
                    <CardTitle className="ml-2">
                        <h1 className="text-2xl font-bold">SIGN UP AS</h1>
                    </CardTitle>
                    <CardContent className="mt-4">
                        <Button
                            onClick={() => router.push('/signUp/lawyer')}
                            className="w-full text-4xl bg-mainColor hover:bg-subColor text-white p-8"> ทนาย </Button>
                        <Button
                            onClick={() => router.push('/signUp/user')}
                            className="w-full text-4xl bg-mainColor hover:bg-subColor text-white p-8  mt-3"> ผู้ใช้งานทั่วไป </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};
export default signUpPage;