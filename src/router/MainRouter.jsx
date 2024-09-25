import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, ItemDetail, NotFound } from "../Pages";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Category />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
