
import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import eyeClose from '../assets/eyeClose.svg';
import eyeOpen from '../assets/eyeOpen.svg';

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isFirstLoad = useRef(true);
    const [formData, setFormData] = useState({
        website: '',
        email: '',
        username: '',
        password: ''
    }); const [editIndex, setEditIndex] = useState(null);
 
    // Saving credentials array to localStorage 
    const saveToLocalStorage = (data) => {
        const credentials = JSON.parse(localStorage.getItem("credentials")) || [];
        if (editIndex !== null) {
            credentials[editIndex] = data;
        } else {
            credentials.push(data);
        }
        localStorage.setItem("credentials", JSON.stringify(credentials));
    }
    useEffect(() => {
        // Checking if editing a credential
        const idx = localStorage.getItem("editCredentialIndex");
        if (idx !== null) {
            const credentials = JSON.parse(localStorage.getItem("credentials")) || [];
            if (credentials[idx]) {
                setFormData(credentials[idx]);
                setEditIndex(Number(idx));
            }
            localStorage.removeItem("editCredentialIndex");
        }
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSave();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [formData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSave = () => {
        if (!formData.website && !formData.email && !formData.username && !formData.password) {
            alert("Please fill at least one field.");
            return;
        }
        saveToLocalStorage(formData);
        setFormData({
            website: '',
            email: '',
            username: '',
            password: ''
        });
        setEditIndex(null);
    }


    const eyeIconRef = useRef(null);
    const openCloseEye = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };



    return (
        <div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>

            <div className="relative  ">

                <div className='container mx-auto flex flex-col text-white lg:max-w-3xl md:max-w-full w-full relative z-10 p-4'>
                    <h1 className='flex text-center justify-center items-center text-3xl font-black text-white border-b-4 border-lime-400 pb-2 md:text-4xl '>
                        Centralized Credential Management
                    </h1>

                    <div className='flex flex-col gap-5 mt-10 md:mt-15 mx-auto items-center justify-center w-full max-w-md'>
                        <div className='flex flex-col w-full border border-gray-700 rounded-md py-2 px-4 hover:bg-black hover:border-lime-500 focus-within:scale-108 focus-within:border-lime-500 transition-all duration-150'>
                            <label htmlFor="website" className="text-gray-300 text-sm mb-1">Website</label>
                            <input value={formData.website} name='website' onChange={handleInputChange} id="website" className='outline-none bg-transparent text-white px-1 py-0.5' type="text" placeholder='https://' />
                        </div>
                        <div className='flex flex-col w-full border border-gray-700 rounded-md py-2 px-4 hover:bg-black hover:border-lime-500 focus-within:scale-108 focus-within:border-lime-500 transition-all duration-150'>
                            <label htmlFor="email" className="text-gray-300 w-fit text-sm mb-1">Email</label>
                            <input value={formData.email} name='email' onChange={handleInputChange} id="email" className='outline-none w-[95%] bg-transparent text-white px-1 py-0.5' type="text" placeholder='Enter email' />
                        </div>
                        <div className='flex flex-col w-full border border-gray-700 rounded-md py-2 px-4 hover:bg-black hover:border-lime-500 focus-within:scale-108 focus-within:border-lime-500 transition-all duration-150'>
                            <label htmlFor="username" className="text-gray-300 text-sm mb-1">Username</label>
                            <input value={formData.username} name='username' onChange={handleInputChange} id="username" className='outline-none bg-transparent text-white px-1 py-0.5' type="text" placeholder='Enter username' />
                        </div>
                        <div className='flex justify-center items-center gap-2 w-full border border-gray-700 rounded-md py-2 px-4 hover:bg-black hover:border-lime-500 focus-within:scale-108 focus-within:border-lime-500 transition-all duration-150'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="password" className="text-gray-300 text-sm mb-1">Password</label>
                                <input value={formData.password} name='password' onChange={handleInputChange} id="password" className='outline-none w-[92%] bg-transparent text-white px-1 py-0.5'
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    autoComplete="new-password" />
                            </div>
                            <span
                                className='relative flex items-center justify-center cursor-pointer w-fit'
                                style={{ width: '24px', height: '24px' }}
                                onClick={openCloseEye}>
                                <img
                                    src={eyeClose}
                                    alt="Eye Close Icon"
                                    className={`absolute w-full h-full transition-opacity duration-300 ${showPassword ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <img
                                    src={eyeOpen}
                                    alt="Eye Open Icon"
                                    className={`absolute w-full h-full transition-opacity duration-300 ${showPassword ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </span>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button onClick={handleSave} className='bg-lime-600 text-black font-semibold cursor-pointer py-2 px-6 rounded-full hover:scale-105 focus-within:scale-105 hover:bg-lime-500 hover:text-black transition-all duration-200'>
                                {editIndex !== null ? 'Save' : 'Add Credential'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager;