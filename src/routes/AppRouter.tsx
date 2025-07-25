import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import NickNamePage from '@/pages/NickNamePage';
import GuesserPage from '@/pages/GuesserPage';
import GuesserResultPage from '@/pages/GuesserResultPage';
import SelectingRoomPage from "@/pages/SelectingRoomPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectingRoomPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
        <Route path="/guesser" element={<GuesserPage />} />
        <Route path="/guesser-result" element={<GuesserResultPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
