import Image from 'next/legacy/image'
import React, {useEffect, useState} from 'react'
import Link from "next/link";

const Banner = () => {
    return(
      <div className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px]  flex flex-col relative mt-[70px] 2xl:mt-[150px]">
          <div className="absolute flex justify-start top-[15%] xl:top-[28%] px-8 lg:px-[56px] z-50 flex-col gap-[21px] ">
              <div className="text-[22px] font-bold lg:font-normal leading-[23px] lg:text-[50px] 2xl:text-[65px] lg:leading-[60px] 2xl:leading-[81px] text-white">
                  Mobilă personalizată <br className="hidden lg:block 3xxl:hidden"/> pentru casa ta
              </div>
              <div className="w-fit text-[18px] leading-[21px] lg:text-[22px] leading-[33px] tracking-[0.01em] text-white">
                  Personalizează-ți mobila alegând materiale, <br className=" hidden sm:block xl:hidden"/> culori și dimensiuni
              </div>
              <Link href="/project" className="w-fit">
                  <button className="bg-[#292F36] py-4 px-6 2xl:py-[26px] 2xl:px-[48px] rounded-[18px] w-fit text-white flex flex-row gap-5 items-center">
                      <div className="text-[12px] leading-[18px] lg:text-[18px] lg:leading-[22px] tracking-2 font-semibold">Galerie foto</div>
                      <Image src="/arrow.svg" alt="arrow for button" width={25} height={23}/>
                  </button>
              </Link>
          </div>
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-[42vw] overflow-hidden rounded-[8%] lg:rounded-[70px]">
              <Image
                  src="/banner-3.jpg"
                  alt="image for banner"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/banner-3.jpg"
              />
          </div>
      </div>
  )
}

export default Banner;

