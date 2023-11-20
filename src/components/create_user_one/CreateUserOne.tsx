
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
import { salutations, genders } from "../../app/const/selectOptions";

const CreateUserOne = () => {
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
                <div className="absolute -translate-x-[30%] translate-y-[10px] text-[20px] font-bold">
                  Personal
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center relative">
                  <span className="text-[14px] font-bold text-white">2</span>
                </div>
                <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold">
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
            Personal
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[12px]">
            <div className="col-span-1">
              <StyledSelect label="Salutation/Title" placeholder="None" id="profile-salutation" options={salutations}/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="First Name" placeholder="Adam" id="profile-firstname"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Last Name" placeholder="Rajmuller" id="profile-lastname"/>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-1">
              <StyledSelect label="Gender" placeholder="None" id="profile-gender" options={genders}/>
            </div>
            <div className="col-span-1">
              <StyledTextField label="Birth Date" placeholder="10/09/1994" id="profile-birthdate"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Cell Phone" placeholder="+84 | 065645645" id="profile-cellphone"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Email" placeholder="rajmuller@gmail.com" id="profile-email"/>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-1">
              <StyledTextField label="City" placeholder="Newyork" id="profile-city" />
            </div>
            <div className="col-span-1">
              <StyledTextField label="State" placeholder="Texas" id="profile-state"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Postal/Zip" placeholder="10000" id="profile-postal"/>
            </div>
          </div>
        </div>
        <div className="max-w-[740px] mx-auto mt-[21px]">
          <div className="text-[20px] font-bold text-black-300">
            Languages
          </div>
          <div className="text-grey-800">
            Select all languages that you know including your mother tongue.
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[12px]">
            <div className="col-span-2">
              <StyledTextField label="Language1" placeholder="English" id="profile-language1" />
            </div>
            <div className="col-span-2">
              <StyledTextField label="Language2" placeholder="English" id="profile-language2"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Language3" placeholder="English" id="profile-language3"/>
            </div>
          </div>
        </div>
        {/* section-pagination */}
        <div className="mt-[50px] text-center pb-[59px]">
          <span className="text-grey-800 text-[14px]">&lt; PREVIOUS /</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/step2">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }else if(isMobile){
    content = (
      <div className="bg-[#E8F4FC]">
        {/* banner */}
        <div className="create1-mobile-banner bg-[#1273EB] h-[126px] rounded-[8px] flex flex-row item-center">
          <div className="basis-1/3 p-[13px]">
            <div className="create1-mobile-banner-spinner w-[100px] h-[100px] flex justify-center items-center"> 
              <span className="progress-status-text">1 of 5</span>
            </div>
          </div>
          <div className="basis-2/3 flex justify-start items-center">
            <div className="create1-mobile-banner-title">
              <h1>Getting to Know You</h1>
              <h1>Personal</h1>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="create1-mobile-content  px-[20px] mt-[15px]">
          <div className="create1-mobile-content-personal">
            <div>
              <h1>Personal</h1>
              <div className="flex flex-row space-x-4 mt-[10px]">
                <div className="basis-1/3">
                  <div>
                    <StyledSelect label="Salutation/Title" placeholder="None" id="profile-salutation" options={salutations}/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledSelect label="Gender" placeholder="None" id="profile-gender" options={genders}/>
                  </div>
                  <div  className="mt-[10px]">
                    <StyledTextField label="Birth Date" placeholder="10/09/1994" id="profile-birthdate"/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="City" placeholder="Newyork" id="profile-city" />
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="State" placeholder="Texas" id="profile-state"/>
                  </div>
                </div>

                <div className="basis-2/3">
                  <div>
                    <StyledTextField label="First Name" placeholder="Adam" id="profile-firstname"/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="Last Name" placeholder="Rajmuller" id="profile-lastname"/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="Cell Phone" placeholder="+84 | 065645645" id="profile-cellphone"/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="Email" placeholder="rajmuller@gmail.com" id="profile-email"/>
                  </div>
                  <div className="mt-[10px]">
                    <StyledTextField label="Postal/Zip" placeholder="10000" id="profile-postal"/>
                  </div>
                </div>


              </div>
            </div>
            <div className="mt-[20px]">
              <h1>
                Languages
              </h1>
              <p className="mt-[10px] text-grey-800 text-[13px] font-[400]">
                List all languages that you know including your mother tongue.
              </p>
              <div className="grid grid-cols-6 gap-4 mt-[12px]">
                <div className="col-span-2">
                  <StyledTextField label="Language1" placeholder="English" id="profile-language1" />
                </div>
                <div className="col-span-2">
                  <StyledTextField label="Language2" placeholder="English" id="profile-language2"/>
                </div>
                <div className="col-span-2">
                  <StyledTextField label="Language3" placeholder="English" id="profile-language3"/>
                </div>
              </div>
            </div>
          </div>
        </div>  

        {/* section-pagination */}
        <div className="mt-[24px] text-center pb-[25px]">
          <span className="text-grey-800 text-[14px]">&lt; PREVIOUS /</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/step2">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserOne;
