"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler} from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    surname: string,
    address: string,
    tel: string,
    email: string,
    idCard?: string,
    pic_idCard?: File,
    pic_profile?: File;
}

const   signUser:React.FC = () => {

    const [step, setStep] = useState(1);
    const [idCardPreview, setIdCardPreview] = useState<string>('');
    const [profilePreview, setProfilePreview] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();
    const [validationErrors, setValidationErrors] = useState({
        username: false,
        password: false,
        confirmPassword: false,
        firstName: false,
        surname: false,
        address: false,
        tel: false,
        email: false,
        IdCard: false
      });

    const { register, handleSubmit, watch, formState: {errors}, trigger } = useForm<Inputs>();

    const onsubmit = (data: Inputs) => {
        if (!data.firstName)
        {
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: true,
                surname: false,
                address: false,
                tel: false,
                email: false,
                IdCard: false
            });
        }

        if (!data.surname)
        {
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: false,
                surname: true,
                address: false,
                tel: false,
                email: false,
                IdCard: false
            })
        }

        if (!data.address){
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: false,
                surname: false,
                address: true,
                tel: false,
                email: false,
                IdCard: false
            })
        }

        if (!data.tel){
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: false,
                surname: false,
                address: false,
                tel: true,
                email: false,
                IdCard: false
            })
        }

        if (!data.email){
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: false,
                surname: false,
                address: false,
                tel: false,
                email: true,
                IdCard: false
            })
        }
        
        if (!data.idCard){
            setValidationErrors({
                username: true,
                password: true,
                confirmPassword: true,
                firstName: false,
                surname: false,
                address: false,
                tel: false,
                email: false,
                IdCard: true
            })
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'IdCard' | 'profile') => {
        const file = event.target.files?.[0];
        if (file)
        {
            const currentPreview = type === 'IdCard' ? idCardPreview : profilePreview;
            if (currentPreview)
                window.URL.revokeObjectURL(currentPreview);
            const previewURL = window.URL.createObjectURL(file);
            type === 'IdCard' ? setIdCardPreview(previewURL) : setProfilePreview(previewURL);
        }
    };

    useEffect(() => {
        return () => {
            if (idCardPreview) window.URL.revokeObjectURL(idCardPreview);
            if (profilePreview) window.URL.revokeObjectURL(profilePreview);
        };
    }, [idCardPreview, profilePreview]);

    const handleNextStep = async (e: React.MouseEvent) => {
        e.preventDefault();

        const isUsername = await trigger('username');
        if (!isUsername) {
          setValidationErrors({
            username: true,
            password: false,
            confirmPassword: false,
            firstName: true,
            surname: true,
            address: true,
            tel: true,
            email: true,
            IdCard: true
          });
          alert('กรุณากรอกชื่อผู้ใช้งาน');
          return;
        }

        const isPassword = await trigger('password');
        if (!isPassword) {
            setValidationErrors({
            username: false,
            password: true,
            confirmPassword: false,
            firstName: true,
            surname: true,
            address: true,
            tel: true,
            email: true,
            IdCard: true
            });
            alert('กรุณากรอกรหัสผ่าน');
            return;
        }

        const confirmPass = await trigger('confirmPassword');
        if (!confirmPass) {
            setValidationErrors({
            username: false,
            password: false,
            confirmPassword: true,
            firstName: true,
            surname: true,
            address: true,
            tel: true,
            email: true,
            IdCard: true
            });
            alert('กรุณายืนยันรหัสผ่าน');
            return;
        }

        if (step < 2)
        {
            setStep(step + 1);
            setValidationErrors({
                username: false,
                password: false,
                confirmPassword: false,
                firstName: false,
                surname: false,
                address: false,
                tel: false,
                email: false,
                IdCard: false
            });
        }
    };

    const handlePrevStep = () => {
        if (step > 1)
            setStep(step - 1);
    }

    const handleBack = () =>
    {
        router.push('/login');

    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="font-kanit contain-none">
            <div className="flex flex-col justify-center items-center lg:flex-row min-h-screen bg-white font-kanit">
                {/* Left Section */}
                <div className="hidden lg:block lg:w-[22%] lg:h-screen relative bg-[url(https://www.figma.com/file/LlvSLLtbFgjKjRn7ieW5Pu/image/16f11896ac0171df49a84ace75fd953eba2b6ed9)] bg-cover bg-center">
                    <div className="h-full flex flex-col justify-around items-center text-center p-8">
                        <h1 className="text-4xl text-white">Sign Up</h1>
                        <h1 className="text-lg xl:text-xl text-white">Welcome! Let us help you connect with the best legal professionals</h1>
                        <div></div>
                    </div>
                </div>
                {/* Middle Section */}
                <div className="w-full lg:w-full px-4 lg:px-8">
                    <div className="flex flex-col justify-center items-center max-w-2xll mx-auto">
                        <div>
                            <p className="text-2xl sm:text-4xl">welcome to <b className="text-4xl text-pink-500">BLACK</b><b className="text-4xl text-black">PINK</b></p>
                        </div>
                        <div className="w-full lg:w-[50%] border-b-2 border-mainColor mt-4 text-center">
                            <h1 className="text-xl sm:text-2xl font-semibold text-mainColor">Sign Up</h1>
                        </div>
                        <div className="w-full lg:w-[50%] space-y-2 mt-4 px-4 lg:px-0">
                                <p className="text-2xl">Step {step}/2</p>
                                
                                {
                                    step === 2 ? (
                                        <>
                                            <Button type="submit" className=" text-black w-fit rounded-md p-3 text-lg border-2 border-mainColor bg-white hover:outline-none hover:bg-mainColor hover:text-white" onClick={handlePrevStep}> &lt; Previous </Button>
                                        </>
                                    ) : (
                                        <Button type="submit" name="back" className=" text-black w-fit rounded-md p-3 text-lg border-2 border-mainColor bg-white hover:outline-none hover:bg-mainColor hover:text-white" onClick={handleBack}> &lt; Back </Button>
                                    )
                                }
                                {
                                    step === 1 && (
                                        <>
                                            <div>
                                                <input 
                                                    type="text" {...register("username", 
                                                        {required: true, 
                                                            onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                                                                if (validationErrors.username)
                                                                {
                                                                    setTimeout(() =>{
                                                                        if (!e.target.value.trim()) {
                                                                            e.target.focus();
                                                                        }
                                                                    }, 0);
                                                                }
                                                            }
                                                        })}
                                                    
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${validationErrors.username 
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}

                                                    placeholder="ชื่อผู้ใช้งาน *" name="username" id=""/>
                                            </div>
                                            <div>
                                                <input type="password" 
                                                    {...register("password",
                                                    {required: true,
                                                    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                                                        if (validationErrors.password)
                                                        {
                                                            setTimeout(() =>{
                                                                if (!e.target.value.trim()) {
                                                                    e.target.focus();
                                                                }
                                                            }, 0);
                                                        }
                                                        }
                                                    })}
                                                    
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${validationErrors.password 
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }     
                                                    `}
                                                    placeholder="รหัสผ่าน *" name="password" id=""/>
                                            </div>
                                            <div>
                                                <input 
                                                    type="password" 
                                                    {...register("confirmPassword", {
                                                        required: "Please Confirm Password",
                                                        validate: ( val:string ) => {
                                                            if (watch('password') !== val) {
                                                                return "Passwords do not match";
                                                            }
                                                        },
                                                        onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                                                            if (errors.confirmPassword)
                                                            {
                                                                setTimeout(() => {
                                                                    if (!e.target.value.trim()){
                                                                        e.target.focus();
                                                                    }
                                                                }, 0);
                                                            }
                                                        } 
                                                        
                                                    })}
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${validationErrors.confirmPassword 
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }     
                                                    `}
                                                    placeholder="ยืนยันรหัสผ่าน *" name="confirmPassword" id="" 
                                                />
                                                
                                            </div>
                                            <div>
                                                <p>At least 8-16 characters long</p>
                                                <p>Mix of uppercase letters, lowercase letters, numbers, and special characters</p>
                                                <p>Avoid personal information</p>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    step === 2 && (
                                        <>
                                            <div>
                                                <input type="text" 
                                                    {...register("firstName", {required: "First Name is required."})} 
                                                    name="firstName" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.firstName
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="ชื่อ *" />
                                                
                                            </div>
                                            <div>
                                                <input type="text" 
                                                    {...register("surname", {required: "Surname is required."})} 
                                                    name="surname" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.surname
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="นามสกุล *" />
                                            </div>
                                            <div>
                                                <input 
                                                    type="text" 
                                                    {...register("address", {required: "Address is required."})} 
                                                    name="address" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.address
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="ที่อยู่ *" />
                                                
                                            </div>
                                            <div>
                                                <input 
                                                    type="text" {...register("tel", {required: "Telephone is required."})} 
                                                    name="tel" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.tel
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="เบอร์โทร *" />
                                                
                                            </div>
                                            <div>
                                                <input 
                                                    type="email" {...register("email", {required: "First Name is required."})} 
                                                    name="email" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.email
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="อีเมล *" />
                                                
                                            </div>
                                            <div>
                                                <input 
                                                    type="text" {...register("idCard", {required: "ID Card is required."})} 
                                                    name="idCard" id="" 
                                                    className={`
                                                        border w-full rounded-md p-2 h-12
                                                        focus:outline-none focus:ring-2
                                                        cursor-text
                                                        ${errors.idCard
                                                            ? 'border-red-600 focus:ring-red-600 focus:border-red-600'
                                                            : 'border-black focus:ring-sky-500 focus:border-sky-500'
                                                        }
                                                    `}
                                                    placeholder="เลขบัตรประชาชน *" />
                                                
                                            </div>
                                            <div>
                                                <input type="file" accept="image/*" {...register("pic_idCard")} name="pic_idCard" onChange={(e) => handleImageChange(e, 'IdCard')} className="hidden" id="idcard-upload"/>
                                                <label 
                                                htmlFor="idcard-upload"
                                                className="flex flex-col justify-center items-center w-full h-64 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200 border-2 border-dashed border-gray-400"
                                                >
                                                {
                                                    idCardPreview ? (
                                                        <img src={idCardPreview} alt="ID Card Preview" className="object-cover w-full h-full"/>
                                                    ) : (
                                                        <div className="text-center">
                                                            <span className="block text-xl text-gray-500">อัพโหลดภาพถ่ายบัตรประชาชน</span>
                                                        </div>
                                                    )
                                                }
                                                </label>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="space-y-3">
                                    {
                                        step < 2 ? (
                                            <Button type="submit" className="bg-mainColor text-white w-full rounded-md p-6 text-2xl font-bold" onClick={handleNextStep}> Next </Button>
                                        ) : (
                                            <Button type="submit" className="bg-mainColor text-white w-full rounded-md p-6 text-2xl font-bold "> Confirm </Button>
                                        )
                                    }
                                </div> 
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[22%] h-screen justify-start">
                {
                    step === 2 && 
                    (
                        <>
                            <div className="mt-[15%]">
                                <p className="text-4xl"> Logo</p>
                            </div>
                            <div className="space-y-4 mt-[15%]">
                                <div className="">
                                    <input type="file" onChange={(e) => handleImageChange(e, 'profile')} accept="image/*" className="hidden" id="profile-upload" />
                                    <label htmlFor="profile-upload" className="flex flex-col items-center justify-center w-52 h-52 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 border-2 border-dashed border-gray-400" >
                                    {profilePreview ? (
                                        <img src={profilePreview} alt="Profile preview" className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <div className="text-center mt-[5%]">
                                            <span className="block text-sm text-gray-500">อัพโหลดภาพโปรไฟล์</span>
                                        </div>
                                    )}
                                    </label>
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                </div>
                            <div></div>
                        </>
                    )
                }
                </div>
            </div>
        </form>
    );
} 
export default signUser
