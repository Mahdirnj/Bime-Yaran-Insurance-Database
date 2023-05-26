import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
const AppRoute = () => {
    return (
        <Routes>
            <Route exact path={'/'} element={<HomePage />} />
        </Routes>
    )
}
export default AppRoute