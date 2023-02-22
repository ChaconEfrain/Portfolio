import {
  Dispatch,
  LegacyRef,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from "react";

export type Grid = {
  children: ReactNode;
  cols: string;
  gap: string;
  display: string;
  background?: string;
  extra?: string;
};

export type TProject = {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  image: string;
  url: string;
  rowReverse?: boolean;
};

export type TTestimonial = {
  name: string;
  testimonial: string;
  position: string;
  company: string;
  image: string;
  linkedIn: string;
  gitHub: string;
  currentSlide?: number;
  translateToRight?: () => void;
  translateToLeft?: () => void;
};

export type NavContext = {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>> | null;
};

export type ThemeContextT = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>> | null;
};
