import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../../pages/private/Home/Home";

const HandleRoutesPrivates = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default HandleRoutesPrivates;
