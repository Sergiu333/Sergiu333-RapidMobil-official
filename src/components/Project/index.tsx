import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/icons/Arrow-right";


const projects = [
    {
        title: 'Bucătarii',
        subtitle: 'Proiecte / Bucătarii',
        src: '/bucatarie/banner-3.jpg',
        alt: 'image',
        link: '/project?category=bucatarii',
    },
    {
        title: 'Living & Antreuri',
        subtitle: 'Proiecte / living & Antreuri',
        src: '/living/living-project.jpg',
        alt: 'image',
        link: '/project?category=livinguri',
    },
    {
        title: 'Birou',
        subtitle: 'Proiecte / birou',
        src: '/birou/birou-project.jpg',
        alt: 'image',
        link: '/project?category=birou',
    },
    {
        title: 'Dormitoare',
        subtitle: 'Proiecte / Dormitoare',
        src: '/dormitor/dormitor-project.jpg',
        alt: 'image',
        link: 'project?category=dormitor',
    },
    {
        title: 'Dulap',
        subtitle: 'Proiecte / dulap',
        src: '/dulap/dulap-project.jpg',
        alt: 'image',
        link: '/project?category=dulapuri',
    },
    {
        title: 'Antreu',
        subtitle: 'Proiecte / antreu',
        src: '/antreu/antreu-project.jpg',
        alt: 'image',
        link: '/project?category=antreuri',
    },
    {
        title: 'Cameră pentru copii',
        subtitle: 'Proiecte / Cameră pentru copii',
        src: '/cameraCopii/camera-copii-project.jpg',
        alt: 'image',
        link: '/project?category=copii',
    },
]

const Project = () => {
    return (
        <div className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] pt-[70px] lg:pt-[70px] 2xl:pt-[200px]">
            <div className="flex flex-col gap-[93px] justify-center">
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[40px] lg:text-[50px] leading-[62px] tracking-2 text-[#292F36] text-center">
                        Proiectele noastre
                    </div>
                    <div className="text-[22px] leading-[32px] tracking-1 text-[#4D5053] lg:text-center">
                        Descoperă cele mai noi și inspirate proiecte de mobilier personalizat pentru dormitor, living și
                        bucătarii prin urmărirea paginii noastre. Fii la curent cu cele mai recente tendințe și idei de
                        design interior, și descoperă modalități unice de a-ți transforma casa într-un spatiu
                        confortabil și personalizat. Abonează-te acum pentru a nu rata nicio noutate sau proiect
                        interesant!
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] 2xl:gap-[52px]">
                        {
                            projects.map(({title, subtitle, link, alt, src}, index) => {
                                return (
                                    <div className="flex flex-col gap-[24px] w-fit" key={`${index}`}>
                                        <Link href={link}>
                                            <Image src={src} alt={alt}
                                                   width={525} height={548} style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                aspectRatio: '16 / 11',
                                                width: '100%',
                                                height: 'auto',
                                            }}/>
                                        </Link>
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-col gap-[4px]">
                                                <div className="text-[25px] leading-[31px] tracking-2 text-[#292F36]">
                                                    {title}
                                                </div>
                                                <div className="text-[22px] leading-[33px] tracking-1 text-[#4D5053]">
                                                    {subtitle}
                                                </div>
                                            </div>
                                            <Link href={link} aria-label="link"
                                                  className="w-[70px] h-[70px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
                                                <div className="w-[12px] h-[22px] ml-1">
                                                    <ArrowRight/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
