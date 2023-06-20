import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {useNavigate} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./Dashboard.css"
const userListItems = (props) => {
    const navigate = useNavigate()
return(
    <React.Fragment>
        <ListItemButton
            onClick={() => {
                navigate("/dashboard", {
                    state: {
                        user_email: props.email,
                        user_type : props.type
                    }
                })
            }}>
            <p className="drawer-list-item-text">داشبورد</p>
            <div className="drawer-list-item-icon">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
            </div>
        </ListItemButton>
        <ListItemButton>
            <p className="drawer-list-item-text">سفارش بیمه</p>
            <div className="drawer-list-item-icon">
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
            </div>
        </ListItemButton>
        <ListItemButton onClick={() => {
            navigate("/dashboard/settings", {
                state: {
                    user_email: props.email,
                    user_type : props.type
                }
            })
        }}>
            <p className="drawer-list-item-text">مشخصات کاربری</p>
            <div className="drawer-list-item-icon">
                <ListItemIcon>
                    <ContactEmergencyIcon />
                </ListItemIcon>
            </div>
        </ListItemButton>
        <ListItemButton>
            <p className="drawer-list-item-text">تغییر رمز عبور</p>
            <div className="drawer-list-item-icon">
                <ListItemIcon>
                    <VpnKeyIcon />
                </ListItemIcon>
            </div>
        </ListItemButton>
    </React.Fragment>
)}
export default userListItems
