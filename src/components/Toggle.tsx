import { useId } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

const Toggle = () => {
  const { locale } = useRouter();
  const inputId = useId();

  const changeLanguage = () => {
    console.log({ i18n, locale });
    i18n?.language === "en"
      ? i18n?.changeLanguage("es")
      : i18n?.changeLanguage("en");
  };

  return (
    <>
      <span className="mr-3 text-2xl  font-color-dark dark:text-[#f8f9fb] font-semibold">
        {locale?.toUpperCase()}
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <label htmlFor={inputId} />
        <input
          id={inputId}
          onChange={changeLanguage}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-14 h-7 bg-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
      </label>
      <span className="ml-3 text-2xl font-color-dark dark:text-[#f8f9fb] font-semibold">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </>
  );
};

export default Toggle;
