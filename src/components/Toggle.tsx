import { useRouter } from "next/router";

const Toggle = () => {
  const { locale, push } = useRouter();

  const changeLanguage = () => {
    locale === "en"
      ? push("/", undefined, { locale: "es" })
      : push("/", undefined, { locale: "en" });
  };

  return (
    <>
      <span className="mr-3 text-2xl  font-color-dark dark:text-[#f8f9fb] font-semibold">
        EN
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={changeLanguage}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-14 h-7 bg-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
      </label>
      <span className="ml-3 text-2xl font-color-dark dark:text-[#f8f9fb] font-semibold">
        ES
      </span>
    </>
  );
};

export default Toggle;
