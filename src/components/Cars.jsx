import CarCard from "./CarCard";

import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";

function Cars() {
  return (
    <>
     <h2>Our Cars</h2>
    <section id="cars" className="cars">
      
     
      <CarCard
        name="Suzuki ciaz"
        price="230000000"
        model="2024"
        description="pure car Imported from Dubai to Algeria"
        images={[car1, car2, car3, car4]}
      />
    </section>
    
</>
  );
}

export default Cars;