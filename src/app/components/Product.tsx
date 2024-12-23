import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Product = () => {
  return (
    <div className='w-full h-[4000px] md:h-[2200px]   ' id='product'>
        <div className='w-[95%] h-full pt-[100px] ml-8  md:pl-[100px]'>
            {/* Heading */}
           <span className='font-nav font-bold text-[34px] md:text-[36px]'> PRODUCT OVERVIEW</span>
           <div>
            <ul className='flex flex-wrap md:flex  gap-8 mt-5 '>
                <li className='font-nav font-medium underline'>
                    <Link href={"#"}> All Products</Link>
                </li>
                <li className='font-nav font-medium  text-gray-500 hover:text-black hover:underline '>
                    <Link href={"#"}> Womens</Link>
                </li><li className='font-nav font-medium text-gray-500  hover:text-black hover:underline'>
                    <Link href={"#"}> Men </Link>
                </li><li className='font-nav font-medium  text-gray-500 hover:text-black hover:underline'>
                    <Link href={"#"}> Bag</Link>
                </li><li className='font-nav font-medium  text-gray-500 hover:text-black hover:underline'>
                    <Link href={"#"}> Shoes</Link>
                </li><li className='font-nav font-medium  text-gray-500 hover:text-black hover:underline'>
                    <Link href={"#"}> Watches </Link>
                </li>
            </ul>
            
            
{/* products Women */}
            <div className='grid-cols-1 md:flex  pt-10 gap-8'>
                
                <div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-01.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500 '>Esprit Ruffle Shirt</span>
                    <h2>$16.64</h2>
                    
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-02.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Herschel supply</span>
                    <h2>$35.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-16.jpg"} alt={"Men shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Only Check Trouser</span>
                    <h2>$25.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-04.jpg"} alt={"Womens coat"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Classic Trench Coat</span>
                    <h2>$75.00</h2>
                </div>
                </div>
                
            </div>
           

            <div className='hidden md:flex pt-10 gap-8'>
                
                <div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-05.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Esprit Ruffle Shirt</span>
                    <h2>$16.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-07.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Herschel supply</span>
                    <h2>$35.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-08.jpg"} alt={"Men shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Only Check Trouser</span>
                    <h2>$25.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-10.jpg"} alt={"Womens coat"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Classic Trench Coat</span>
                    <h2>$75.00</h2>
                </div>
                </div>
                
            </div>
           


           

{/* products Men */}
           <div className='grid-cols-1 md:flex pt-10 gap-8'>
                
                <div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-11.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Esprit Ruffle Shirt</span>
                    <h2>$16.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-03.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Herschel supply</span>
                    <h2>$35.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-11.jpg"} alt={"Men shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Only Check Trouser</span>
                    <h2>$25.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-03.jpg"} alt={"Womens coat"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Classic Trench Coat</span>
                    <h2>$75.00</h2>
                </div>
                </div>
                
            </div>

            {/* Accessories */}
           
            <div className='hidden md:flex pt-10 gap-8'>
                
                <div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-06.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Esprit Ruffle Shirt</span>
                    <h2>$16.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-15.jpg"} alt={"Womens shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Herschel supply</span>
                    <h2>$35.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-09.jpg"} alt={"Men shirt"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Only Check Trouser</span>
                    <h2>$25.64</h2>
                </div>
                </div><div className='flex flex-col mb-10 md:mb-0'>
                <div className='w-[295] h-[363px]  '>
                    <Image src={"/product-12.jpg"} alt={"Womens coat"} width={295} height={363}/>
                </div>
                <div>
                    <span className='text-gray-500'>Classic Trench Coat</span>
                    <h2>$75.00</h2>
                </div>
                </div>
                
            </div>

            

            {/* button */}
            <div className='flex justify-center items-center mt-10 mr-10 md:mt-20'>
            <button className='text-black font-semibold bg-slate-200 hover:bg-black hover:text-white rounded-full py-3 px-12'>LOAD MORE</button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Product