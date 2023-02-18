import { BsChevronUp } from "react-icons/bs";

const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-8 bottom-20 bg-[#023e8a] dark:bg-[#4f60df] w-16 h-16 flex justify-center items-center text-3xl rounded-full font-color-light shadow-xl"
    >
      <BsChevronUp />
    </button>
  );
};

export default ScrollButton;
