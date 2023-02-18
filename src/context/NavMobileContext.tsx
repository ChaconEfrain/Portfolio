import { createContext, ReactNode, useState } from "react";
import { NavContext } from "../types";

export const NavMobileContext = createContext<NavContext>({
  openNav: false,
  setOpenNav: null,
});

export const NavMobileProvider = ({ children }: { children: ReactNode }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <NavMobileContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </NavMobileContext.Provider>
  );
};
