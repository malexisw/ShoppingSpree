import React, { useState, useEffect } from "react";

const Carroussel = () => {
  let interval;
  const images = [
    { id: 0, src: "./img/carousel/carousel1.jpg", title: "New collection" },
    {
      id: 1,
      src: "./img/carousel/carousel2.jpg",
      title: "Limited edition product",
    },
    {
      id: 2,
      src: "./img/carousel/carousel3.jpg",
      title: "Free shipping over $50",
    },
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    interval = setInterval(() => {
      setSlide(slide + 1);
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  const nextSlide = () => {
    if (slide >= images.length - 1) {
      setSlide(0);
    }
    if (slide < 0) {
      setSlide(images.length - 1);
    }
  };

  return (
    <div className="carousel">
      {images.map((img) => (
        <div
          className="carouselCard"
          key={img.id}
          style={{
            backgroundImage: "url(" + img.src + ")",
            transform: "translateX(" + -slide * 100 + "%)",
          }}
        >
          <h1 className={"title-carousel title" + img.id}>{img.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Carroussel;
