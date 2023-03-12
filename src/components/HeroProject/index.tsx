import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const HeroProject = () => {
    const [activeCategory, setActiveCategory] = useState("bathroom");


    const bannerBG=[
        {
            url: '/banner-projects.jpg',
            category: "bathroom",
        }, {
            url: '/kitchen-bg.jpg',
            category: "kitchen",
        }, {
            url: '/living-bg.jpg',
            category: "livingarea",
        }, {
            url: '/Image_laceholder.jpg',
            category: 'bedroom'
        }
    ]


    const category = [
        {
            title: "Bathroom",
            id: "bathroom",
        },
        {
            title: "Bed Room",
            id: "bedroom",
        },
        {
            title: "Kitchan",
            id: "kitchen",
        },
        {
            title: "living Area",
            id: "livingarea",
        },
    ];

    const items = [
        {
            title: "Item 1",
            category: "bathroom",
            imageUrl: "/items-1.jpg",
            description: "Description for item 1",
        },
        {
            title: "Item 1",
            category: "bathroom",
            imageUrl: "/items-1.jpg",
            description: "Description for item 1",
        },
        {
            title: "Item 1",
            category: "bathroom",
            imageUrl: "/items-1.jpg",
            description: "Description for item 1",
        },
        {
            title: "Item 1",
            category: "bathroom",
            imageUrl: "/items-1.jpg",
            description: "Description for item 1",
        },
        {
            title: "Item 1",
            category: "bathroom",
            imageUrl: "/items-1.jpg",
            description: "Description for item 1",
        },
        {
            title: "Item 2",
            category: "bedroom",
            imageUrl: "/items-2.jpg",
            description: "Description for item 2",
        },
        {
            title: "Item 3",
            category: "kitchen",
            imageUrl: "/items-3.jpg",
            description: "Description for item 3",
        },  {
            title: "Item 2",
            category: "bedroom",
            imageUrl: "/items-2.jpg",
            description: "Description for item 2",
        },
        {
            title: "Item 3",
            category: "kitchen",
            imageUrl: "/items-3.jpg",
            description: "Description for item 3",
        },
        {
            title: "Item 4",
            category: "livingarea",
            imageUrl: "/items-4.jpg",
            description: "Description for item 4",
        },{
            title: "Item 3",
            category: "kitchen",
            imageUrl: "/items-3.jpg",
            description: "Description for item 3",
        },
        {
            title: "Item 4",
            category: "livingarea",
            imageUrl: "/items-4.jpg",
            description: "Description for item 4",
        },
    ];

    const filteredItems = activeCategory
        ? items.filter((item) => item.category === activeCategory)
        : items;

    const handleCategoryClick = (categoryId: any) => {
        setActiveCategory(categoryId);
    };

    return (
        <div>
            <div className="w-full h-[200px] lg:h-[356px] mt-[70px] 2xl:mt-[150px] relative flex justify-center">
                {bannerBG.map(({ url, category }, index) => {
                    return (
                        <div key={index}>
                            {activeCategory === category && (
                                <Image src={url} alt="image banner" layout="fill" objectFit="cover" />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <div
                    className="bg-white rounded-t-[37px] z-10 -mt-[100px] lg:-mt-[178px] py-[15px] lg:py-[41px] px-[30px] lg:px-[125px] text-center">
                    <div className="flex flex-col">
                        <div className="text-[30px] lg:text-[50px] leading-[40px] lg:leading-[62px] text-[#292F36]">Our
                            Project
                        </div>
                        <div
                            className="text-[18px] lg:text-[22px] leading-[22px] lg:leading-[33px] tracking-1 text-[#4D5053]">Home
                            / Project
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="px-[20px] sm:px-[100px] md:px-[150px] lg:px-[200px] flex flex-col relative mt-[70px] 2xl:mt-[150px]">
                <div className="flex justify-center">
                    <div className="overflow-auto scroll-hidden">
                        <div className="flex flex-row gap-4 lg:gap-24 border rounded-[20px] border-[#CDA274] w-fit">
                            {category.map(({ title, id }, index) => {
                                const isActive = activeCategory === id;
                                return (
                                    <div key={`${index}`}>
                                        <button style={{ backgroundColor: isActive ? "#cda274" : "white", color: isActive ? "white" : "black" }}
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

                <div className="flex flex-col md:grid  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {filteredItems.map(({title, imageUrl, description}, index) => (
                        <div key={`${index} flex flex-col gap-6`}>
                            <div className="relative w-full h-[280px] md:h-[400px] lg:h-[450px] xl:h-[500px] mt-[50px]">
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
                                    <div className="text-[18px] lg:text-[25px] leading-[22px] lg:leading-[31px] tracking-2 text-[#292F36]">
                                        {title}
                                    </div>
                                    <div className="text-[12px] lg:text-[22px] leading-[18px] lg:leading-[33px] tracking-1 text-[#4D5053]">
                                        {description}
                                    </div>
                                </div>
                                <Link href="/" className="block lg:hidden">
                                    <Image src="/arrow-left.svg" alt="arrow left" width={50} height={50}  objectFit="cover"/>
                                </Link>
                                <Link href="/" className="hidden lg:block">
                                    <Image src="/arrow-left.svg" alt="arrow left" width={70} height={70}  objectFit="cover"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroProject
