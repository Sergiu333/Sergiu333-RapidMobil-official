import Image from "next/image";
import Link from "next/link";

const CreateArt = () => {
    return (
        <div className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] pt-[70px] lg:pt-[70px] 2xl:pt-[200px]">
            <div
                className="flex lg:grid flex-col grid-cols-2 place-content-center items-center gap-[30px] lg:gap-[50px] 2xl:gap-[75px]">
                <div className="flex flex-col gap-2.5 2xl:gap-[45px]">
                    <div
                        className="text-[22px] 2xl:text-[50px] leading-[30px] font-bold 2xl:font-normal 2xl:leading-[62px] tracking-[0.02em] text-[#292F36]">
                        Crearea mobilierului perfect pentru casa ta - <span
                        className="font-bold">Mobilă la comandă</span>
                    </div>
                    <div
                        className="text-[18px] 2xl:text-[22px] leading-[22px] 2xl:leading-[33px] tracking-[0.01em] text-[#4D5053]">
                        Mobilă la comandă, suntem dedicați creerii mobilierului personalizat pentru a se potrivi
                        nevoilor și gusturilor fiecărui client. De la mobilierul de living, la dulapuri pentru dormitor
                        și birou. Sună acum la numărul de telefon afișat mai jos.
                    </div>
                    <div className="flex flex-row gap-[15px] items-center">
                        <Link href="tel://+37368069937">
                            <div className="hidden 2xl:block">
                                <Image src="/call-icon.svg" alt="icon call" width={93} height={93}/>
                            </div>
                            <div className="block 2xl:hidden">
                                <Image src="/call-icon.svg" alt="icon call" width={50} height={50}/>
                            </div>
                        </Link>
                        <Link href="tel://+37368069937">
                            <div className="flex flex-col tracking-[0.01em]">
                                <div
                                    className="font-bold text-[18px] 2xl:text-[24px] leading-[22px] 2xl:leading-[36px] text-[#4D5053]">
                                    +373 68 069 937
                                </div>
                                <div className="text-[22px] leading-[33px]"><span
                                    className="font-semibold">Click</span> pentru apel
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link href="/project">
                        <button
                            className="bg-[#292F36] py-4 px-6 2xl:py-[26px] 2xl:px-[48px] rounded-[18px] w-fit text-white flex flex-row gap-5 flex items-center justify-center">
                            <div
                                className="text-[12px] leading-[18px] lg:text-[18px] lg:leading-[22px] tracking-2 font-semibold">
                                Galerie foto
                            </div>
                            <Image src="/arrow.svg" alt="arrow for button" width={25} height={23}/>
                        </button>
                    </Link>
                </div>
                <div
                    className="relative w-full h-[100vw] lg:h-[41vw] rounded-tr-[55%] rounded-bl-[20%] overflow-hidden">
                    <Image src="/Imagebanner.jpg" alt="photo banner" layout="fill" objectFit="cover" placeholder="blur"
                           blurDataURL="/Imagebanner.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default CreateArt;
