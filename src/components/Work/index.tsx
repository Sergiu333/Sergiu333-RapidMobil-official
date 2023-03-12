import Image from "next/image";
import Link from "next/link";

const Work = () => {
    const items=[
        {
            title: 'Dormitor confortabil',
            description: 'Descoperiți cele mai recente modele de paturi, dulapuri și comode pentru un dormitor confortabil și stilat.',
            link: '/project?category=dormitor'
        },
        {
            title: 'Living modern',
            description: 'Adăugați un strop de stil casei dumneavoastră cu mobilierul nostru modern de living, de la canapele și fotolii, la mese de cafea și dulapuri TV.',
            link: '/project?category=livinguri'
        },
        {
            title: 'Bucătăria ta modernă',
            description: 'Descoperiți gama noastră de mobilier de bucătărie, care include dulapuri, rafturi, mese și scaune.',
            link: '/project?category=bucatarii'
        },

    ]
  return (
      <div className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] xl:px-[300px] 2xl:px-[360px] pt-20 md:pt-[100px] 2xl:pt-[200px]">
          <div className="grid lg:flex flex-row grid-rows-3 gap-[42px]">
              {items.map(({title, description, link}, index)=>{
                 return(
                     <div className="flex flex-col gap-[20px] 2xl:gap-[50px] -mt-6" key={`${index}`}>
                         <div className="flex flex-col md:gap-[10px] 2xl:gap-[20px] text-center">
                             <div className="text-[18px] 2xl:text-[25px] leading-[21px] 2xl:leading-[31px] text-[#292F36] font-semibold">{title}</div>
                             <div className="text-[16px] 2xl:text-[22px] leading-[23px] 2xl:leading-[33px] text-[#4D5053] tracking-[0.01em]">{description}</div>
                         </div>
                         <Link href={link}>
                             <div className="text-[18px] leading-[22px] tracking-[0.02em] font-semibold flex flex-row gap-[12px] justify-center">
                                 <div>Mai mult</div>
                                 <Image src="/arrow.svg" alt="arrow for button" width={16} height={14}  objectFit="cover"/>
                             </div>
                         </Link>
                         <hr className="border-black block lg:hidden mt-6"/>
                     </div>
                 )
              })}
          </div>
      </div>
  )
}

export default Work;
