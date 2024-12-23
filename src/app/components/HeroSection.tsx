import React from 'react';



const HeroSection = () => {
  return (
  <div >

{/* hero part */}
    <div className="bg-[url('/slide-01.jpg')] bg-no-repeat  flex justify-center  items-center bg-center h-[750px]  lg:h-[700px] ">
  <div className='flex  w-[95%] lg:w-[85%] mt-[200px]  items-center   justify-between'>
    <div className='flex flex-col  '>
      <div className='font-nav text- text-[20px] md:text-[30px] ' data-aos="fade-down">Womens Collection 2018</div>
      <div className='font-hero  text-[40px] md:text-[60px] font-bold mt-5 ' data-aos="fade-up"
     data-aos-duration="3000">NEW SEASON</div>
      <button data-aos="zoom-out" className='bg-[#717fe0] rounded-full text-white py-2 px-3 font-semibold font-nav  text-[12px] md:text-[15px] mt-6 mb:[50px] md:mb-[140px] w-[100px] md:w-[130px]  hover:bg-white hover:text-[#717fe0] '>SHOP NOW</button>
    </div>

    
  </div>
</div>

{/* banner section */}
<div id="features" className='flex flex-wrap  lg:flex-nowrap max-sm:gap-3 md:mt-10 ml-10 md:ml-[100px] w-[80%] lg:w-[85%] items-center justify-center  '>
     
    
      
      <div className='bg-[url("/banner-01.jpg")] bg-no-repeat  w-[320px] md:w-[320px] lg:w-[380px] h-[200px] md:h-[230px] lg:h-[270px] border-2  md:mr-10  '  > 
      <div className='pt-4 pl-5 font-nav font-bold text-[28px]'>Women</div>
      <div className='pb-[80px] md:pb-[180px] pl-5  text-gray-700'>Spring 2018</div>
      </div>

      <div className='bg-[url("/banner-02.jpg")] bg-no-repeat  w-[320px] md:w-[320px] lg:w-[380px] h-[200px] md:h-[230px] lg:h-[270px]  border-2  md:mr-10 ' >
      <div className='pt-4 pl-5 font-nav font-bold text-[28px] '>Men</div>
      <div className='pb-[80px] md:pb-[180px] pl-5 text-gray-700'>Spring 2018</div>
      </div>
      <div className='bg-[url("/banner-03.jpg")] bg-no-repeat  w-[320px] md:w-[320px] lg:w-[380px] h-[200px] md:h-[230px] lg:h-[270px]  border-2 md:mr-10  ' >
      <div className='pt-4 pl-5 font-nav font-bold text-[28px] '>Accessories</div>
      <div className='pb-[80px] md:pb-[180px] pl-5 text-gray-700'>New Trend</div>
      </div>
      </div>
      
      
    
</div>
  )
}

export default HeroSection