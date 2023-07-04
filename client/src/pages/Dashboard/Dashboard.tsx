import { useLocation } from 'react-router-dom'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from './AppDrawer'
import './Dashboard.css'
import useDocumentTitle from '../../hook/useDocumentTitle'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { blue, red, green } from '@mui/material/colors'
import ReceiptIcon from '@mui/icons-material/Receipt'
import ConstructionIcon from '@mui/icons-material/Construction'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Axios from 'axios'

let cars = []
let cars2 = []
let fire = []
const Dashboard = () => {
    useDocumentTitle('پنل کاربری بیمه یاران')
    const { state } = useLocation()
    const { user_type, user_email, user_id } = state
    const [data, setData] = useState(false)
    useEffect(() => {
        cars = []
        cars2 = []
        fire = []
        Axios.post('http://localhost:3001/check-client-id', {
            user_id: user_id,
        }).then((response) => {
            let cli_id = response.data[0]['client_id']
            Axios.post('http://localhost:3001/get-car-insurance-by-client', {
                client_id: cli_id,
            }).then((response) => {
                response.data.forEach((d) => {
                    if (d.car_insurance_type == 1) {
                        cars.push(d)
                        setData(true)
                    } else if (d.car_insurance_type == 2) {
                        cars2.push(d)
                        setData(true)
                    }
                })
            })
            console.log(cars)
            console.log(cars2)
        })
    }, [])
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    user_type={user_type}
                    user_email={user_email}
                    user_id={user_id}
                />
            </Box>
            <div className="active-insurance-wrapper">
                <div className="active-insurance-container shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300">
                    <p
                        className="active-insurance-title"
                        style={{ textAlign: 'right' }}
                    >
                        بیمه های من
                    </p>
                    <div className="active-insurance-container-child">
                        <div className="insurance-item rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300  dark:border-gray-700 ">
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                <Avatar
                                    style={{ margin: 'auto' }}
                                    sx={{ bgcolor: blue[500] }}
                                >
                                    <DirectionsCarFilledIcon />
                                </Avatar>
                                <h2 className="mt-3">
                                    بیمه شخص ثالت اتوموبیل{' '}
                                </h2>
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars2.map((c2) => (
                                    <div key={c2.car_id}>
                                        <h2>
                                            {' '}
                                            تاریخ انقضا:
                                            {c2.car_date_expire}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars2.map((c2) => (
                                    <div key={c2.car_id}>
                                        <h2>
                                            {' '}
                                            کد شعبه:
                                            {c2.branch_id}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars2.map((c2) => (
                                    <div key={c2.car_id}>
                                        <h2>
                                            شماره بیمه:
                                            {c2.car_id}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars2.map((c2) => (
                                    <div key={c2.car_id}>
                                        <h2>
                                            نوع وسیله:
                                            {c2.car_type}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="insurance-item rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded border-gray-300  dark:border-gray-700 ">
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                <Avatar
                                    style={{ margin: 'auto' }}
                                    sx={{ bgcolor: blue[500] }}
                                >
                                    <DirectionsCarFilledIcon />
                                </Avatar>
                                <h2 className="mt-3">بیمه بدنه اتوموبیل </h2>
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars.map((c) => (
                                    <div key={c.car_id}>
                                        <h2>
                                            {' '}
                                            تاریخ انقضا:
                                            {c.car_date_expire}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars.map((c) => (
                                    <div key={c.car_id}>
                                        <h2>
                                            {' '}
                                            کد شعبه:
                                            {c.branch_id}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars.map((c) => (
                                    <div key={c.car_id}>
                                        <h2>
                                            شماره بیمه:
                                            {c.car_id}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                {cars.map((c) => (
                                    <div key={c.car_id}>
                                        <h2>
                                            نوع وسیله:
                                            {c.car_type}{' '}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
