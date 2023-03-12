import React, {useState, useEffect, useRef} from "react";

const Counter = () => {
    const counters = [
        {number: 15, text: "Ani de experiență", other:'+'},
        {number: 23, text: "Proiecte de succes", other:'K+'},
        {number: 97, text: "Recenzii pozitive", other:'%'},
        {number: 23, text: "Consumatori fericiti", other:'K+'},
    ];

    const elementRef = useRef(null);
    const [shouldStartCount, setShouldStartCount] = useState(false);
    const [counts, setCounts] = useState(Array(counters.length).fill(0));

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setShouldStartCount(true);
            }
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [elementRef]);


    useEffect(() => {
        if (!shouldStartCount) {
            return;
        }

        const steps = 50;
        const durations = 3000;
        const diffs = counters.map(({number}, index) => number / steps);

        const interval = setInterval(() => {
            setCounts((counts) =>
                counts.map((count, index) => {
                    const {number} = counters[index];
                    const diff = diffs[index];
                    const newCount = count + diff;
                    return newCount >= number ? number : newCount;
                })
            );
        }, durations / steps);

        return () => {
            clearInterval(interval);
        };
    }, [shouldStartCount, counters]);

    return (
        <div
            className="pt-[70px] lg:pt-[70px] 2xl:pt-[200px]"
            ref={elementRef}
        >
            <div
                className="bg-[#F4F0EC] px-[20px] sm:px-[100px] md:px-[150px] xk:px-[200px] py-[50px] xk:py-[151px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[76px] place-content-center">
                    {counters.map(({number, text, other}, index) => (
                        <div
                            className="flex flex-col gap-[16px] items-center"
                            key={index}
                        >
                            <div
                                className="text-[50px] leading-[70px] xl:text-[85px] xl:leading-[106px] tracking-2 text-[#CDA274]">
                                {Math.round(counts[index])}{other}
                            </div>
                            <div
                                className="text-[18px] leading-[23px] xl:text-[22px] xl:leading-[33px] tracking-2 text-[#4D5053] whitespace-pre">
                                {text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
