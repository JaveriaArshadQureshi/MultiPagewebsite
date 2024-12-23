import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black text-white w-auto h-[500px] max-sm:h-[1000px]  max-sm:mt-[200px] flex  justify-center items-center'>
      <div className='w-[85%]'>
        <div className='max-sm:flex-col md:flex  md:gap-[150px] justify-center items-center'>
            
            {/* first column */}
            <div className='p-0 m-0 mb-10'>
              <h1 className='text-white font-bold text-[15px] mb-4 md:mb-10'>CATEGORIES</h1>
              <ul className='text-gray-400 mt-5 space-y-3 '>
                <li>
                  Women
                </li>
                <li>
                  Men
                </li>
                <li>
                  Shoes
                </li>
                <li>
                  Watches
                </li>
              </ul>
            </div>

          {/* second column */}
            <div className='p-0 m-0 mb-10'>
              <h1 className='text-white font-bold text-[15px] mb-4 md:mb-10'>HELP</h1>
              <ul className='text-gray-400 mt-5 space-y-3'>
                <li>
                  Track Orders
                </li>
                <li>
                  Returns
                </li>
                <li>
                  Shipping
                </li>
                <li>
                  FAQs
                </li>
              </ul>
            </div>

            {/* Third column */}

            <div className='mb-10'>
            <h1 className='text-white font-bold text-[15px] mb-4 md:mb-10'>GET IN TOUCH</h1>
            <p className='text-gray-400'>Any questions? Let us know in store at 8th <br/> floor, 379 Hudson St, New York, NY 10018 or <br/> call us on (+1) 96 716 6879</p>
            <div className='flex gap-4 mt-10 text-gray-400'>
            <Link href="#"><FaFacebookF className='h-4 w-4 ' /></Link>
            <Link href="#"><FaPinterestP className='h-4 w-4 ' /></Link>
            <Link href="#"><FaInstagram className='h-5 w-4 ' /></Link>
            </div>
            </div>

            {/* fourth column */}
            <div>
            <h1 className='text-white font-bold text-[15px] mb-4 md:mb-10'>NEWSLETTER</h1>
            <input className='bg-black  mb-10'  placeholder='email@example.com'></input>
            <br/>
            <button className='bg-[#717fe0] font-bold text-white rounded-full py-3 px-12 mt-5  hover:bg-white hover:text-[#717fe0]'>SUBSCRIBE</button>
            </div>
            </div>

            <div className='flex max-sm:hidden justify-center text-gray-400 mt-[150px]'>Copyright &copy; 2024 All rights reserved | Made with <span className='px-2 text-[18px]'>&#x2661;</span> by <Link href={'https://colorlib.com/'} className='text-blue-500 px-2'> Colorlib </Link> & distributed by  <Link  href={"https://themewagon.com/"} className='text-blue-500 px-2'>ThemeWagon</Link></div>
            
            </div>
    </div>
  )
}

export default Footer