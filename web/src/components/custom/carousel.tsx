import { RegularListingFragment } from "@/generated/graphql";
import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    listing: RegularListingFragment;
}

export const Carousel: React.FC<CarouselProps> = ({ listing }) => {
    const settings = {
        // dots: true,
        infinite: true,
        accessibility: true,
        arrows: false,
        speed: 200,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    let sliderRef = useRef(null);

    return (
        <Slider
            {...settings}
            ref={(slider) => {
                sliderRef = slider as any;
            }}
            className="mx-auto relative"
        >
            {listing.attachments.map((image, index) => (
                <div
                    key={index}
                    className="focus:ring-0 focus:outline-none relative"
                >
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
                        alt={`Slide ${index}`}
                        className="w-full h-[30rem]  object-contain bg-gray-100 rounded-2xl"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                        <div
                            onClick={() => (sliderRef as any).slickPrev()}
                            className="transition-all p-2 bg-white border border-gray-100 shadow-sm rounded-full cursor-pointer"
                        >
                            <IoChevronBack className="text-2xl text-black" />
                        </div>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                        <div
                            onClick={() => (sliderRef as any).slickNext()}
                            className="transition-all p-2 bg-white border border-gray-100 shadow-sm rounded-full cursor-pointer"
                        >
                            <IoChevronForward className="text-2xl text-black" />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
