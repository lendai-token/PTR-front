
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
import StyledSelect from "../common/StyledSelect";
import StyledButton from "../common/StyledButton";
import { positions } from "../../app/const/selectOptions";
const JobOpen = () => {
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
            POST NEW JOB OPENING
          </div>
        </div>
        {/* section-input */}
        <div className="max-w-[810px] mx-auto mt-[32px]">
          <div className="text-[20px] font-bold text-black-300">
            Job Info
          </div>

          <div className="grid grid-cols-6 gap-x-4 gap-y-1 mt-[16px]">
            <div className="col-span-4">
              <StyledTextField label="Job Post Location" placeholder="24 Hour Fitness – Houston" id="job-open-location"/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Position" placeholder="Drop down choice" id="job-open-position" options={positions}/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Postal/Zip" placeholder="10000" id="job-open-zipcode"/>
            </div>
            <div className="col-span-2">
              <StyledTextField label="Internal Job Title" placeholder="Trainer" id="job-open-internal"/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Level of Work" placeholder="Drop down choice" id="job-open-level" options={positions}/>
            </div>
            <div className="col-span-6">
              <div className="text-[14px] pl-[6px] pb-[4px] text-black-300 flex justify-between items-center">
                <span>Job Description</span>
                <span>88/100</span>
              </div>
              <div className="mt-[3px]">
                <StyledTextArea />
              </div>
            </div>

            <div className="col-span-6">
              <div className="text-[20px] font-bold text-black-300 mt-[18px]">
                Education & Work Experience
              </div>
              <div className="text-[14px] text-grey-800">
                Select the level of education and work experience you seek for this specific job position?
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-6 gap-x-4">
                <div className="col-span-3">
                  <StyledSelect label="Education Level" placeholder="Drop down choice" id="job-open-edu-level" options={positions}/>
                </div>
                <div className="col-span-3">
                  <StyledTextField label="Fitness Industry Experience" placeholder="none" id="job-open-fitness-exp"/>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Company&apos;s Website" placeholder="website" id="job-open-website"/>
            </div>
            <div className="col-span-3">
              <StyledTextField label="Company&apos;s LinkedIn" placeholder="link" id="job-open-linkdin"/>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <StyledTextField label="Fitness Sales Experience" placeholder="none" id="job-open-fitness-sales"/>
            </div>
            <div className="col-span-2">
              <StyledSelect label="Management Experience" placeholder="Drop down choice" id="job-open-management-exp" options={positions}/>
            </div>

            <div className="col-span-6 mb-[13px]">
              <div className="text-[20px] font-bold text-black-300 mt-[18px]">
                Certifications and Languages Requirement
              </div>
              <div className="text-[14px] text-grey-800">
                <div>
                  Select what level of certification and language requirements you seek for this specific job position.
                </div>
                <div>•	Pick up to five (5) levels of certifications. •	Pick up to three (3) languages</div>

              </div>
            </div>
            <div className="col-span-2">
              <StyledButton text="Require National Certification" status="checked" />
            </div>
            <div className="col-span-2">
              <StyledButton text="Require CPR Certification" status="checked" />
            </div>
            <div className="col-span-2">
              <StyledButton text="Require AED Certification" status="normal" />
            </div>
            <div className="col-span-3">
             <StyledTextField label="Required Certification #1" placeholder="none" id="job-open-cert1"/>
            </div>
            <div className="col-span-3">
             <StyledTextField label="Required Certification #2" placeholder="none" id="job-open-cert2"/>
            </div>
          </div>
        </div>
        {/* section upload resume */}
        <div className="mt-[42px] flex justify-center pb-[24px]">
          <Link to="/job/management">
            <StyledButton text="Post New Job" status="contrast-active" />
          </Link>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default JobOpen;
