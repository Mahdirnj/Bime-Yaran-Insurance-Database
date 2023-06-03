import {Bars3Icon, UserIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import ElderlyIcon from '@mui/icons-material/Elderly';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import {useNavigate} from "react-router-dom";

const solutions = [
    { name: 'بیمه عمر', description: ' بیمه اشخاص یکی از مهمترین شاخه های رفاه اجتماعی محسوب می شود', href: '#', icon: ElderlyIcon },
    { name: 'بیمه اتوموبیل', description: 'این گروه بیمه را می‌توان به دو بیمه بدنه و بیمه شخص ثالث و سرنشین تقسیم کرد', href: '#', icon: DirectionsCarIcon },
    { name: 'بیمه آتش سوزی', description: "موضوع بیمه آتش ‌سوزی، تأمین خسارت و جبران زیان‌های مالی و مادی است", href: '#', icon: LocalFireDepartmentIcon },
    { name: 'بیمه پزشکان', description: 'با توجه به مسئولیتهای بیشماری که هریک از ما در قبال سایر افراد جامعه داریم می توان تعداد بسیار متنوعی از بیمه های مسئولیت را برشمرد', href: '#', icon: MedicalServicesIcon },
]
const callsToAction = [
    { name: 'ویدیو آموزشی', href: '#', icon: PlayCircleIcon },
    { name: 'تماس با واحد فروش', href: '#', icon: PhoneIcon },
]
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    return(
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="btn">
                        <UserIcon style={{display: "inline-block", position: "relative", top: "3px", marginRight: "8px"}} className="h-4 w-4" aria-hidden="true" />
                        <a onClick={() => {
                            navigate("/signin");
                        }
                        } className="text-md font-semibold leading-6">
                            ورود
                        </a>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div  className="hidden lg:flex lg:gap-x-12">
                    <a href="" className="text-lg leading-6 text-gray-900">
                        تماس با ما
                    </a>
                    <a href="" className="text-lg leading-6 text-gray-900">
                        درباره ما
                    </a>
                    <a href="" className="text-lg leading-6 text-gray-900">
                        <Popover className="relative">
                            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                <span className="text-lg leading-6 text-gray-900">انواع بیمه ها</span>
                                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-400"
                                enterFrom="opacity-0 translate-y-5"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-5"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {solutions.map((item) => (
                                                <div style={{textAlign: "end"}} key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                                    <div>
                                                        <a href={item.href} className="text-gray-900" style={{fontSize: "1.01rem"}}>
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </a>
                    <a href="" className="text-lg leading-6 text-gray-900">
                        مراکز خدمات بیمه
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">بیمه یاران</span>
                        <img
                            className="h-12 w-auto"
                            src="/favicon/android-chrome-512x512.png"
                            alt=""
                        />
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/favicon/android-chrome-512x512.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    مراکز خدمات بیمه
                                </a>
                                <a
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    درباره ما
                                </a>
                                <a
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    تماس با ما
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    ورود
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
export default Header