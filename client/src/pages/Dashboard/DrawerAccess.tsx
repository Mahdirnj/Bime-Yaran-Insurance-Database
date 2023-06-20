import UserListItems from "./UserListItems";
import AdminListItems from "./AdminListItems";
import OwnerListItems from "./OwnerListItems";
import List from "@mui/material/List";
import * as React from "react";

const DrawerAccess = (props) => {
    return(
    <div>
        <List style={{overflow: "hidden"}} component="nav">
            {props.user_type == "user" ? <UserListItems email = {props.user_email} type={props.user_type} /> :
                (props.user_type == "admin" ? <div><UserListItems email = {props.user_email} type={props.user_type} /> <AdminListItems /></div> :
                    <div>
                        <UserListItems email = {props.user_email} type={props.user_type} />
                         <AdminListItems />
                        <OwnerListItems email = {props.user_email} type={props.user_type} />
                    </div>
                )
            }
        </List>
    </div>
    )
}
export default DrawerAccess