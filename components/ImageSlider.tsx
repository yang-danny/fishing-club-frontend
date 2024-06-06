"use client";
import { useState, useEffect } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://res.cloudinary.com/dioas9lmz/image/upload/v1714960955/tackle-banner_baa83k.jpg",
    },
    {
      url: "https://res.cloudinary.com/dioas9lmz/image/upload/v1714962885/home_kzdm7s.jpg",
    },
    {
      url: "https://res.cloudinary.com/dioas9lmz/image/upload/v1714961257/ESP-Homepage-masthead-banner-copy-1_qchwyz.jpg",
    },
  ];
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  const Arrow = ({
    direction,
    onClick,
  }: {
    direction: string;
    onClick: React.MouseEventHandler;
  }) => (
    <div
      className="hidded group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer"
      style={{ [direction]: "20px" }}>
      {direction === "left" ? (
        <CircleArrowLeft onClick={onClick} size={30} />
      ) : (
        <CircleArrowRight onClick={onClick} size={30} />
      )}
    </div>
  );
  return (
    <div className="max-w-[1760px] h-[600px] w-full m-auto py-16 px-4 relative group:">
      <div
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
        <Arrow direction="left" onClick={prevSlide} />
        <Arrow direction="right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default ImageSlider;
