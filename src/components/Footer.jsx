import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-white py-4 text-center text-sm w-full'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <div className='order-2 md:order-1'>
                        <p className='flex'>&copy; {currentYear}
                            <div className="ml-1 mr-1 flex items-center justify-center text-sm sm:text-sm lg:text-sm font-extrabold">
                                <span className="text-white italic -skew-x-6 transform">MLA</span>
                                <span className="text-lime-400  skew-x-6 transform">Pass</span>
                            </div>. All rights reserved.</p>
                        <p className='mt-1'>
                            Crafted with <span className='text-red-500'>❤</span> by MLA.
                        </p>
                    </div>
                    <div className='order-1 md:order-2'>
                        <ul className='flex space-x-6'>
                            <li>
                                <a href='/privacy-policy' className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='/terms-of-service' className='hover:text-white transition-colors duration-300'>Terms of Service</a>
                            </li>
                            <li>
                                <a href='/contact' className='hover:text-white transition-colors duration-300'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
