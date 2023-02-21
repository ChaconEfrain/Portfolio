import { TouchEvent, useState } from "react";

const useCarouselMobile = ({
  translateToLeft,
  translateToRight,
}: {
  translateToLeft: () => void;
  translateToRight: () => void;
}) => {
  const [initialPosition, setInitialPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [finalPosition, setFinalPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    const position = e.touches[0];
    setInitialPosition({
      clientX: position.clientX,
      clientY: position.clientY,
    });
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    const position = e.touches[0];
    setFinalPosition({
      clientX: position.clientX,
      clientY: position.clientY,
    });
  };

  const handleTouchEnd = () => {
    const deltaX = initialPosition.clientX - finalPosition.clientX;
    const deltaY = initialPosition.clientY - finalPosition.clientY;
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;
    else if (deltaX > 0) translateToRight!();
    else if (deltaX < 0) translateToLeft!();
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useCarouselMobile;
