
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";
import "./style.scss";
import logoDark from "../../assets/imgs/about/logo-dark.png";


const About = () => {
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
        {/* top banner */}
        <div className="about-banner relative h-[346px]">
          <div className="max-w-[1440px] mx-auto absolute top-2/4 left-2/4 text-[45px] -translate-x-1/2 -translate-y-1/2 text-white w-full px-[200px]">
            <div className="flex items-center justify-center">
              <div className="px-[20px] py-[6px] rounded-[8px] flex items-center">
                <span className="pr-4">ABOUT</span><img src={logoDark} alt="dark logo image" className="h-[35px]" />
              </div>
            </div>
            <div className="text-[25px] pt-[40px]">
              Welcome to PTRoster, a destination for connecting passionate professionals with rewarding career opportunities in the dynamic world of health and fitness. The heart of a thriving health and fitness industry lies in the people who drive it, and our mission is to empower both job seekers and employers to find their perfect match.
            </div>
          </div>
        </div>
        {/* section-input */}
        <div className="px-[165px] pt-[100px] pb-[80px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <div className="text-end">
                <span className="rounded-tl-[28px] py-[4px] text-[45px] font-bold italic text-black-800">
                  OUR STORY
                </span>
              </div>
              <div className="text-[21px] text-grey-1400 text-right pt-[20px]">
                Our journey began with a shared passion for health, wellness, and fitness. The founding team, composed of industry insiders and visionaries with over 20 years in the industry, recognized the challenges faced by fitness professionals and employers alike. From gym owners struggling to find the ideal personal trainer to fitness enthusiasts seeking their dream job, there was a gap that needed filling.
              </div>
            </div>

            <div className="ml-[50px] background-ourstory rounded-[8px]"></div>

            <div className="mr-[50px] mt-[100px]">
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-1 grid grid-rows-6 grid-flow-col gap-4 h-[320px]">
                  <div className="row-start-1 row-end-7 setup1-background col-span-2 setup1-background rounded-[8px]"></div>
                  <div className="row-start-2 row-span-5 col-span-1 setup2-background rounded-[8px]"></div>
                </div>
                <div className="row-span-1 grid grid-rows-6 grid-flow-col gap-4 h-[320px]">
                  <div className="row-start-1 row-span-5 col-span-1 setup3-background rounded-[8px]"></div>
                  <div className="row-start-1 row-end-7 setup4-background col-span-2 setup1-background rounded-[8px]"></div>
                </div>
              </div>
            </div>

            <div className="mt-[100px]">
              <span className="rounded-tr-[28px] py-[4px] text-black-800 text-[45px] font-bold italic uppercase">
                What Sets Us Apart
              </span>
              <div className="text-[21px] text-grey-1400 pt-[20px]">
                At PTRoster, we're more than just a job board; we're a supportive ecosystem that fosters growth, well-being, and success. Here's what sets us apart:
                <div className="flex mt-[30px]">
                  <div className="mr-[16px] mt-[5px]"><span className="bg-blue-900 rounded-[100%] text-white text-[10px] font-semibold p-[4px] w-[23px] flex justify-center">1</span></div>
                  <div><span>Specialized Focus: We exclusively serve the health and fitness industry, which means we understand the unique needs, skills, and aspirations of both job seekers and employers in this industry.</span></div>
                </div>
                <div className="flex mt-[30px]">
                  <div className="mr-[16px] mt-[5px]"><span className="bg-blue-900 rounded-[100%] text-white text-[10px] font-semibold p-[4px] w-[23px] flex justify-center">2</span></div>
                  <div><span>Personalized Matchmaking: Our platform utilizes data-driven insights to match the right talent with the right opportunities. We're not just about quantity; we're about quality connections.</span></div>
                </div>
                <div className="flex mt-[30px]">
                  <div className="mr-[16px] mt-[5px]"><span className="bg-blue-900 rounded-[100%] text-white text-[10px] font-semibold p-[4px] w-[23px] flex justify-center">3</span></div>
                  <div><span>Continuous Improvement: We're committed to staying ahead of industry trends and technology. Our platform evolves to meet the changing demands of the fitness job market.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom banner */}
        <div className="pb-[80px]">
          <div className="bottom-banner">
            <div className="pt-[18px] max-w-[1440px] mx-auto">
              <div className="flex items-center justify-center">
                <div className="px-[20px] py-[6px] rounded-[8px] flex items-center">
                  <span className="pr-4 uppercase text-[45px] font-bold italic text-white">Join Our Fitness Revolution</span>
                </div>
              </div>
              <div className="text-[21px] pt-[40px] text-white font-normal px-[300px] text-center">
                Welcome to PTRoster, a destination for connecting passionate professionals with rewarding career opportunities in the dynamic world of health and fitness. The heart of a thriving health and fitness industry lies in the people who drive it, and our mission is to empower both job seekers and employers to find their perfect match.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if(isTablet){

  } else {
    content = (
      <div className="bg-[#E8F4FC]">
        <div className="mobile-banner h-[359px] text-center">
          <span>ABOUT</span>
          <h1>
            Welcome to PTRoster, a destination for connecting passionate professionals with rewarding career opportunities in the dynamic world of health and fitness. The heart of a thriving health and fitness industry lies in the people who drive it, and our mission is to empower both job seekers and employers to find their perfect match.
          </h1>
        </div>
        <div className="mobile-ourstory-part text-center">
          <div className="mx-[20px] mt-[20px] mobile-ourstory h-[290px] rounded-[12px]"></div>
          <div className="pt-[28px] px-[26px]">
            <span>
              Our Story 
            </span>
            <h1>
              Our journey began with a shared passion for health, wellness, and fitness. The founding team, composed of industry insiders and visionaries with over 20 years in the industry, recognized the challenges faced by fitness professionals and employers alike. From gym owners struggling to find the ideal personal trainer to fitness enthusiasts seeking their dream job, there was a gap that needed filling.
            </h1>
          </div>
        </div>
        <div className="mobile-apart-part px-[55px] pb-[30px]">
          <div className="mt-[50px] ">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="row-span-1 grid grid-rows-6 grid-flow-col gap-4 h-[188px]">
                <div className="row-start-1 row-end-7 setup1-background col-span-2 setup1-background rounded-[8px] w-[209px]"></div>
                <div className="row-start-2 row-span-5 col-span-1 setup5-background rounded-[8px] w-[98px]"></div>
              </div>
              <div className="row-span-1 grid grid-rows-6 grid-flow-col gap-4 h-[188px]">
                <div className="row-start-1 row-span-5 col-span-1 setup6-background rounded-[8px] w-[98px]"></div>
                <div className="row-start-1 row-end-7 setup4-background col-span-2 setup1-background rounded-[8px] w-[209px]"></div>
              </div>
            </div>
          </div>
          <div className="text-center mobile-apart-part-title mt-[54.8px]">
            <label> What Sets Us Apart </label>
            <h2 className="mt-[21px] w-[330px]">At PTRoster, we're more than just a job board; we're a supportive ecosystem that fosters growth, well-being, and success. Here's what sets us apart:</h2>
          </div>
          <div className="mobile-apart-part-content text-center">
            <div className="flex flex-col items-center mt-[10px]">
              <div className="bg-[#006FFD] w-[24px] h-[24px] rounded-[20px] text-center">
                <span>1</span>
              </div>
              <div>
                <h1>
                  Specialized Focus: We exclusively serve the health and fitness industry, which means we understand the unique needs, skills, and aspirations of both job seekers and employers in this industry.
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[10px]">
              <div className="bg-[#006FFD] w-[24px] h-[24px] rounded-[20px] text-center">
                <span>2</span>
              </div>
              <div>
                <h1>
                  Personalized Matchmaking: Our platform utilizes data-driven insights to match the right talent with the right opportunities. We're not just about quantity; we're about quality connections.
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[10px]">
              <div className="bg-[#006FFD] w-[24px] h-[24px] rounded-[20px] text-center">
                <span>3</span>
              </div>
              <div>
                <h1>
                  Personalized Matchmaking: Our platform utilizes data-driven insights to match the right talent with the right opportunities. We're not just about quantity; we're about quality connections.
                </h1> 
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-footer-banner h-[388px] px-[41px] text-center">
          <h1 className="px-[8px]"> Join Our Fitness Revolution </h1>
          <h2 className="w-[367px] py-[10px]">
            Whether you're a fitness professional looking to take the next step in your career or an employer seeking exceptional talent, PTRoster is your trusted partner. Join us in shaping the future of the health and fitness industry. Start your journey with us today!
          </h2>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default About;
