import "./Contracts.css"
import Box from "@mui/material/Box";
import Drawer from "../AppDrawer";
import useDocumentTitle from "../../../hook/useDocumentTitle"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Verified, VerifiedUser} from "@mui/icons-material";
let damage = []
const ApproveDamage = () => {
    const navigate = useNavigate()
    const handleApprove = (repay_id) => {
        console.log(repay_id)
        Axios.post("http://localhost:3001/approve-damage", {
            repay_id: repay_id
        }).then((response) => {
            console.log(response)
            navigate(0)
        })
    }
    useDocumentTitle('پنل کاربری بیمه یاران - تایید خسارت ')
    const {state} = useLocation();
    const {user_type, user_email, user_id} = state;
    const [data, setData] = useState(false)
    useEffect(() => {
        Axios.post("http://localhost:3001/get-pending-damage").then(
            (response) => {
                damage = []
                response.data.forEach((transData) => {
                    damage.push(transData)
                    setData(true)
                })
            })
        console.log(damage)
    }, [])


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Drawer user_type={user_type} user_email={user_email} user_id = {user_id} />
            </Box>
            <div className="transactions-wrapper">
                <TableContainer className="table-container" component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell className="table-cell" align="center"><p>
                                    تایید خسارت
                                </p></TableCell>
                                <TableCell className="table-cell" align="center"><p>
                                    شماره بیمه
                                </p></TableCell>
                                <TableCell className="table-cell" align="center"><p>
                                   شماره مشتری
                                </p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {damage.map((dmg) => (
                                <TableRow
                                    key={dmg.repay_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center"><Button size="small" onClick={ () => {
                                        handleApprove(dmg.repay_id)
                                    }}
                                                                      className="m-btn" variant="contained" startIcon={<VerifiedUser />}>تایید خسارت</Button></TableCell>
                                    <TableCell align="center"><p>{dmg.contract_id}</p></TableCell>
                                    <TableCell align="center"><p>{dmg.client_id}</p></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
export default ApproveDamage