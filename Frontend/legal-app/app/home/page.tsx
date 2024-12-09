"use client";

import { useState } from 'react';
import MainNav from '../../components/mainNav';
import SubNav from '../../components/subNav';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Users, ShieldCheck, FileText, FolderTree } from 'lucide-react';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

const HomePage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="min-h-screen mb-12">
                <MainNav />
                <SubNav />
                <main className="flex justify-center items-center h-full">
                    <div className='flex flex-col justify-start items-start w-3/4 space-y-3 '>
                        <h1 className='text-2xl font-semibold text-gray-600 text-left'>
                            ทำไมต้องเลือก [ ชื่อแอพ ]?
                        </h1>
                        <h1 className='text-2xl font-semibold text-mainColor text-left'>
                            เพราะเราเปลี่ยนทุกปัญหากฎหมายของคุณให้ได้รับการแก้ไข ด้วยทนายมืออาชีพที่คุณไว้ใจได้!
                        </h1>
                        <div className='flex flex-row w-full gap-5 justify-center items-center'>
                            <Card className='w-full'>
                                <CardHeader className='text-mainColor'>
                                    <Users className='w-5 h-5' />
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className='text-md'>ทนายคุณภาพที่คุณมั่นใจได้</p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>ทนายทุกท่านผ่านการคัดเลือกและยืนยันตัวตน</p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>พร้อมให้คำปรึกษาและช่วยแก้ไขปัญหาได้อย่างมืออาชีพ</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className='w-full'>
                                <CardHeader className='text-mainColor'>
                                    <ShieldCheck className='w-5 h-5' />
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className='text-md'>
                                            ปลอดภัยทุกขั้นตอนการจ้างงาน
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            มั่นใจได้ว่าทุกการจ้างงานของคุณจะได้รับการ
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            ดูแลและความคุ้มครองจนจบกระบวนการ
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className='w-full'>
                                <CardHeader className='text-mainColor'>
                                    <FileText className='w-5 h-5' />
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className='text-md'>
                                            บริการตรวจสอบลิขสิทธิ์อย่างครบวงจร
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            ทีมผู้เชี่ยวชาญพร้อมตรวจสอบและให้คำแนะนำ
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            เกี่ยวกับลิขสิทธิ์ของผลงานในทุกขั้นตอน
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold text-gray-600'>
                                อธิบายวิธีตรวจสอบลิขสิทธิ์ (ขั้นตอน)
                            </h1>
                        </div>
                        <div className='grid grid-rows-2 grid-cols-2 w-full gap-8'>
                            <div>
                                <p className='text-xl font-semibold text-gray-700'>1. กรอกข้อมูลคำร้องขอลิขสิทธิ์</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold text-gray-700'>2. เลือกประเภทผลงานและรายละเอียดเพิ่มเติม</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold text-gray-700'>3. รวจสอบข้อมูลคำร้อง</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold text-gray-700'>4. ยืนยันคำร้องขอลิขสิทธิ์</p>
                            </div>
                        </div>
                        <div className='flex flex-row w-full gap-5 justify-between items-center content-end'>
                            <Card className='content-end w-[400px] bg-[url("../img/home-page-card-1.png")] h-[450px] bg-cover bg-center'>
                                <CardContent className='items-self-end'>
                                    <Button className='bg-white outline-none text-mainColor hover:bg-mainColor hover:text-white'>
                                        ตรวจสอบลิขสิทธิ์
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className='w-[400px] h-[450px] bg-cover bg-center bg-[url("../img/home-page-card-2.png")]'>
                            </Card>
                            <Card className='w-[400px] h-[450px] bg-cover bg-center bg-[url("../img/home-page-card-3.png")]'>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;