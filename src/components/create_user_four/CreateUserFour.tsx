
import React, { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";

import "./style.scss";
import StyledTextField from "../common/StyledTextField";
import StyledButton from "../common/StyledButton";
import { positions } from "../../app/const/selectOptions";
import StyledTextArea from "../common/StyledTextArea";
import pdfOnly from "../../assets/imgs/create-user/pdf-only.svg";

const CreateUserFour = () => {
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
  if (isDesktop) {
    content = (
      <div className="create-user-background">
        <div className="banner h-[196px] relative">
          <div className="absolute top-2/4 left-2/4 text-[45px] -translate-x-1/2 -translate-y-1/2 text-white">
            GETTING TO KNOW
          </div>
        </div>
        {/* section-progress */}
        <div className="text-center">
          <div className="progress-ruler mx-[260px] pt-[22px] relative mt-[22px] mb-[92px]">
            <div className=" w-[99%] m-auto flex justify-between items-center">
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-300 h-[6px] w-[25%]"></div>
            </div>
            <div className="dots-part flex justify-between absolute w-full top-[8px]">
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center relative">
                  <span className="text-[14px] font-bold text-white">1</span>
                </div>
                <div className="absolute -translate-x-[30%] translate-y-[10px] font-bold">
                  Personal
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center relative">
                  <span className="text-[14px] font-bold text-white">2</span>
                </div>
                <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold">
                  Credentials
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">3</span>
                </div>
                <div className="absolute -translate-x-[33%] translate-y-[10px] font-bold">
                  Opportunities
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">4</span>
                </div>
                <div className="absolute -translate-x-[9%] translate-y-[10px] font-bold text-[20px]">
                  Social
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">5</span>
                </div>
                <div className="absolute -translate-x-[10%] translate-y-[10px] font-bold">
                  Rating
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* section-input */}
        <div className="max-w-[810px] mx-auto">
          <div className="text-[20px] font-bold text-black-300">
            Social Media
          </div>
          <div className="text-[14px] text-grey-800">
            Link to your social media profiles that highlight your experience, expertise, and skills.
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-3">
              <StyledTextField label="LinkedIn" placeholder="www.Linkedin.com/..." id="profile-linkedin"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Instagram" placeholder="www.Instagram.com/...." id="profile-instagram"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Twitter" placeholder="www.Twitter.com/..." id="profile-twitter"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="TikTok" placeholder="www.tiktok.com/..." id="profile-tiktok"/>
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[18px]">
            Profile Summary
          </div>
          <div className="text-[14px] text-grey-800 flex justify-between items-center">
            <span>Keep your profile short and to the point to keep the hiring manager engaged and interested</span>
            <span>88/100</span>
          </div>
          <div className="mt-[3px]">
            <StyledTextArea />
          </div>
        </div>
        {/* section upload resume */}
        <div className="max-w-[810px] mx-auto mt-[42px] text-center relative">
          <div className="grid grid-cols-6 gap-[18px]">
            <div className="col-span-3">
              <div className="grid grid-cols-9">
                <div className="col-span-5"></div>
                <div className="col-span-4">
                  <StyledButton text="Upload New Resume" status="contrast-active" />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-9">
                <div className="col-span-4">
                  <StyledButton text="View Your Resume" status="contrast-normal" />
                </div>
                <div className="col-span-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-[14px] right-0 flex items-center">
            <span><img src={pdfOnly} alt="pdf-only-icon" /></span><span className="text-grey-900 pl-[5px]">PDF format only.</span>
          </div>
        </div>
        {/* section-pagination */}
        <div className="mt-[50px] text-center pb-[59px]">
          <span className="text-grey-800 text-[14px]"><Link to="/create-user/step3">&lt; PREVIOUS</Link>&nbsp;/&nbsp;</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/step5">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }else if(isMobile){
    content = (
      <div className="bg-[#E8F4FC]">
        {/* banner */}
        <div className="create2-mobile-banner bg-[#1273EB] h-[126px] rounded-[8px] flex flex-row item-center">
          <div className="basis-1/3 p-[13px]">
            <div className="create1-mobile-banner-spinner4 w-[100px] h-[100px] flex justify-center items-center"> 
              <span className="progress-status-text">4 of 5</span>
            </div>
          </div>
          <div className="basis-2/3 flex justify-start items-center">
            <div className="create1-mobile-banner-title">
              <h1>Getting to Know You</h1>
              <h2>Social/Resume</h2>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="px-[20px] mt-[12px]">
          <div className="create3-mobile-content-social">
            <div className="text-[20px] font-bold text-black-300">
              Social
            </div>
            <div className="text-[14px] text-grey-800">
              Link to your social media profiles that highlight your experience, expertise, and skills.
            </div>
            <div className="mt-[20px]">
              <div>
                <StyledTextField label="LinkedIn" placeholder="www.Linkedin.com/..." id="profile-linkedin"/>
              </div>
              <div className="mt-[7px]">
                <StyledTextField label="Instagram" placeholder="www.Instagram.com/...." id="profile-instagram"/>
              </div>
              <div className="mt-[7px]">
                <StyledTextField label="Twitter" placeholder="www.Twitter.com/..." id="profile-twitter"/>
              </div>
              <div className="mt-[7px]">
                <StyledTextField label="TikTok" placeholder="www.tiktok.com/..." id="profile-tiktok"/>
              </div>
            </div>
          </div>

          <div className="create3-mobile-content-profile mt-[20px]">
            <div className="text-[20px] font-bold text-black-300">
             Profile Summary
            </div>
            <div className="text-[14px] text-grey-800">
              Keep your profile short and to the point to keep the hiring manager engaged and interested.
            </div>
            <div className="mt-[3px]">
              <StyledTextArea/>
            </div>
            <div className="py-[15px] flex flex-row justify-center">
              <span className="flex items-center"><img src={pdfOnly} alt="pdf-only-icon" /></span><span className="text-grey-900 pl-[5px]">PDF format only.</span>
            </div>
            <div className="mt-[14px] flex flex-row justify-around">
              <div className="">
                <StyledButton text="Upload New Resume" status="contrast-active" />
              </div>
              <div className="">
                <StyledButton text="View Your Resume" status="contrast-normal" />
              </div>
            </div>
          </div>
        </div>
        {/* section-pagination */}
        <div className="mt-[24px] text-center pb-[25px]">
          <span className="text-grey-800 text-[14px]">&lt; PREVIOUS /</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/step5">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserFour;
