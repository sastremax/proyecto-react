import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ItemDetail, NotFound } from "../Pages";

export const MainRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/category/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
};
