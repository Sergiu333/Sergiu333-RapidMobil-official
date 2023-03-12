import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Shop from "../../icons/Shop";
import category from "../../constants/category";
import items from "../../constants/items";

// @ts-ignore
const Modal = ( {imageUrl, onClose, children, subtitle} ) => {
    return (
        <div
            className="fixed top-0 left-0 bottom-0 w-full h-full flex justify-center items-center bg-black/[.8]"
            onClick={onClose}
        >
            <div className="w-full h-[30px] absolute z-[99] bottom-0 flex justify-center items-center bg-[#181A1F] opacity-50 text-white uppercase">{subtitle}</div>
            <button
                className="bg-black text-white p-2 w-[35px] h-[35px] absolute right-[5%] md:right-[25%] top-[20%] md:top-[5%] z-[9999] flex justify-center items-center opacity-30 border border-red-800 text-red-800"
            >
                X
            </button>
            <div
                className="relative w-[90vw] lg:w-[50vw] h-full"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="hidden lg:block">
                    <Image src={imageUrl} alt="image url" layout="fill" objectFit="cover" />
                </div>
                <div className="block lg:hidden">
                    <Image src={imageUrl} alt="image url" layout="fill" objectFit="contain" />
                </div>
                {children}
            </div>
        </div>
    );
};

const Test = () => {
    const [activeCategory, setActiveCategory] = useState("bucatarii");
    const bannerBG = [
        {
            url: "/living-bg.jpg",
            category: "dormitor",
        },
        {
            url: "/living-bg.jpg",
            category: "dulapuri",
        },
        {
            url: "/living-bg.jpg",
            category: "livinguri",
        },
        {
            url: "/living-bg.jpg",
            category: "bucatarii",
        },{
            url: "/living-bg.jpg",
            id: "antreuri",
        },{
            url: "/living-bg.jpg",
            id: "copii",
        },{
            url: "/living-bg.jpg",
            id: "birou",
        },
    ];

    const filteredItems = activeCategory ? items.filter((item) => item.category === activeCategory) : items;

    const handleCategoryClick = (category:any) => {
        setActiveCategory(category);
        setCurrentIndex(null);
        // add the following line to update the URL when a category is selected
        window.history.pushState({}, "", `?category=${category}`);
        setActiveCategory(category);

    };
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get("category");
        if (categoryFromUrl) {
            setActiveCategory(categoryFromUrl);
        }
    }, []);

    const [currentIndex, setCurrentIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (index:any) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            // @ts-ignore
            setCurrentIndex(filteredItems.length - 1);
        } else {
            // @ts-ignore
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        // @ts-ignore
        if (currentIndex < filteredItems.length - 1) {
            // @ts-ignore
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentIndex(null);
    };



    return (
        <div>
            <div>
                <div className="w-full h-[200px] lg:h-[356px] mt-[70px] 2xl:mt-[150px] relative flex justify-center">
                    {bannerBG.map(({url, category}, index) => {
                        return (
                            <div key={index}>
                                    <Image src="/living-bg.jpg" alt="image banner" layout="fill" objectFit="cover"
                                           />
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    <div
                        className="bg-white rounded-t-[37px] z-10 -mt-[100px] lg:-mt-[178px] py-[15px] lg:py-[41px] px-[30px] lg:px-[125px] text-center">
                        <div className="flex flex-col">
                            <div
                                className="text-[30px] lg:text-[50px] leading-[40px] lg:leading-[62px] text-[#292F36]">
                                Comenzi anterioare
                            </div>
                            <div
                                className="text-[18px] lg:text-[22px] leading-[22px] lg:leading-[33px] tracking-1 text-[#4D5053]">
                                Acasă / Proiecte
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] flex flex-col relative mt-[50px] 2xl:mt-[70px]">
                    <div className="flex justify-center">
                        <div className="overflow-auto scroll-hidden">
                            <div className="flex flex-row border rounded-[20px] border-[#CDA274] w-fit">
                                {category.map(({title, id}, index) => {
                                    const isActive = activeCategory === id;
                                    return (
                                        <div key={`${index}`}>
                                            <button style={{
                                                backgroundColor: isActive ? "#cda274" : "white",
                                                color: isActive ? "white" : "black"
                                            }}
                                                    className={`px-6 lg:px-[66px] py-4 lg:py-[26px] text-[12px] leading-[18px] lg:text-[18px]
                                             lg:leading-[22px] tracking-2 bg-white rounded-[18px] whitespace-nowrap ${isActive ? 'bg-[#cda274] text-white' : ''}`}
                                                    onClick={() => handleCategoryClick(id)}
                                            >
                                                {title}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid  lg:grid-cols-2 2xl:grid-cols-3 gap-10">
                        {filteredItems.map(({title, imageUrl, description}, index) => (
                            <div key={`${index} flex flex-col gap-6`} >
                                <div
                                    className="relative w-full h-[280px] md:h-[400px] lg:h-[450px] xl:h-[500px] mt-[50px]" onClick={() => handleCardClick(index)}>
                                    <Image
                                        src={imageUrl}
                                        alt={title}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>
                                <div className="flex flex-row justify-between mt-4 lg:mt-8">
                                    <div className="flex flex-col gap-[4px] lg:gap-[6px]">
                                        <div
                                            className="text-[18px] lg:text-[25px] leading-[22px] lg:leading-[31px] tracking-2 text-[#292F36]">
                                            {title}
                                        </div>
                                        <div
                                            className="text-[12px] lg:text-[22px] leading-[18px] lg:leading-[33px] tracking-1 text-[#4D5053]">
                                            {description}
                                        </div>
                                    </div>
                                    <Link href="tel://+37368069937" aria-label="link"  className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
                                            {/*<Image src="/call-icon.svg" alt="icon call" width={70} height={70}/>*/}
                                        <div className="bg-[#F4F0EC] rounded-full flex justify-center items-center">
                                            <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.2866 8.62115L9.16664 9.74115C4.83334 9.1995 4.21249 4.83336 4.21249 4.83336L5.33249 3.71335C5.48244 3.56346 5.5851 3.37287 5.62776 3.16518C5.67043 2.9575 5.65121 2.74187 5.57249 2.54501L5.02684 1.18101C4.94643 0.979973 4.80763 0.807648 4.62834 0.686262C4.44905 0.564877 4.23751 0.500001 4.02099 0.500005H1.58459C1.43198 0.499537 1.28099 0.531389 1.14158 0.593465C1.00216 0.655541 0.877462 0.746434 0.775696 0.860164C0.67393 0.973895 0.597398 1.10788 0.551136 1.25332C0.504875 1.39875 0.489931 1.55233 0.50729 1.70396C0.86604 4.80571 2.79689 12.9027 12.3578 13.4979C12.5051 13.5059 12.6524 13.4838 12.7907 13.4329C12.9291 13.3819 13.0556 13.3033 13.1625 13.2018C13.2694 13.1003 13.3545 12.978 13.4125 12.8425C13.4706 12.707 13.5003 12.561 13.5 12.4136V9.93295C13.5001 9.7164 13.4352 9.50479 13.3139 9.32545C13.1925 9.1461 13.0202 9.00725 12.8191 8.9268L11.455 8.38116C11.2582 8.30243 11.0425 8.28321 10.8348 8.32587C10.6271 8.36854 10.4365 8.4712 10.2866 8.62115ZM13 5.5H12C11.999 4.57206 11.6299 3.68242 10.9737 3.02627C10.3176 2.37011 9.42793 2.00103 8.49999 2V1C9.69306 1.00132 10.8369 1.47585 11.6805 2.31948C12.5241 3.16311 12.9987 4.30693 13 5.5ZM11 5.5H9.99999C9.99956 5.10231 9.84138 4.72103 9.56017 4.43982C9.27896 4.15861 8.89768 4.00044 8.49999 4V3C9.1628 3.00075 9.79825 3.26439 10.2669 3.73307C10.7356 4.20174 10.9992 4.83719 11 5.5Z" fill="#219241"/>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute z-[999] w-fit">
                {isModalOpen && (
                    // @ts-ignore
                    <Modal imageUrl={filteredItems[currentIndex].imageUrl} onClose={handleCloseModal} subtitle={filteredItems[currentIndex].title}>
                        <button className="bg-[#181A1F] p-1 lg:p-4 hover:bg-[#35363A] active:bg-black h-[10%] opacity-50 absolute top-[50%] left-0 -translate-y-[50%]"
                                onClick={handlePrevClick}
                        >
                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L7.705 12.295L3.915 8.5H14V7.5H3.915L7.705 3.705L7 3L2 8L7 13Z"
                                      fill="white"/>
                            </svg>
                        </button>
                        <button
                            className="bg-[#181A1F] p-1 lg:p-4 hover:bg-[#35363A] active:bg-black h-[10%] opacity-50 absolute top-[50%] right-0 -translate-y-[50%]"
                            onClick={handleNextClick}
                        >
                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z"
                                      fill="white"/>
                            </svg>
                        </button>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Test;
