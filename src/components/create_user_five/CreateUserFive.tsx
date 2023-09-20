
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

const CreateUserFive = () => {
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
          <div className="progress-ruler mx-[260px] pt-[22px] relative mt-[22px] mb-[180px]">
            <div className=" w-[99%] m-auto flex justify-between items-center">
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
              <div className="bg-purple-200 h-[6px] w-[25%]"></div>
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
                <div className="absolute -translate-x-[9%] translate-y-[10px] font-bold">
                  Social
                </div>
              </div>
              <div>
                <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">5</span>
                </div>
                <div className="absolute -translate-x-[10%] translate-y-[10px] font-bold text-[20px]">
                  Rating
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="px-[300px]">
          {/* section-description */}
          <div className="grid grid-cols-4 gap-8 relative">
            <div className="col-span-3">
              <div className="text-[20px] font-bold text-black-300 mb-[8px]">
                What is a personal rating scale?
              </div>
              <div className="text-[14px] text-grey-800">
                It is a tool that future employers will use to evaluate and rate an individual's personal attributes, skills, and characteristics. It is designed to assess various qualities and competencies that are not easily quantifiable through traditional methods like academic grades or work experience. The following scale includes subjective criteria that can be essential in both personal and professional settings.
              </div>
            </div>
            <div className="col-span-1">
              <img src={ratingImage} alt="rating-image" className="absolute -top-[120px]" />
            </div>
          </div>

          <div className="mt-[8px]">
            <div className="text-[20px] font-bold text-black-300 mb-[8px]">
              What should you do when answering the following items?
            </div>
            <div className="text-[14px] text-grey-800">
              Be honest. The importance of the following personal rating scale for future employers lies in its ability to provide a more comprehensive and holistic view of your specific suitability for a particular job or work environment.
            </div>
          </div>
          {/* section rating stars */}
          <div className="mt-[20px] grid grid-cols-6 gap-4">
            {
              ratings.map((item)=>{
                return (
                  <div className="col-span-2">
                    <StyledRatingBar text={item.text}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* section-pagination */}
        <div className="mt-[50px] text-center pb-[59px]">
          <span className="text-grey-800 text-[14px]"><Link to="/create-user/step4">&lt; PREVIOUS</Link>&nbsp;/&nbsp;</span>
          <span className="text-purple-200 text-[14px]"><Link to="/create-user/final">NEXT &gt;</Link></span>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserFive;
