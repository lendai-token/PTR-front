
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

const CreateUserThree = () => {
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
                <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold">
                  Credentials
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">3</span>
                </div>
                <div className="absolute -translate-x-[33%] translate-y-[10px] font-bold text-[20px]">
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
            Positions
          </div>
          <div className="text-[14px] text-grey-800">
            Select the positions you would like to be considered for. - Pick up to five (5)
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            {
              positions.map((item) => {
                return (
                  <div className="col-span-2">
                    <StyledButton text={item.text} status={item.status} />
                  </div>
                )
              })
            }
            
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[18px]">
            Levels
          </div>
          <div className="text-[14px] text-grey-800">
            Select the level of work you are looking for. – Pick up to three (3)
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-2">
              <StyledButton text="Full Time" status="normal" />
            </div>
            <div className="col-span-2">
              <StyledButton text="Part Time" status="normal" />
            </div>
            <div className="col-span-2">
              <StyledButton text="Contract" status="normal" />
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[18px]">
            Relocation
          </div>
          <div className="text-[14px] text-grey-800">
            Are you willing to relocate for the right job?
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-2">
              <StyledButton text="Yes" status="active" />
            </div>
            <div className="col-span-2">
              <StyledButton text="No" status="normal" />
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[18px]">
           If yes, where would you relocate for the ideal job?
          </div>
          <div className="grid grid-cols-6 gap-4 mt-[16px]">
            <div className="col-span-2">
              <StyledTextField label="State 1" placeholder="Pick a state" id="profile-state1"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="City 1" placeholder="Pick a city" id="profile-city1"/>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <StyledTextField label="State 2" placeholder="Pick a state" id="profile-state2"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="City 2" placeholder="Pick a city" id="profile-city2"/>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <StyledTextField label="State 3" placeholder="Pick a state" id="profile-state3"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="City 3" placeholder="Pick a city" id="profile-city3"/>
            </div>
            <div className="col-span-2"></div>
          </div>
          
        </div>
        {/* section-pagination */}
        <div className="mt-[50px] text-center pb-[59px]">
          <span className="text-grey-800 text-[14px]"><Link to="/create-user/step2">&lt; PREVIOUS</Link>&nbsp;/&nbsp;</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/step4">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserThree;
