import { TTestimonial } from "../types";
import { ImQuotesLeft } from "react-icons/im";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TouchEvent, useState } from "react";

const Testimonial = ({
  name,
  testimonial,
  position,
  company,
  image,
  linkedIn,
  gitHub,
  currentSlide,
  translateToRight,
  translateToLeft,
}: TTestimonial) => {
  const [initialClientX, setInitialClientX] = useState<number>();
  const [finalClientX, setFinalClientX] = useState<number>();

  const handleTouchStart = (e: TouchEvent<HTMLElement>) =>
    setInitialClientX(e.touches[0].clientX);

  const handleTouchMove = (e: TouchEvent<HTMLElement>) =>
    setFinalClientX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    const delta = initialClientX! - finalClientX!;
    if (delta > 0) translateToRight!();
    else if (delta < 0) translateToLeft!();
  };

  return (
    <article
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex flex-col justify-center gap-6 font-color-dark shrink-0 w-full transition-all duration-700 bg-[#eee] p-8 rounded-3xl dark:bg-[#222] dark:text-[#f8f9fb]"
      style={{ transform: `translateX(${currentSlide! * -100}%)` }}
    >
      <blockquote className="flex flex-col gap-3 sm:text-3xl leading-relaxed sm:leading-relaxed text-2xl">
        <ImQuotesLeft className="font-color-blue text-6xl" />
        <p>{testimonial}</p>
      </blockquote>
      <footer className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-32 rounded-full aspect-square"
          loading="lazy"
        />
        <div className="flex flex-col gap-2 text-2xl">
          <p className="flex items-center gap-2 font-semibold uppercase">
            {name}{" "}
            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              <BsLinkedin />
            </a>
            <a
              href={gitHub}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              <BsGithub />
            </a>
          </p>
          <em>
            {position} - {company}
          </em>
        </div>
      </footer>
    </article>
  );
};

export default Testimonial;
