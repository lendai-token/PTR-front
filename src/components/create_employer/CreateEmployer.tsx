
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";

import "./style.scss";
import ratingImage from "../../assets/imgs/create-user/rating-image.svg";
import StyledRatingBar from "../common/StyledRatingBar";
import { ratings } from "../../app/const/selectOptions";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import EmployerImage from "../../assets/imgs/employer/employer-avatar.svg";
import edit from "../../assets/imgs/employer/edit.svg";
import StyledTextField from "../common/StyledTextField";
import StyledTextArea from "../common/StyledTextArea";
import StyledButton from "../common/StyledButton";

const CreateEmployer = () => {
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
            <Avatar
              alt="Company avatar"
              src={ EmployerImage }
              sx={{ width: 172, height: 172 }}
              className="company-avatar"
            />
            <div className="absolute right-0 top-0 cursor-pointer">
              <img src={ edit } alt="edit svg" />
            </div>
          </div>
        </div>
        {/* section-input */}
        <div className="max-w-[810px] mx-auto mt-[32px]">
          <div className="text-[20px] font-bold text-black-300">
            Employer Profile
          </div>

          <div className="grid grid-cols-6 gap-x-4 gap-y-1 mt-[16px]">
            <div className="col-span-3">
              <StyledTextField label="CompanyName" placeholder="Adam Mathew" id="emp-profile-name"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Primary Contact&apos;s Name" placeholder="company" id="emp-profile-contact-name"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Primary Contact&apos;s Email" placeholder="Adam Mathew@gmail.com" id="emp-profile-email"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Primary Contact&apos;s Cell Phone" placeholder="xxx-xxx-xx" id="emp-profile-phone"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Headquarters&apos; City" placeholder="New York" id="emp-profile-city"/>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-6 gap-x-4">
                <div className="col-span-3">
                  <StyledTextField label="State/Province" placeholder="New York" id="emp-profile-state"/>
                </div>
                <div className="col-span-3">
                  <StyledTextField label="Postal/Zip" placeholder="10000" id="emp-profile-zipcode"/>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Company&apos;s Website" placeholder="website" id="emp-profile-website"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Company&apos;s LinkedIn" placeholder="link" id="emp-profile-linkdin"/>
            </div>
          </div>

          <div className="text-[20px] font-bold text-black-300 mt-[18px]">
            Company Overview
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
        <div className="mt-[42px] flex justify-center pb-[24px]">
          <StyledButton text="Apply" status="checked" />
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateEmployer;
