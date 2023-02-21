import useCarousel from "../hooks/useCarousel";
import useTestimonials from "../hooks/useTestimonials";
import Testimonial from "./Testimonial";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  const { t, testimonials } = useTestimonials();

  const { currentSlide, translateToLeft, translateToRight, translateWithDot } =
    useCarousel(testimonials);

  return (
    <section
      id="section-testimonials"
      className="section-hidden transition-all duration-1000 pt-40 mb-40"
    >
      <div className="max-w-[120rem] m-auto px-12 flex flex-col gap-8 sm:gap-12 items-center">
        <header className="flex flex-col gap-4 self-start">
          <p className="uppercase font-color-dark dark:text-[#f8f9fb] text-3xl font-semibold tracking-wide">
            {t("testimonials")}
          </p>
          <h2 className="section-title">{t("colleaguesOpinion")}</h2>
        </header>
        <div className="flex items-center justify-center md:gap-12 lg:gap-16 w-full sm:max-w-[100rem]">
          <button
            onClick={translateToLeft}
            className="hidden md:flex text-3xl font-color-light bg-dark w-16 h-16 rounded-full items-center justify-center font-bold"
          >
            <BsArrowLeft />
          </button>
          <div className="flex items-center w-full md:w-[70%] lg:w-[80%] overflow-hidden ">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.testimonial}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                linkedIn={testimonial.linkedIn}
                gitHub={testimonial.gitHub}
                currentSlide={currentSlide}
                translateToRight={translateToRight}
                translateToLeft={translateToLeft}
              />
            ))}
          </div>
          <button
            onClick={translateToRight}
            className="hidden md:flex text-3xl font-color-light bg-dark w-16 h-16 rounded-full items-center justify-center font-bold"
          >
            <BsArrowRight />
          </button>
        </div>
        <div className="flex items-center w-full justify-center gap-8 px-16 sm:px-32">
          <button
            onClick={translateToLeft}
            className="flex md:hidden text-3xl font-color-light bg-dark w-16 h-16 rounded-full items-center justify-center font-bold"
          >
            <BsArrowLeft />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => translateWithDot(i)}
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  i === currentSlide ? "bg-dark" : "bg-[#555] dark:bg-[#f8f9fb]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={translateToRight}
            className="flex md:hidden text-3xl font-color-light bg-dark w-16 h-16 rounded-full items-center justify-center font-bold"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
