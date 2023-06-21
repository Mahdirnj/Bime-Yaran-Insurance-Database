import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Branch from "../pages/Branch/Branch";
import CarInsurance from "../pages/Car-Insurance/CarInsurance";
import FireInsurance from "../pages/Fire-Insurance/FireInsurance";
import LiabilityInsurance from "../pages/Liability-Insurance/LiabilityInsurance";
import LifeInsurance from "../pages/Life-Insurance/LifeInsurance";

import Branches from "../pages/Dashboard/pages/Branches"
import Admin from "../pages/Dashboard/pages/Admin"
const AppRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/signin'} element={<SignIn />} />
            <Route path={'/signup'} element={<SignUp />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/branch'} element={<Branch />} />
            <Route path={'/CarInsurance'} element={<CarInsurance />} />
            <Route path={'/FireInsurance'} element={<FireInsurance />} />
            <Route path={'/LiabilityInsurance'} element={<LiabilityInsurance />} />
            <Route path={'/LifeInsurance'} element={<LifeInsurance />} />


            <Route path={'/dashboard/branch'} element={<Branches />} />
            <Route path={'/dashboard/admin'} element={<Admin />} />


        </Routes>
    )
}
export default AppRoute