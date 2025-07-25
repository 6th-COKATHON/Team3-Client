import LandingPage from '@/pages/LandingPage';
import NickNamePage from '@/pages/NickNamePage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
