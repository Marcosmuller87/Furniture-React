// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

// const Slider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const Arrlenght = slides.length;
//   // Con estas arrow functions se logra que ademas de pasar las fotos, al llegar a la ultima foto y hacer click en nextSlide se pase a la primer foto y con prevSlide se pase de la primera a la ultima.
//   const nextSlide = () => {
//     setCurrent(current === Arrlenght - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? Arrlenght - 1 : current - 1);
//   };
//   // Chequear que el array cumpla con las condiciones necesarias
//   if (!Array.isArray(slides) || Arrlenght <= 0) {
//     return null;
//   }
//   console.log(slides);
//   return (
//     <section className="slider">
//       <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
//       <FaAngleDoubleRight className="right-arrow" onClick={nextSlide} />
//       {/* Se mapea el array para renderizar las imagenes */}
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide-active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} alt="Apartamento" className="image" />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default Slider;
