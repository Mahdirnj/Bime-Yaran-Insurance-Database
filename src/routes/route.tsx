import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Signin from "../pages/Signin/Signin";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Branch from "../pages/Branch/Branch";
const AppRoute = () => {
    return (
        <Routes>
            <Route exact path={'/'} element={<HomePage />} />
            <Route exact path={'/signin'} element={<Signin />} />
            <Route exact path={'/contact'} element={<Contact />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/branch'} element={<Branch />} />
        </Routes>
    )
}
export default AppRoute