import { useContext } from "react";
import { NavMobileContext } from "../context/NavMobileContext";

const useNavMobile = () => {
  const { openNav, setOpenNav } = useContext(NavMobileContext);
  return { openNav, setOpenNav };
};

export default useNavMobile;
