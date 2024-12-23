
import Link from 'next/link';
import React from 'react';
import { MagnifyingGlassIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
import { Menu} from 'lucide-react';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from "@/components/ui/sheet"
 

const NavBar = () => {
//  const [ isMenuOpen, setIsMenuOpen] = useState(false);
//  const toggleMenu = () => {
//    setIsMenuOpen(!isMenuOpen);//toggle menu open/close
//  };

//  const closeMenu = () => {
//    setIsMenuOpen(false);//close the menu
//  };

  return (
    <nav>
    
        <div className='bg-white fixed max-w-full max-sm:w-[375px] flex max-sm:justify-between justify-center top-0 left-0 w-full h-[80px]  items-center  px-10 shadow-md z-50'>
            {/* left section logo */}
            
              <div className='text-[25px] flex '>
               <span className='font-bold'>COZA </span> STORE
            </div>

            {/* responsive */}
            <div className=' flex md:hidden'>
               <div className="mt-1 flex gap-1">
               <button >< MagnifyingGlassIcon className='h-6 w-6 ' /></button>
            <button >< ShoppingCartIcon className='h-6 w-6' /></button>
            <button >< HeartIcon className='h-6 w-6' /></button>
               </div>
               <div className='pl-2'>
               <Sheet>
  <SheetTrigger>
   <button>< Menu className='size{20px} mt-3 ' /></button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><div className='text-[25px] flex '>
               <span className='font-bold'>COZA </span> STORE
            </div></SheetTitle>
      <SheetDescription>
      <ul className=" flex-col gap-3 font-display text-start  font-bold text-[15px]">
                <li>
                </li>
                <li>
                   <Link href={"/"} className='hover:text-[#717fe0] '>Home</Link>
                </li>
                <li>
                   <Link href={"#product"} className='hover:text-[#717fe0] '>Shop</Link>
                </li><li>
                </li>
                   <Link href={"#features"} className='hover:text-[#717fe0] '>Features<sup className= 'bg-pink-600 rounded  px-[2px] py-[2px] text-white text-[8px]'>HOT</sup></Link>
                <li>
                   <Link href={"/blog"} className='hover:text-[#717fe0] '>Blog</Link>
                </li>
                <li>
                   <Link href={"/about"} className='hover:text-[#717fe0] '>About</Link>
                   </li>
                   <li>
                   <Link href={"/contact"} className='hover:text-[#717fe0] '>Contact</Link>
                </li>
              </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
               </div>

            </div>

            {/* mid section */}
            <div className='m-20 max-sm:hidden  '>
              <ul className='flex gap-4  font-display font-bold text-[15px]'>
                <li>
                </li>
                <li>
                   <Link href={"/"} className='hover:text-[#717fe0] '>Home</Link>
                </li>
                <li>
                   <Link href={"#product"} className='hover:text-[#717fe0] '>Shop</Link>
                </li><li>
                </li>
                   <Link href={"#features"} className='hover:text-[#717fe0] '>Features<sup className= 'bg-pink-600 rounded  px-[2px] py-[2px] text-white text-[8px]'>HOT</sup></Link>
                <li>
                   <Link href={"/blog"} className='hover:text-[#717fe0] '>Blog</Link>
                </li>
                <li>
                   <Link href={"/about"} className='hover:text-[#717fe0] '>About</Link>
                   </li>
                   <li>
                   <Link href={"/contact"} className='hover:text-[#717fe0] '>Contact</Link>
                </li>
              </ul>
            </div>
            {/* right section */}
            
            <div className='mt-1 flex gap-6 ml-[340px] max-sm:hidden '>
            
            <button >< MagnifyingGlassIcon className='h-6 w-6 ' /></button>
            <button >< ShoppingCartIcon className='h-6 w-6' /></button>
            <button >< HeartIcon className='h-6 w-6' /></button>
            
            </div>

            
        </div>
    
    
    </nav>
  )
}

export default NavBar