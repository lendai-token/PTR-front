
import React, { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { setLastActivity } from "./homeSlice";
import { setIsCompleted } from "./homeSlice";
import { setOrderId } from "./homeSlice";
import url from "../../app/const/url";
import SearchBar from "./SearchBar";
import activity1 from "../../assets/imgs/landing/activity-1.svg";
import activity2 from "../../assets/imgs/landing/activity-2.svg";
import activity3 from "../../assets/imgs/landing/activity-3.svg";
import activity4 from "../../assets/imgs/landing/activity-4.svg";
import activity5 from "../../assets/imgs/landing/activity-5.svg";
import activity6 from "../../assets/imgs/landing/activity-6.svg";
import activity7 from "../../assets/imgs/landing/activity-7.svg";
import activity8 from "../../assets/imgs/landing/activity-8.svg";
import activity9 from "../../assets/imgs/landing/activity-9.svg";
import coachFrame from "../../assets/imgs/landing/frame-coach.svg";
import iconsFrame from "../../assets/imgs/landing/frame-icons.svg";
import communityFrame from "../../assets/imgs/landing/frame-community.svg";
import TrainerSlider from "./TrainerSlider";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toString()));
    dispatch(setIsCompleted(false));
    dispatch(setOrderId(""));
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
      <div className="w-full flex flex-col items-center bg-background overflow-x-hidden">
        <div className="text-center w-full">
          {/* banner */}
          <div className="min-w-[740px] text-blue-100 relative">
            <video autoPlay loop muted className="w-full">
              <source src="./banner-movie.mp4" type='video/mp4' />
            </video>
            <div className="video-overlay"></div>
            <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-[58px] text-white font-bold w-full">
              <div className="relative">
                <div>
                  <p className="italic">DISCOVER YOUR PERFECT JOB</p>
                  <p className="italic">AT THE IDEAL FITNESS FACILITY</p>
                </div>
                <div className="absolute w-full mt-[25px]">
                  <SearchBar/>
                </div>
              </div>
            </div>
          </div>
          {/* section activities */}
          <div className="section-activities bg-grey-400">
            <div className="pt-[170px] text-[35px]">
              <span className="text-blue-100 font-bold">Explore&nbsp;</span>
              <span className="text-black-100 font-bold">activity images on PTRoster</span>
            </div>
            <div className="text-black-200 text-[20px] pt-[14px]">
              Looking for professional part-time, freelance jobs.
            </div>
            <div className="pt-[50px] pb-[86px]">
              <div className="grid grid-rows-3 grid-flow-col gap-4 px-[40px]">
                <div className="row-span-2 col-span-2 relative h-full w-full"><img src={activity1} alt="activity1" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity6} alt="activity6" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity7} alt="activity7" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity2} alt="activity2" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity4} alt="activity4" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity8} alt="activity8" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity3} alt="activity3" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity5} alt="activity5" className="object-cover w-full h-full"/></div>
                <div className="row-span-1 col-span-1 relative h-full w-full"><img src={activity9} alt="activity9" className="object-cover w-full h-full"/></div>
              </div>            
            </div>
          </div>
        </div>
        {/* section trainers */}
        <div className="section-trainers bg-white w-full pt-[50px] pb-[62px]">
          <div className="text-[35px] font-bold px-[40px] text-center">
            <span className="text-blue-100">Trainers&nbsp;</span>
            <span className="text-black-100">are full of passion and enthusiasm</span>
          </div>
          <div className="text-[20px] text-black-200 px-[40px] pb-[53px] text-center">
            We have top coaches ready to help you from all over the world wherever you are.
          </div>
          <div className="px-[25px]">
            <TrainerSlider />
          </div>
        </div>
        {/* section coach */}
        <div className="w-full bg-white">
          <div className="text-center font-bold text-[30px]">
            <span className="text-black-100">The smartest choice for&nbsp;</span>
            <span className="text-blue-100">Coaches like you</span>
          </div>
          <div className="text-center pb-[59px] relative">
            <span className="text-[20px] text-black-200">Whether you're looking for sports jobs, you'll find great jobs or coaches here</span>
            <img src={coachFrame} alt="coach-frame" className="absolute right-[100px] top-[75px]"/>
          </div>
          <div className="px-[165px] pb-[100px]">
            <div className="w-1/2">
              <div className="text-black-100 text-[22px] pb-[6px] font-bold">
                Jobs from around the world
              </div>
              <div className="text-black-200 text-[17px] pb-[29px]">
                This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
              </div>
              <div className="text-black-100 text-[22px] pb-[6px] font-bold">
                Top trainers
              </div>
              <div className="text-black-200 text-[17px] pb-[29px]">
                This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
              </div>
              <div className="text-black-100 text-[22px] pb-[6px] font-bold">
                Commitment to results exceeding expectations
              </div>
              <div className="text-black-200 text-[17px] pb-[29px]">
                This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
              </div>
              <div className="text-black-100 text-[22px] pb-[6px] font-bold">
                Freedom without geographical distance
              </div>
              <div className="text-black-200 text-[17px] pb-[29px]">
                This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
              </div>

            </div>
          </div>
        </div>
        {/* section icons */}
        <div className="w-full section-icons-frame pb-[132px] ">
          <img src={iconsFrame} alt="icons-frame" className="absolute right-[80px] pt-[45px]" />
          <div className="px-[160px] pt-[118px] pb-[6px]">
            <div className="w-1/2">
              <div className="text-white text-[35px]">
                <span>Sign up to find opportunities</span>
                <span><br />to <span className="text-blue-400">become our coach</span></span>
              </div>
              <div className="pb-[29px] text-white text-[20px]">
                This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
              </div>
              <button className="text-[14px] text-black-100 px-[30px] py-[10px] border border-white rounded-[8px] bg-grey-500">
                <Link to="#" >Explore icons</Link>
              </button>
            </div>
          </div>
        </div>
        {/* section community */}
        <div className="w-full pt-[141px] pb-[220px] bg-white relative">
          <div className="grid grid-cols-2">
            <div>
              <img src={communityFrame} alt="community-frame" className="absolute left-[100px] top-[100px]"/>
            </div>
            <div>
              <div className="text-[35px] pb-[19px] font-bold">
                <span className="text-black">Join the PTRoster&nbsp;</span>
                <span className="text-blue-100"><br />community of Fitness trainers</span>
              </div>
              <div>
                <div className="text-black text-[20px] pb-[34px]">
                  This is draft content written to serve as a template for a website, not official content. Correct content will be responded to later.
                </div>
              </div>
              <div>
                <button className="text-[14px] text-white px-[30px] py-[10px] border border-white rounded-[8px] bg-blue-100">
                  <Link to="#" >Join community</Link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Home;
