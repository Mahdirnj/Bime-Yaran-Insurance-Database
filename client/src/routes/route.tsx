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
import LifeInsurance from "../pages/Life-Insurance/LifeInsurance";

import Branches from "../pages/Dashboard/pages/Branches"
import Employees from "../pages/Dashboard/pages/Employees"
import Transactions from "../pages/Dashboard/pages/Transaction"
import Password from "../pages/Dashboard/pages/Password"
import Buy from "../pages/Dashboard/pages/Buy"
import ApproveContract from "../pages/Dashboard/pages/ApproveContract"
import Contracts from "../pages/Dashboard/pages/Contracts"
import Users from "../pages/Dashboard/pages/Users"
import Clients from "../pages/Dashboard/pages/Clients"
import Damage from "../pages/Dashboard/pages/Damage"
import ApproveDamage from "../pages/Dashboard/pages/ApproveDamage"
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
            <Route path={'/LifeInsurance'} element={<LifeInsurance />} />


            <Route path={'/dashboard/branch'} element={<Branches />} />
            <Route path={'/dashboard/employee'} element={<Employees />} />
            <Route path={'/dashboard/transaction'} element={<Transactions />} />
            <Route path={'/dashboard/changepassword'} element={<Password />} />
            <Route path={'/dashboard/buy'} element={<Buy />} />
            <Route path={'/dashboard/ApproveContract'} element={<ApproveContract />} />
            <Route path={'/dashboard/contracts'} element={<Contracts />} />
            <Route path={'/dashboard/users'} element={<Users />} />
            <Route path={'/dashboard/clients'} element={<Clients />} />
            <Route path={'/dashboard/damage'} element={<Damage />} />
            <Route path={'/dashboard/ApproveDamage'} element={<ApproveDamage />} />


        </Routes>
    )
}
export default AppRoute