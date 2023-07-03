import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {useNavigate} from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import "./Dashboard.css"
import Divider from "@mui/material/Divider";
const ManagerListItems = (props) => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Divider sx={{my: 2}}/>
            <p style={{textAlign: 'center'}}>دسترسی ویژه</p>
            <Divider sx={{my: 2}}/>
            <ListItemButton
                onClick={() => {
                    navigate("/dashboard/employee", {
                        state: {
                            user_email: props.email,
                            user_type : props.type,
                            user_id: props.id
                        }
                    })
                }}
            >
                <p className="drawer-list-item-text">کارمندان</p>
                <div className="drawer-list-item-icon">
                    <ListItemIcon>
                        <AdminPanelSettingsIcon/>
                    </ListItemIcon>
                </div>
            </ListItemButton>
            <ListItemButton
                onClick={() => {
                    navigate("/dashboard/branch", {
                        state: {
                            user_email: props.email,
                            user_type : props.type,
                            user_id: props.id
                        }
                    })
                }}
            >
                <p className="drawer-list-item-text">شعبه ها</p>
                <div className="drawer-list-item-icon">
                    <ListItemIcon>
                        <AccountBalanceIcon/>
                    </ListItemIcon>
                </div>
            </ListItemButton>
        </React.Fragment>
    )
}
export default ManagerListItems