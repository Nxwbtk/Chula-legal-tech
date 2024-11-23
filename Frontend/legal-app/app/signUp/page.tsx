"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const signUpPage = () => {

    return (
        <div className="flex justify-center items-center bg-white w-screen h-screen font-kanit">
            <div className="flex justify-center items-center w-full h-screen">
                <img src="https://cdn-images.dzcdn.net/images/cover/b963b3d8c2ebea4c0aac4c78fa465da6/0x1900-000000-80-0-0.jpg" className="object-cover w-full h-full" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <Card className="w-2/3">
                    <CardHeader className="text-center">
                        <h1><b className="text-4xl text-pink-500">BLACK</b><b className="text-4xl text-black"> PINK</b></h1>
                    </CardHeader>
                    <CardTitle className="ml-2">
                        <h1 className="text-2xl font-bold">SIGN UP</h1>
                    </CardTitle>
                    <CardContent className="mt-4">
                        <Button className="w-full text-2xl bg-pink-500 text-white">Sign Up</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};
export default signUpPage;