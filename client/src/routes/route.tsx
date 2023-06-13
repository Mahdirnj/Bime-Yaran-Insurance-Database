import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Signin from "../pages/Signin/Signin";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Branch from "../pages/Branch/Branch";
const AppRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/signin'} element={<Signin />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/branch'} element={<Branch />} />
        </Routes>
    )
}
export default AppRoute