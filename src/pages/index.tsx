import Head from "next/head";
import { useEffect, useState } from "react";
import NavMobile from "@/components/NavMobile";
import Header from "@/components/Header";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavMobileProvider } from "@/context/NavMobileContext";

const Home = () => {
  const [displayButton, setDisplayButton] = useState<boolean>(false);

  useEffect(() => {
    // Event listener to display the "scroll to top" button
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setDisplayButton(true) : setDisplayButton(false);
    });
    //Remove highlight class from nav item
    const mainSection = document.getElementById("main-section");
    const navItems = document.querySelectorAll("li");
    const removeHighlight = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      navItems.forEach((item) => item.classList.remove("item-highlight"));
    };

    const mainSectionObserverForItems = new IntersectionObserver(
      removeHighlight,
      { root: null, threshold: 0.3 }
    );

    mainSectionObserverForItems.observe(mainSection!);

    //Sticky nav
    const nav = document.getElementById("nav-bar");
    const navHeight = nav?.getBoundingClientRect().height;

    const stickyNav = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!entry.isIntersecting) nav?.classList.add("sticky-nav");
      else nav?.classList.remove("sticky-nav");
    };

    const mainSectionObserverForStickyNav = new IntersectionObserver(
      stickyNav,
      {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
      }
    );

    mainSectionObserverForStickyNav.observe(mainSection!);

    //Reveal the hidden sections
    const hiddenSections = document.querySelectorAll(".section-hidden");

    const revealSection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.1,
    });

    hiddenSections.forEach((section) => sectionObserver.observe(section));
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMobileProvider>
        <NavMobile />
        <main className="overflow-hidden transition-all duration-300 dark:bg-gradient-to-r dark:from-[#444] dark:to-[#222]">
          <Header />
          <Technologies />
          <Projects />
          <Testimonials />
        </main>
        <Footer />
        {displayButton && <ScrollButton />}
      </NavMobileProvider>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};

export default Home;
