import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Category,
    ConditionalRendering,
    Events,
    Home,
    ItemDetail,
    Memo,
    NotFound,
} from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/events" element={<Events />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/conditional" element={<ConditionalRendering />} />
            </Routes>
        </Router>
    );
};
