import { useState } from "react";

function CarCard({ name, price, model, description, images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="car-card">

      <img
        src={images[currentImage]}
        alt={name}
        width="350"
        onClick={() => setShowInfo(!showInfo)}
      />

      <div>
        <button onClick={prevImage}>
          Previous
        </button>

        <button onClick={nextImage}>
          Next
        </button>
      </div>

      {showInfo && (
        <div>
          <h3>{name}</h3>
          <p>Price: {price}</p>
          <p>Model: {model}</p>
          <p>{description}</p>
        </div>
      )}

    </div>
  );
}

export default CarCard;