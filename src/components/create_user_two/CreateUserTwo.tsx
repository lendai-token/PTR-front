
import React, { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";

import "./style.scss";
import StyledTextField from "../common/StyledTextField";
import StyledSelect from "../common/StyledSelect";
import StyledButton from "../common/StyledButton";
import { Box } from "@mui/system";
import { salutations, genders } from "../../app/const/selectOptions";

const CreateUserTwo = () => {
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
              <div className="bg-purple-300 h-[6px] w-[25%]"></div>
              <div className="bg-purple-300 h-[6px] w-[25%]"></div>
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
                <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold text-[20px]">
                  Credentials
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">3</span>
                </div>
                <div className="absolute -translate-x-[33%] translate-y-[10px] font-bold">
                  Opportunities
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">4</span>
                </div>
                <div className="absolute -translate-x-[9%] translate-y-[10px] font-bold">
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
        <div className="max-w-[740px] mx-auto">
          <div className="text-[20px] font-bold text-black-300">
            Education
          </div>
          <div className="text-[14px] text-grey-800">
            Select your highest level of education achieved
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[6px]">
            <div className="col-span-2">
              <StyledSelect placeholder="Drop down choice" id="profile-edu-level" options={salutations}/>
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[12px]">
            Education
          </div>
          <div className="text-[14px] text-grey-800">
            Select the number of years of experience for each option
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[6px]">
            <div className="col-span-2">
              <StyledSelect placeholder="Drop down choice" id="profile-exp-year" options={salutations}/>
            </div>
          </div>
          
          <div className="grid grid-cols-6 gap-4 mt-[12px]">
            <div className="col-span-2">
              <StyledSelect label="Fitness Industry Experience" placeholder="None" id="profile-industry-exp" options={salutations}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Fitness Sales Experience" placeholder="None" id="profile-sales-exp" options={salutations}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="General Mangement Experience" placeholder="None" id="profile-general-exp" options={salutations}/>
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[12px]">
            Certifications
          </div>
          <div className="text-[14px] text-grey-800">
            Select up to five (5) nationally recognized certifications that you currently hold
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-2">
              <StyledSelect label="Industry Certification 1" placeholder="None" id="profile-certification1" options={genders}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Industry Certification 2" placeholder="None" id="profile-certification2" options={genders}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Industry Certification 3" placeholder="None" id="profile-certification3" options={genders}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Industry Certification 4" placeholder="None" id="profile-certification4" options={genders}/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Industry Certification 5" placeholder="None" id="profile-certification5" options={genders}/>
            </div>
          </div>

          <div className="text-[14px] text-grey-800 mt-[18px]">
            Select if you have either or both of these certifications
          </div>

          <div className="grid grid-cols-6 gap-4 mt-[9px]">
            <div className="col-span-3">
              <StyledButton text="Automated External Defibrillator (AED)" status="checked" />
            </div>
            <div className="col-span-3">
              <StyledButton text="Cardiopulmonary Resuscitation (CPR)" status="normal" />
            </div>
          </div>
        </div>
        {/* section-pagination */}
        <div className="mt-[50px] text-center pb-[59px]">
          <span className="text-grey-800 text-[14px]">&lt; PREVIOUS /</span>
          <span className="text-purple-200 text-[14px]">NEXT &gt;</span>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserTwo;
