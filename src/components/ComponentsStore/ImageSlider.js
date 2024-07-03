// ImageSlider.js
import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slides = [
    {
      AppName: "ZenthConvo ",
      src: "http://res.cloudinary.com/aryan2002cloud/image/upload/v1711623287/brbyh0ebtcvct3brisos.jpg",
      alt: "Mountains",
      caption:
        "- Stay connected, anytime, anywhere - our chat app brings people closer, one message at a time.",
    },
    {
      AppName: "ProProctor ",
      src: "http://res.cloudinary.com/aryan2002cloud/image/upload/v1711525211/whyazugvqplxmnavqtow.png",
      alt: "Online Assesment APP",
      caption:
        "- Empower your growth with our interactive online assessment platform. ",
    },
    {
      AppName: "Agora ",
      src: "http://res.cloudinary.com/aryan2002cloud/image/upload/v1711966333/bfqdwhnvshsfbenp02iz.jpg",
      alt: "Snow",
      caption:
        "- Bring your conversations to life with crystal-clear video calls on our intuitive video calling app.",
    },
  ];

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${
            index === currentSlide ? "show" : "hide"
          }`}
        >
          <div className="AppHeadingHome">{slide.AppName}</div>
          <Box
            bg="teal.500"
            color="white"
            rounded="md"
            p={2}
            fontSize="md"
            position="absolute"
            top={79}
            right={2}
          >
            {index + 1} / {slides.length}
          </Box>
          <Image
            src={slide.src}
            style={{ width: "100%", height: "380px", borderRadius: "20px" }}
            alt={slide.alt}
          />
          <div className="WelcomePageCaption">{slide.caption}</div>
        </div>
      ))}

      <a className="prev" onClick={prevSlide}>
        ❮
      </a>
      <a className="next" onClick={nextSlide}>
        ❯
      </a>
    </div>
  );
};

export default ImageSlider;
