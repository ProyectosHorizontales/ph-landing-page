//Navbar.jsx
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className=' flex flex-row justify-between p-3 md:px32 bg-[#222222] text-[#ddddda] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>
                    <a href="#home" className=' font-semibold text-3xl p-1 cursor-pointer'>
                        &gt;_PH
                    </a>
                </div>
                <nav className=' hidden md:flex gap-5 font-medium p-1 text-1xl cursor-pointer'>
                    <a href="#products" className=' hover:text-[#FEFFFD] rounded-sm transition-all cursor-pointer'>
                        Productos
                    </a>
                    <a href="#contact" className=' hover:text-[#FEFFFD] rounded-sm transition-all cursor-pointer'>
                        Contacto
                    </a>
                    <a href="#users" className=' hover:text-[#FEFFFD] rounded-sm transition-all cursor-pointer'>
                        Usuarios
                    </a>
                </nav>
                <div className=' flex md:hidden' onClick={handleChange}>
                    <div className=' p-2'>
                        <AiOutlineMenu size={22} />
                    </div>
                </div>
            </div>
            <div className={`${menu ? 'translate-x-0' : '-translate-x-full'
                } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <a href="#products" className=' text-[#424242] hover:bg-[#424242] hover:text-[#FEFFFD] rounded-sm transition-all cursor-pointer'>
                    Productos
                </a>
                <a href="#contact" className=' text-[#424242] hover:bg-[#424242] hover:text-[#FEFFFD] rounded-sm transition-all cursor-pointer'>
                    Contacto
                </a>
            </div>
        </div>
    )
}