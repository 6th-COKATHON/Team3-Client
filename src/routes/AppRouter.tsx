import { Route, Routes } from "react-router-dom";
import NickNamePage from "@/pages/NickNamePage";
import GuesserPage from "@/pages/GuesserPage";
import GuesserResultPage from "@/pages/GuesserResultPage";
import SelectingRoomPage from "@/pages/SelectingRoomPage";
import ExplainerPage from "@/pages/ExplainerPage";
import MakeRoomPage from '@/pages/MakeRoomPage';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectingRoomPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
        <Route path="/guesser" element={<GuesserPage />} />
        <Route path="/explainer" element={<ExplainerPage />} />
        <Route path="/guesser-result" element={<GuesserResultPage />} />
        <Route path="/make-room" element={<MakeRoomPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
