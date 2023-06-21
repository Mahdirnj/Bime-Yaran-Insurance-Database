import "./Admin.css"
import Box from "@mui/material/Box";
import Drawer from "../AppDrawer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from "react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
let admins = []
const Admin = () => {
    const handleEditClickOpen = () => {
    };
    const handleEditClickClose = () => {

    };
    const handleDeleteClickOpen = () => {

    };
    const handleDeleteClickClose = () => {

    };
    const handleRegisterClickOpen = () => {

    };
    const handleRegisterClickClose = () => {

    };
    const [data, setData] = useState(false)
    useEffect(() => {
        Axios.post("http://localhost:3001/admins", {
            user_type: "admin"
        }).then((response) => {
            admins = []
            response.data.forEach((adminData) => {
                admins.push(adminData)
                setData(true)
            })
        })
        console.log(admins)
    }, [])
    const {state} = useLocation();
    const {user_type, user_email} = state;
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Drawer user_type={user_type} user_email={user_email} />
            </Box>
            <div className="admins-wrapper">
                <div className="admins-wrapper-buttons">
                    <div>
                        <Button onClick={handleDeleteClickOpen}
                            className="m-btn" variant="outlined" color="error" startIcon={<DeleteIcon />}>حذف کارمند</Button>
                    </div>
                    <div>
                        <Button onClick={handleEditClickOpen}
                            className="m-btn" variant="outlined"  startIcon={<ModeEditIcon />}>ویرایش کارمند</Button>
                    </div>
                    <div>
                        <Button onClick={handleRegisterClickOpen}
                                className="m-btn" variant="contained" startIcon={<AddIcon />}>ثبت کارمند</Button>
                    </div>

                </div>
            <TableContainer className="table-container" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell className="table-cell" align="center"><p>
                                شعبه فعالیت
                            </p></TableCell>
                            <TableCell className="table-cell" align="center"><p>
                                حقوق
                            </p></TableCell>
                            <TableCell className="table-cell" align="center"><p>
                                نام و نام خانوادگی
                            </p></TableCell>
                            <TableCell className="table-cell" align="center"><p>
                                شماره کارمندی
                            </p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins.map((admin) => (
                            <TableRow
                                key={admin.user_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {admin.user_type}
                                </TableCell>
                                <TableCell align="center">{admin.password}</TableCell>
                                <TableCell align="center">{admin.email}</TableCell>
                                <TableCell align="center">{admin.user_id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}
export default Admin