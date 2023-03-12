import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const routes = [
        {
            url: '/',
            text: 'Acasă',
        },
        {
            url: '/project',
            text: 'Proiecte',
        },
        {
            url: '/contact',
            text: 'Contacte',
        },
    ];
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div
                className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] pt-[70px] lg:pt-[70px] 2xl:pt-[150px] pb-14">
                <div
                    className="grid 3xl:flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-row justify-between gap-10 place-content-around">
                    <div className="flex flex-col gap-[31px]">
                        <Link href="/">
                            <Image src="/logo-rapid-mobil.png" alt="logo" width={202} height={206} objectFit="cover"
                                   placeholder="blur"
                                   blurDataURL="/logo-rapid-mobil.png" />
                        </Link>
                        <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">
                            RapidMobil - mobilă personalizată rapid și ușor pentru casa ta.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-10 items-center">
                                <div className="flex items-center justify-center text-[30px]">1)</div>
                                <Link href="https://www.facebook.com/rapidmobil.md?mibextid=ZbWKwL" target="_blank">
                                    <Image src="/facebook.svg" alt="facebook" width={24} height={44}/>
                                </Link>
                                <Link href="https://www.instagram.com/rapidmobil.md_068069937/" target="_blank">
                                    <Image src="/instagram.svg" alt="instagram" width={44} height={44}/>
                                </Link>
                                <Link href="https://ok.ru/profile/554841433706" target="_blank">
                                    <Image src="/ok_ru.png" alt="instagram" width={44} height={44}/>
                                </Link>
                                <Link href="https://www.tiktok.com/@mobilalacomanda0?_t=8aLGTuGkzsk&_r=1" target="_blank">
                                    <Image src="/tik-tok.png" alt="instagram" width={40} height={40}/>
                                </Link>
                            </div>
                            <div className="flex flex-row gap-10 items-center">
                                <div className="flex items-center justify-center text-[30px]">2)</div>
                                <Link href="https://www.facebook.com/mobila.lacomanda.5817?mibextid=ZbWKwL" target="_blank">
                                    <Image src="/facebook.svg" alt="facebook" width={24} height={44}/>
                                </Link>
                                <Link href="https://www.instagram.com/mobila.lacomanda/" target="_blank">
                                    <Image src="/instagram.svg" alt="instagram" width={44} height={44}/>
                                </Link>
                                <Link href="https://ok.ru/profile/554841433706" target="_blank">
                                    <Image src="/ok_ru.png" alt="instagram" width={44} height={44}/>
                                </Link>
                                <Link href="https://www.tiktok.com/@mobila069532892?_t=8aLGatDqAEg&_r=1" target="_blank">
                                    <Image src="/tik-tok.png" alt="instagram" width={40} height={40}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex flex-col gap-[9px]">
                        <div className="font-bold text-[25px] leading-[31px] text-[#292F36]">Pagini</div>
                        {routes.map(({url, text}, index) => {
                            return (
                                <Link href={`${url}`} key={`${index}`}>
                                    <div
                                        className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">{text}</div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="flex flex flex-col gap-[9px]">
                        <div className="font-bold text-[25px] leading-[31px] text-[#292F36]">Orar</div>
                        <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">Lu-Vi:
                            09:00–18:00
                        </div>
                        <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">Sâm:
                            09:00–14:00
                        </div>
                        <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">Dum: Închis
                        </div>
                    </div>
                    <div className="flex flex flex-col gap-[9px]">
                        <div className="font-bold text-[25px] leading-[31px] text-[#292F36]" id="contacte">Contact</div>
                        <Link
                            href="https://s9.ro/1r40"
                            target="_blank"
                        >
                            <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">
                                Hincesti Hwy 61, Chișinău, Moldova
                            </div>
                        </Link>
                        <Link href="tel://+37368069937">
                            <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">
                                +373 68 069 937
                            </div>
                        </Link>
                        <Link href="tel://+37369532892">
                            <div className="text-[#4D5053] text-[22px] leading-[33px] font-light tracking-1">
                                +373 69 532 892
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="flex justify-center items-center text-[22px] leading-[33px] tracking-1 p-4 border-t border-black">
                © {currentYear} &#34;RapidMobil&#34; - Toate Drepturile Rezervate
            </div>
        </div>
    )
}

export default Footer;
