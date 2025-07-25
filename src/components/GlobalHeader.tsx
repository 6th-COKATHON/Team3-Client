import LogoText from "@/assets/logo/logo-text.svg?react";
import IconHome from "@/assets/icon/icon-home.svg?react";
import IconInfo from "@/assets/icon/icon-info.svg?react";
import { useNavigate } from "react-router-dom";

const GlobalHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 flex w-[70%] py-14 justify-between items-center shrink-0">
      <LogoText
        onClick={() => navigate("/")}
        className="hover:cursor-pointer"
      />
      <div className="flex items-center gap-16">
        <IconHome
          onClick={() => navigate("/")}
          className="hover:cursor-pointer"
        />
        <IconInfo
          onClick={() => console.log("info 클릭")}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GlobalHeader;
