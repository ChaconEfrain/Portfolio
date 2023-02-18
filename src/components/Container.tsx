import { Grid } from "../types";

const Container = ({
  children,
  cols,
  gap,
  display,
  background,
  extra,
}: Grid) => {
  return (
    <div
      className={`max-w-[120rem] m-auto  px-12 justify-center justify-items-center items-center ${cols} ${gap} ${display} ${background} ${extra}`}
    >
      {children}
    </div>
  );
};

export default Container;
