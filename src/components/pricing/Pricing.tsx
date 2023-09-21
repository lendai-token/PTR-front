
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";

import "./style.scss";
import StyledReadOnlyRatingBar from "../common/StyledReadOnlyRatingBar";
import { ratings } from "../../app/const/selectOptions";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import avatarExample from "../../assets/imgs/create-user/avatar-example.svg";
import logo from "../../assets/imgs/logo.svg";
import { CheckCircle } from '@mui/icons-material';

const Pricing = () => {
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
        <div className="pricing-banner h-[196px] relative">
          <div className="absolute top-2/4 left-2/4 text-[45px] -translate-x-1/2 -translate-y-1/2 text-white">
            <img src={logo} alt="logo.svg" className="mx-auto mb-[24px]" />
            <div>A Plan for Everyone</div>
          </div>
        </div>

        <div className="px-[160px] pb-[120px]">
          {/* Comment */}
          <div className="text-center font-light pt-[20px] text-black-300">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.
          </div>
          {/* month-select-part */}
          <div className="pt-[44px] text-center pb-[44px]">
            <span className="bg-blue-100 rounded-[999px] px-[24px] py-[10px] text-white cursor-pointer">1 Month</span>
            <span className="rounded-[999px] px-[24px] py-[10px] cursor-pointer text-black-400">6 Months</span>
            <span className="rounded-[999px] px-[24px] py-[10px] cursor-pointer text-black-400">12 Months</span>
          </div>
          {/* subscription-card-part */}
          <div className="grid grid-cols-3 gap-[40px]">
            <Card sx={{borderRadius: '8px'}}>
              <CardContent>
                <div className="text-center pt-[16px] pb-[16px]">
                  <div className="mb-[16px]"><span className="bg-blue-100 text-[18px] text-white font-bold px-[20px] py-[8px] rounded-[50px]">Single</span></div>
                  <div><span className="font-bold text-black-300 text-[54px]">$25&nbsp;</span><span className="text-black-300">/month</span></div>
                </div>
                <div className="bg-blue-100 py-[9px] px-[10px] text-white rounded-[12px]">
                  <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[25px] font-bold">1 Active Job Post</span></div>
                  <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[22px]">Unlimited Applicants</span></div>
                </div>
                <div className="my-[26px] px-[10px]">
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold text-black-300">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button className="w-full py-[10px] bg-blue-100 font-bold rounded-[8px] text-white">Sign Up</button>
                </div>
              </CardContent>
            </Card>
            <Card sx={{borderRadius: '8px', background: '#1273EB', padding: 0}}>
              <CardContent sx={{padding: 0}}>
                <div className="text-center pt-[16px] pb-[16px]">
                  <div className="mt-[16px] mb-[16px]"><span className="bg-white text-[18px] font-bold px-[20px] py-[8px] rounded-[50px]">Professional</span></div>
                  <div><span className="font-bold text-white text-[54px]">$179&nbsp;</span><span className="text-white">/month</span></div>
                </div>
                <div className="bg-purple-100 py-[9px] px-[10px] text-white">
                  <div className="px-[16px]">
                    <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[25px] font-bold">2 Active Job Post</span></div>
                    <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[22px]">Unlimited Applicants</span></div>
                  </div>
                </div>
                <div className="my-[26px] px-[26px]">
                  <div className="flex"><span><CheckCircle className="text-white" /></span><span className="pl-[10px] font-bold pb-[13px] text-white">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><CheckCircle className="text-white" /></span><span className="pl-[10px] font-bold pb-[13px] text-white">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><span><CheckCircle className="text-white" /></span><span className="pl-[10px] font-bold text-white">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button className="w-full py-[10px] bg-white font-bold rounded-[8px] text-black">Sign Up</button>
                </div>
              </CardContent>
            </Card>
            <Card sx={{borderRadius: '8px'}}>
              <CardContent>
                <div className="text-center pt-[16px] pb-[16px]">
                  <div className="mb-[16px]"><span className="bg-blue-100 text-[18px] text-white font-bold px-[20px] py-[8px] rounded-[50px]">Single</span></div>
                  <div><span className="font-bold text-black-300 text-[54px]">$299&nbsp;</span><span className="text-black-300">/month</span></div>
                </div>
                <div className="bg-blue-100 py-[9px] px-[10px] text-white rounded-[12px]">
                  <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[25px] font-bold">4 Active Job Post</span></div>
                  <div className="flex items-center"><span><CheckCircle /></span><span className="pl-[10px] text-[22px]">Unlimited Applicants</span></div>
                </div>
                <div className="my-[26px] px-[10px]">
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><span><CheckCircle className="text-purple-200" /></span><span className="pl-[10px] font-bold text-black-300">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button className="w-full py-[10px] bg-blue-100 font-bold rounded-[8px] text-white">Sign Up</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    );
  }
  return <>{content}</>;
};

export default Pricing;
