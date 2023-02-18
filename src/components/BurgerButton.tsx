import useNavMobile from "../hooks/useNavMobile";

const BurgerButton = () => {
  const { setOpenNav } = useNavMobile();

  return (
    <div
      onClick={() => setOpenNav!(true)}
      className="space-y-2 md:hidden hover:cursor-pointer"
    >
      <div className="w-8 h-[1.5px] bg-[#023e8a] dark:bg-[#f8f9fb]"></div>
      <div className="w-8 h-[1.5px] bg-[#023e8a] dark:bg-[#f8f9fb]"></div>
      <div className="w-8 h-[1.5px] bg-[#023e8a] dark:bg-[#f8f9fb]"></div>
    </div>
  );
};

export default BurgerButton;
