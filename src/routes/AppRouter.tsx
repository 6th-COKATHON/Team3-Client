import SelectingRoomPage from "@/pages/SelectingRoomPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectingRoomPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
