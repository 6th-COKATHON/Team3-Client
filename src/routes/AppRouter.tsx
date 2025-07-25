import LandingPage from '@/pages/LandingPage';
import NickNamePage from '@/pages/NickNamePage';
import GuesserPage from '@/pages/GuesserPage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
        <Route path="/guesser" element={<GuesserPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
