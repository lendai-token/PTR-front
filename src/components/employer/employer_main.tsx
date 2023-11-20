
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";
import logoImage from "../../assets/imgs/logo.png";
import contentImage from "../../assets/imgs/employer/content.png";
import mobile_contentImage from "../../assets/imgs/employer/mobile-content.png";

import './style.scss'
const EmployerMain = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const lastActivityDateTime = new Date();
    }, []);
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    const navigate = useNavigate();
    const cityFrom = useAppSelector(selectCityFrom);
    const [invisibleCityFromErr, setInvisibleCityFromErr] = useState(true);
    const [cityList, setCityList] = useState([]);
    const handleCityFromChange = (cityFromString: string) => {
        const queryString = encodeURIComponent(cityFromString);

        fetch(`${url.cityListURL}?query=${queryString}`, {
        headers: { Authorization: `${process.env.REACT_APP_CITYLIST_TOKEN}` },
        })
        .then((response) => response.json())
        .then((data) => {
            setCityList(data.locations);
        })
        .catch((error) => console.error("error", error));
        if (cityFromString !== "") {
        setInvisibleCityFromErr(true);
        }
    };

    const handleClick = () => {
        if (cityFrom === "") {
        setInvisibleCityFromErr(false);
        } else {
        setInvisibleCityFromErr(true);
        navigate("/destination-city");
        }
    };

    let content;
    if(isDesktop){
        content = (
            <div className="relative h-[725px]" >
                <div className="employer-main-banner h-[131px] ">
                    <div className="employer-main-banner-title max-w-[1440px] mx-auto pt-[62px] px-[100px]">
                        <h1>
                            Unlock your ideal
                        </h1>
                    </div>
                </div>
                <div className="employer-main-content max-w-[1440px] mx-auto px-[100px] mt-[30px]">
                    <div className="employer-main-content-title">
                        <h1>
                            TALENT WITH
                        </h1>
                    </div>
                    <img src={logoImage} className="h-[39px] w-[325px] mt-[20px] mx-[7px]"/>
                    <div className="employer-main-content-text h-[250px] w-[459px] mx-[7px] mt-[22px]">
                        <p>
                            Discover the easy way to connect with a wide range of top-tier fitness candidates.  Showcase your job opportunities to a highly motivated and focused audience, guaranteeing you'll discover the ideal addition to your team.  Enjoy a smooth posting process with customizable listings and valuable analytics to refine your hiring approach.  Allow us to assist you in finding the talent necessary to propel your organization to new heights.  Post your job opening today and uncover your next standout performer on PTRoster.
                        </p>
                    </div>
                </div>
                <div className="absolute top-[0px] lg:right-[0px] xl:right-[150px] md: right-[30px]">
                    <img src={contentImage} />
                </div>
            </div>
        );
    }else if(isMobile){
        content = (
            <div className="relative" >
                <div className="mobile-employer-main-banner h-[131px]">
                    
                </div>
                <div className="mobile-employer-main-content">
                    <div className="mobile-employer-main-content-img">
                        <img className="mt-[-130px]" src={mobile_contentImage}/>
                    </div>
                    <div className="relative flex flex-row justify-evenly items-center my-[20px]">
                        <Link to="/pricing" className='text-base text-purple-100 rounded-[8px] border border-purple-100 px-[24px] py-[10px] hover:text-white hover:bg-purple-100'>Post a Job</Link>
                        <Link to="/job/management" className='text-base hover:text-purple-100 border border-purple-100 hover:bg-white rounded border-white-100 px-[24px] py-[10px] text-white bg-purple-100'>Log in</Link>
                    </div>
                    <div className="mobile-employer-main-content-title">
                        <h1>Unlock your ideal</h1>
                        <h2>Talent with</h2>
                        <div className="flex justify-center">
                            <img src={logoImage} className="h-[39px] w-[325px] mt-[20px] mx-[7px]"/>
                        </div>
                    </div>
                    <div className="mobile-employer-main-content-text mt-[20px] mb-[20px] flex justify-center">
                        <p>
                            Discover the easy way to connect with a wide range of top-tier fitness candidates.  Showcase your job opportunities to a highly motivated and focused audience, guaranteeing you'll discover the ideal addition to your team.  Enjoy a smooth posting process with customizable listings and valuable analytics to refine your hiring approach.  Allow us to assist you in finding the talent necessary to propel your organization to new heights.  Post your job opening today and uncover your next standout performer on PTRoster.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    return <>{content}</>;
}

export default EmployerMain;