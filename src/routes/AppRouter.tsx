import SelectingRoomPage from "@/pages/SelectingRoomPage";
import { Route, Routes } from "react-router-dom";
import NickNamePage from "@/pages/NickNamePage";
import GuesserPage from "@/pages/GuesserPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectingRoomPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
        <Route path="/guesser" element={<GuesserPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
