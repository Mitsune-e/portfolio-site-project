import React from "react";

import { Home } from "../../pages"

import { Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => (
  <>
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  </>
)