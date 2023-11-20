
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
import favor from "../../assets/imgs/pricing/favor.png";

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
  const [selectedprice, selectPrice] = useState("1");


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

  const navigateSignUp= () => () => {
    navigate('/emp/signup' );
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

        <div className="text-center pt-[50px]">
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
                <div className="absolute -translate-x-[30%] translate-y-[10px] text-[25px] font-bold">
                Pick Your Plan
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center relative">
                  <span className="text-[14px] font-bold text-white">2</span>
                </div>
                <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold">
                Set Up Account
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">3</span>
                </div>
                <div className="absolute -translate-x-[33%] translate-y-[10px] font-bold">
                Company Profile
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">4</span>
                </div>
                <div className="absolute -translate-x-[30%] translate-y-[10px] font-bold">
                Billing Information
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">5</span>
                </div>
                <div className="absolute -translate-x-[10%] translate-y-[10px] font-bold whitespace-nowrap">
                  Post a Job
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="px-[160px] pb-[120px] max-w-7xl mx-auto">
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
                  <div className="flex items-center flex-col"><span className="text-[25px] font-bold">1 Active Job Post</span></div>
                  <div className="flex items-center flex-col"><span className="text-[22px]">Unlimited Applicants</span></div>
                </div>
                <div className="my-[26px] px-[10px]">
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div></span><span className="pl-[10px] font-bold text-black-300">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button onClick={navigateSignUp()} className="w-full py-[10px] bg-blue-100 font-bold rounded-[8px] text-white">Sign Up</button>
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
                    <div className="flex items-center flex-col"><span className="text-[25px] font-bold">2 Active Job Post</span></div>
                    <div className="flex items-center flex-col"><span className="text-[22px]">Unlimited Applicants</span></div>
                  </div>
                </div>
                <div className="my-[26px] px-[26px]">
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-white"></div> </span><span className="pl-[10px] font-bold pb-[13px] text-white">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-white"></div> </span><span className="pl-[10px] font-bold pb-[13px] text-white">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-white"></div> </span><span className="pl-[10px] font-bold text-white">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button onClick={navigateSignUp()} className="w-full py-[10px] bg-white font-bold rounded-[8px] text-black">Sign Up</button>
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
                  <div className="flex items-center"><span className="pl-[10px] text-[25px] font-bold">4 Active Job Post</span></div>
                  <div className="flex items-center"><span className="pl-[10px] text-[22px]">Unlimited Applicants</span></div>
                </div>
                <div className="my-[26px] px-[10px]">
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Your jobs will be published to PTRoster&rsquo;s website and our partner sites</span></div>
                  <div className="flex"><span><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div></span><span className="pl-[10px] font-bold pb-[13px] text-black-300">Our jobs will be automatically emailed to candidates who are looking for similar roles and positions</span></div>
                  <div className="flex"><div className="h-[8px] w-[8px] rounded mt-[7px] bg-blue-100"></div><span className="pl-[10px] font-bold text-black-300">30-day publishing for each post</span></div>
                </div>
                <div className="text-center pb-[10px] px-[40px]">
                  <button onClick={navigateSignUp()} className="w-full py-[10px] bg-blue-100 font-bold rounded-[8px] text-white">Sign Up</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    );
  }else if(isMobile){
    content = (
      <div className="mobile-pricing-page px-[24px]">
        <div className="h-[164px] w-[238px] px-[10px] mobile-pricing-page-title flex flex-col">
          <h1 className="h-[56px] mt-[48px]">
            Choose your subscription plan
          </h1>
          <p className="mt-[16px]">
            And get a 7-day free trial
          </p>
        </div>
        <div className="mobile-pricing-page-card-part ">
          <button onClick={() => selectPrice("1")} className=" w-full cursor-pointer">
            <div className={`h-[67px] flex flex-row justify-between px-[26px] relative rounded-[16px] ${selectedprice === "1" ? 'bg-[#1273EB] text-[white]' : 'border-half'}`}>
              <div className="flex flex-row justify-start space-x-[10px]">
                <input
                  type="radio"
                  className="w-[16px]"
                  name="price"
                  value="1"
                  checked={selectedprice === "1"}
                  onChange={() => selectPrice("1")}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[14px] font-[800] text-start">
                  Single
                  </p>
                  <p className="font-[400] text-[10px] ">
                  -66% discount
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-[400] text-[16px]">$ 25</p>
                <p className="font-[400] text-[10px]">/month</p>
              </div>
              {
                selectedprice == "1" ? <img src={favor} className="absolute top-[-10px] right-[-5px]"/> : ""
              }
              
            </div>
          </button>

          <button onClick={() => selectPrice("2")} className="w-full cursor-pointer mt-[12px] ">
            <div className={`h-[67px] flex flex-row justify-between px-[26px] relative rounded-[16px] ${selectedprice === "2" ? 'bg-[#1273EB] text-[white]' : 'border-half'}`}>
              <div className="flex flex-row justify-start space-x-[10px]">
                <input
                  type="radio"
                  className="w-[16px]"
                  name="price"
                  value="3"
                  checked={selectedprice === "2"}
                  onChange={() => selectPrice("2")}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[14px] font-[800] text-start">
                  Single
                  </p>
                  <p className="font-[400] text-[10px]">
                  -66% discount
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-[400] text-[16px]">$ 25</p>
                <p className="font-[400] text-[10px]">/month</p>
              </div>
              {
                selectedprice == "2" ? <img src={favor} className="absolute top-[-10px] right-[-5px]"/> : ""
              }
            </div>
          </button>

          <button onClick={() => selectPrice("3")} className="w-full cursor-pointer mt-[12px]">
          <div className={`h-[67px] flex flex-row justify-between px-[26px] relative rounded-[16px] ${selectedprice === "3" ? 'bg-[#1273EB] text-[white]' : 'border-half'}`}>
              <div className="flex flex-row justify-start space-x-[10px]">
                <input
                  type="radio"
                  className="w-[16px]"
                  name="price"
                  value="3"
                  checked={selectedprice === "3"}
                  onChange={() => selectPrice("3")}
                />

                <div className="flex flex-col justify-center">
                  <p className="text-[14px] font-[800] text-start">
                  Single
                  </p>
                  <p className="font-[400] text-[10px]">
                  -66% discount
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-[400] text-[16px]">$ 25</p>
                <p className="font-[400] text-[10px]">/month</p>
              </div>
              {
                selectedprice == "3" ? <img src={favor} className="absolute top-[-10px] right-[-5px]"/> : ""
              }
            </div>
          </button>
        </div>
        <div className="my-[32px] mobile-pricing-page-summary">
          { selectedprice == "1" ? 
              <div className="px-[24px] rounded-[16px] bg-[#F8F9FE] relative">
              <p className="pt-[24px] text-[16px] font-[400]">
                You'll get :
              </p>
              <div className="mt-[37px] w-full h-[78px] rounded-[10.27px] bg-[#1273EB] text-[white] text-center  flex flex-col justify-center">
                <p className="text-[21.39px] font-[700]">1 Active Job Post</p>
                <p className="text-[18.82px] font-[400]">Unlimited Applicants</p>
              </div>
              <ul className="px-[20px] pb-[20px]">
                <li>
                  Your jobs will be published to PTRoster’s website and our partner sites
                </li>
                <li>
                  our jobs will be automatically emailed to candidates who are looking for similar roles and positions
                </li>
                <li>
                  30-day publishing for each post
                </li>
              </ul>
            </div>
            : ""  
          }
          
          { selectedprice == "2" ? 

            <div className="px-[24px] rounded-[16px] bg-[#F8F9FE] relative mt-[10px]">
              <p className="pt-[24px] text-[16px] font-[400]">
                You'll get :
              </p>
              <div className="mt-[37px] w-full h-[78px] rounded-[10.27px] bg-[#1273EB] text-[white] text-center  flex flex-col justify-center">
                <p className="text-[21.39px] font-[700]">2 Active Job Post</p>
                <p className="text-[18.82px] font-[400]">Unlimited Applicants</p>
              </div>
              <ul className="px-[20px] pb-[20px]">
                  <li>
                  Your jobs will be published to PTRoster’s website and our partner sites
                </li>
                <li>
                  our jobs will be automatically emailed to candidates who are looking for similar roles and positions
                </li>
                <li>
                  30-day publishing for each post
                </li>
              </ul>
            </div> : ""
          }

          { selectedprice == "3" ? 

            <div className="px-[24px] rounded-[16px] bg-[#F8F9FE] relative mt-[10px]">
              <p className="pt-[24px] text-[16px] font-[400]">
                You'll get :
              </p>
              <div className="mt-[37px] w-full h-[78px] rounded-[10.27px] bg-[#1273EB] text-[white] text-center  flex flex-col justify-center">
                <p className="text-[21.39px] font-[700]">3 Active Job Post</p>
                <p className="text-[18.82px] font-[400]">Unlimited Applicants</p>
              </div>
              <ul className="px-[20px] pb-[20px]">
                <li>
                  Your jobs will be published to PTRoster’s website and our partner sites
                </li>
                <li>
                  our jobs will be automatically emailed to candidates who are looking for similar roles and positions
                </li>
                <li>
                  30-day publishing for each post
                </li>
              </ul>
            </div> : ""
          }
        </div>

        <div className="mt-[24px] mobile-pricing-page-signup px-[10px]">
          <button onClick={handleClick} className="bg-[#1273EB] rounded-[12px] h-[48px] w-full text-[white] text-[12px] font-[600]">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Pricing;
