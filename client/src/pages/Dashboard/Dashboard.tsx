import {useLocation} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from './AppDrawer';
import "./Dashboard.css"
import useDocumentTitle from "../../hook/useDocumentTitle"
import {useEffect} from "react";
import {Avatar} from "@mui/material";
import {blue, red} from "@mui/material/colors";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ConstructionIcon from "@mui/icons-material/Construction";




const Dashboard = () => {
    useDocumentTitle('پنل کاربری بیمه یاران')
    const {state} = useLocation();
    const {user_type, user_email, user_id} = state;

    return (
        <div>
        <Box sx={{ display: 'flex' }}>
            <Drawer user_type={user_type} user_email={user_email} user_id = {user_id} />
        </Box>
            <div>
                <p style={{textAlign: "right"}}>بیمه های من</p>
            <div className="active-insurance-container shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300">
                <div className="insurance-item">
                    <div className="rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300  dark:border-gray-700 ">
                        <div
                            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                <Avatar style={{margin: 'auto'}} sx={{ bgcolor: blue[500] }}>
                                    <ReceiptIcon />
                                </Avatar>
                                    <div>
                                        <div style={{display: "inline-block", width: "70px"}}>
                                            <Avatar style={{margin: 'auto'}} sx={{ bgcolor: blue[500] }}><ReceiptIcon />
                                            </Avatar>
                                        </div>
                                        <div style={{display: "inline-block", width: "70px"}}><Avatar style={{margin: 'auto'}} sx={{ bgcolor: red[500] }}><ConstructionIcon /></Avatar>
                                        </div>
                                    </div>)
                            <h2 className="mt-3">شعبه </h2>
                        </div>
                        <div
                            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                            <h2 className="mt-2"></h2>
                        </div>
                        <div
                            className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                            <h2>کد شعبه: {branch.branch_id}</h2>
                        </div>
                    </div>
                </div>
                <div className="insurance-item">

                </div>
                <div className="insurance-item">

                </div>
            </div>
            </div>

        </div>
    );
}
export default Dashboard