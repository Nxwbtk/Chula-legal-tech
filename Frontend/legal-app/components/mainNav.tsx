"use client";

import * as React from 'react';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Bell, Clock, MessageCircle, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const MainNav = () => {

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
        <nav className='w-full border-gray-200 bg-mainColor fixed top-0 z-50'>
            <div className='mx-auto max-w-full px-4 py-2'>
                <div className='flex items-center justify-between'>
                    <div className='hidden md:flex items-center flex-grow gap-4'>
                        <Link href={'/'} className='flex items-center flex-shrink-0'>
                            <div className='text-white px-4 py-2'>
                                <b className="text-4xl text-pink-500">BLACK</b>
                                <b className="text-4xl text-black">PINK</b>
                            </div>
                        </Link>
                        <div className={`flex-grow max-w-xl
                            ${isVisible ? 'hidden' : 'static'}`}>
                            <input
                                type="text"
                                placeholder="Search"
                                className='w-full p-2 rounded-md'
                            />
                        </div>
                    </div>
                    <div className='hidden md:flex items-center gap-4'>
                        <button className='bg-white outline-none text-mainColor px-4 py-1.5 rounded-md hover:bg-gray-200 transition-colors'>
                            ตรวจสอบเอกสาร
                        </button>
                        <div className='flex gap-4'>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className='text-white hover:text-gray-200'>
                                        <Clock className='h-5 w-5' />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[300px]">
                                    <h3 className="px-2 py-1.5 text-sm font-semibold">ประวัติการทำงาน</h3>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className='text-white hover:text-gray-200'>
                                        <Bell className='w-5 h-5' />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end' className='w-[300px]'>
                                    <h3 className='px-2 py-1.5 text-sm font-semibold'>การแจ้งเตือน</h3>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href={'/'}>
                                            <button className='text-white hover:text-gray-200 mt-1'>
                                                <MessageCircle className='w-5 h-5' />
                                            </button>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="hidden md:block">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center">
                                        <div className="flex items-center">
                                            <img
                                                className="rounded-full w-8 h-8 object-cover border-2 border-white"
                                            />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-[200px] mt-2">
                                        <DropdownMenuItem>
                                            <div className="px-3 py-2 text-sm text-gray-600">
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/profile" className="w-full">โปรไฟล์</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/settings" className="w-full">ตั้งค่า</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem >
                                            ออกจากระบบ
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden ml-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-pink-500">BLACK</span>
                            <span className="text-xl font-bold">PINK</span>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className='text-white' size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-[200px]">
                                <DropdownMenuItem>
                                    <Link href="/">หน้าแรก</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/consult">ปรึกษากฎหมาย</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/hire">ว่าจ้างทนาย</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/documents">เอกสารกฎหมาย</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about">เกี่ยวกับเรา</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/contact">ติดต่อ</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default MainNav