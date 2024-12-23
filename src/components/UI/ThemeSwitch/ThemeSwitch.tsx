/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
import Cookies from "js-cookie";
import MainTooltip from "../Tooltip/MainTooltip";
import MoonIcon from "../../../assets/icons/fill/Moon";
import { useTheme } from "next-themes";
import SunIcon from "../../../assets/icons/fill/Sun";
import { useTranslation } from "react-i18next";

export default function ThemeSwitch() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === "light";

  const changeThemeHandler = () => {
    switch (isLightMode) {
      case true:
        setTheme("dark");
        Cookies.set("theme", "dark");
        break;
      case false:
        setTheme("light");
        Cookies.set("theme", "light");
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={changeThemeHandler}
    >
      <span className="sm:hidden">
        {isLightMode ? t("darkMode") : t("lightMode")}
      </span>
      <MainTooltip content={isLightMode ? t("darkMode") : t("lightMode")}>
        <span>{isLightMode ? <MoonIcon /> : <SunIcon />}</span>
      </MainTooltip>
    </div>
  );
}
