import React from 'react';
import './CarouselComponent.css';

const CarouselComponent = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-slides">
                {images.map((item) => (
                    <div
                        className={`carousel-slide ${item.index === currentIndex ? 'active' : ''}`}
                        key={item.index}
                    >
                        <img src={item.image} alt={`Slide ${item.index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default CarouselComponent;