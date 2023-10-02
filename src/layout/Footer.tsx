import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useScreenSize } from '../app/hooks';
import logo from '../assets/imgs/logo.png';

const invisiblePathList = [
    "/signin",
    "/signup",
]

const Footer = () => {
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    const location = useLocation();

    let content;

    if (isDesktop) {
        content = 
        !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full bg-white border-t border-grey-600">
                <div className="bg-white px-30 px-[160px] relative">
                    <div className="absolute right-[215px] top-[85px]">
                        <span className='pr-[9px]'>
                            <a href="https://www.facebook.com/PTRosterJobs" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'facebook-f', style: 'brands'})} />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/company/ptroster" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'linkedin-in', style: 'brands'})} />
                            </a>
                        </span>
                    </div>
                    <div className="pt-[80px]">
                        <Link to="/">
                            <img src={logo} alt="logo-png" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex pt-[5px]">
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Our Works
                                </Link>
                            </li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Careers
                                </Link>
                            </li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">
                                <Link to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">
                                <Link to="/">
                                    FAQ's
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full border-t flex justify-between">
                        <div>
                            <ul className="flex pt-[5px]">
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="py-[22px] pr-[27px] text-black-300 text-[12px]">
                            Copyright © PTRoster All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        ) : <div></div>
    } else if (isTablet) {
        content = 
        !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full bg-white border-t border-grey-600">
                <div className="bg-white px-30 px-[40px]">
                    <div className="pt-[40px] flex justify-center">
                        <Link to="/">
                            <img src={logo} alt="logo-png" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex pt-[50px] justify-center">
                            <li className="pr-[32px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Our Works
                                </Link>
                            </li>
                            <li className="pr-[32px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Careers
                                </Link>
                            </li>
                            <li className="pr-[32px] cursor-pointer text-black-300">
                                <Link to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="cursor-pointer text-black-300">
                                <Link to="/">
                                    FAQ's
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center pt-[50px]">
                        <span className='pr-[9px]'>
                            <a href="https://www.facebook.com/PTRosterJobs" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'facebook-f', style: 'brands'})} />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/company/ptroster" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'linkedin-in', style: 'brands'})} />
                            </a>
                        </span>
                    </div>
                    
                    <div className="w-full flex justify-center pt-[20px] pb-[20px]">
                        <div>
                            <ul className="flex pt-[5px]">
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li className="py-[22px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div></div>
    } else if (isMobile) {
        content = 
        !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full bg-white border-t border-grey-600">
                <div className="bg-white px-30">
                    <div className="pt-[40px] flex justify-center">
                        <Link to="/">
                            <img src={logo} alt="logo-png" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex pt-[50px] justify-center">
                            <li className="pr-[30px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Our Works
                                </Link>
                            </li>
                            <li className="pr-[30px] cursor-pointer text-black-300">
                                <Link to="/">
                                    Careers
                                </Link>
                            </li>
                            <li className="pr-[30px] cursor-pointer text-black-300">
                                <Link to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="cursor-pointer text-black-300">
                                <Link to="/">
                                    FAQ's
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center pt-[50px]">
                        <span className='pr-[9px]'>
                            <a href="https://www.facebook.com/PTRosterJobs" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'facebook-f', style: 'brands'})} />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/company/ptroster" target="_blank">
                                <FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'linkedin-in', style: 'brands'})} />
                            </a>
                        </span>
                    </div>
                    
                    <div className="w-full flex justify-center pt-[5px] pb-[20px]">
                        <div>
                            <ul className="pt-[5px]">
                                <li className="py-[15px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="py-[15px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li className="py-[15px] cursor-pointer text-black-300 text-[12px]">
                                    <Link to="#">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div></div>
    }
    return (
        <>
           { content }
        </>
    )
}

export default Footer;