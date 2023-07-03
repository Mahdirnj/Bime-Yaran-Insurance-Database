import {useLocation} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from './AppDrawer';
import "./Dashboard.css"
import useDocumentTitle from "../../hook/useDocumentTitle"
import {useEffect} from "react";




const Dashboard = () => {
    useDocumentTitle('پنل کاربری بیمه یاران')
    const {state} = useLocation();
    const {user_type, user_email, user_id} = state;

    return (
        <div>
        <Box sx={{ display: 'flex' }}>
            <Drawer user_type={user_type} user_email={user_email} user_id = {user_id} />
        </Box>
            <div className="active-insurance-container shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300">
                <p style={{textAlign: "right"}}>بیمه های من</p>
            </div>
        </div>
    );
}
export default Dashboard