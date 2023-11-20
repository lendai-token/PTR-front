
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

const CreateUserFinal = () => {
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

        <div className="px-[30px] pt-[12px] pb-[62px]">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 bg-blue-500"></div>
            <div className="col-span-3">
              {/* name, contact parts */}
              <Card sx={{position:'relative', overflow:'visible'}}>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px]">
                  <img src={avatarExample} alt="" className="w-full h-full rounded-full bg-purple-100"/>
                </div>
                <CardContent>
                  <div className="p-[12px]">
                    {/* part-name */}
                    <div className="grid grid-cols-5 gap-8 border-b-[1px] border-grey-600">
                      <div className="col-span-2"></div>
                      <div className="col-span-3 flex items-center mb-[12px]">
                        <span className="text-black-300 text-[20px] font-bold">Adam Matthew</span>
                        <span className="bg-purple-200 text-white text-[14px] rounded-[56px] px-[12px] py-[4px] ml-[8px]">Profile</span>
                      </div>
                    </div>
                    {/* contact-profile-part */}
                    <div className="grid grid-cols-5 gap-x-[52px] text-[14px] font-bold pt-[16px]">
                      <div className="col-span-2 text-right py-[4px]">Email:</div>
                      <div className="col-span-3 py-[4px]">Calrrofitness@gmail.com</div>
                      <div className="col-span-2 text-right py-[4px]">Phone:</div>
                      <div className="col-span-3 py-[4px]">+84&nbsp;324234534</div>
                      <div className="col-span-2 text-right py-[4px]">Location:</div>
                      <div className="col-span-3 py-[4px] font-normal">Fort Worth, Texas 10000</div>
                      <div className="col-span-2 text-right py-[4px]">Linkedin:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Linkedin.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Instagram:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Instagram.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Twitter:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Twitter.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Tiktok:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Tiktok.com/....</Link></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* other data part */}
              <Card sx={{mt: '16px'}}>
                <CardContent>
                  <div className="p-[8px]">
                    {/* contact-profile-part */}
                    <div className="grid grid-cols-5 gap-x-[52px] text-[14px] font-bold">
                      <div className="col-span-2 text-right py-[4px]">Resume Document:</div>
                      <div className="col-span-3 py-[4px] text-blue-600"><Link to="#">Resume Download and View</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Profile Summary:</div>
                      <div className="col-span-3 py-[4px] font-normal">Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals</div>
                      <div className="col-span-2 text-right py-[4px]">Education:</div>
                      <div className="col-span-3 py-[4px] font-normal">Under 2 Year of College</div>
                      <div className="col-span-2 text-right py-[4px]">Fitness Industry Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 3 years</div>
                      <div className="col-span-2 text-right py-[4px]">Sales Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 3 years</div>
                      <div className="col-span-2 text-right py-[4px]">General Management Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 5 years</div>
                      <div className="col-span-2 text-right py-[4px]">National Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">CPR Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">AED Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">Certification:</div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]"></div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]"></div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]">Positions Considered:</div>
                      <div className="col-span-3 py-[4px] font-normal">Cycle Instructor, Pilates Instructor, Yoga Instructor</div>
                      <div className="col-span-2 text-right py-[4px]">Level of Work:</div>
                      <div className="col-span-3 py-[4px] font-normal">Contract, Fulltime , Partime</div>
                      <div className="col-span-2 text-right py-[4px]">Willing to Relacated:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 1:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 2:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 3:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Languages:</div>
                      <div className="col-span-3 py-[4px] font-normal">English, Chinese, French</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* rating parts */}
              <Card sx={{mt: '16px'}}>
                <CardContent>
                  <div className="p-[6px]">
                    <div className="grid grid-cols-6 gap-4">
                      {
                        ratings.map((item)=>{
                          return (
                            <div className="col-span-2">
                              <StyledReadOnlyRatingBar text={item.text} value={2}/>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1 bg-blue-500"></div>
          </div>
        </div>
        
      </div>
    );
  }else if(isMobile){
    content = (
      <div className="create-user-background">
        <div className="banner h-[196px] relative">
          <div className="absolute w-[191px] h-[191px] top-[40px] left-[24%]">
            <img src={avatarExample} alt="" className="w-full h-full rounded-full bg-purple-100"/>
          </div>
        </div>
        <div className=" pt-[36px]">
          <div className="create-final-mobile-content">
            <div className="col-span-3">
              {/* name, contact parts */}
              <Card sx={{position:'relative', overflow:'visible'}}>
                <CardContent>
                  <div className="">
                    {/* part-name */}
                    <div className="flex flex-row justify-center items-center mb-[12px] border-b-[1px] border-grey-600 pb-[10px]" >
                      <span className="text-black-300 text-[20px] font-bold">Adam Matthew</span>
                      <span className="bg-purple-200 text-white text-[14px] rounded-[56px] px-[12px] py-[4px] ml-[8px]">Profile</span>
                    </div>
                    {/* contact-profile-part */}
                    <div className="grid grid-cols-5 gap-x-[52px] text-[14px] font-bold pt-[16px]">
                      <div className="col-span-2 text-right py-[4px]">Email:</div>
                      <div className="col-span-3 py-[4px]">Calrrofitness@gmail.com</div>
                      <div className="col-span-2 text-right py-[4px]">Phone:</div>
                      <div className="col-span-3 py-[4px]">+84&nbsp;324234534</div>
                      <div className="col-span-2 text-right py-[4px]">Location:</div>
                      <div className="col-span-3 py-[4px] font-normal">Fort Worth, Texas 10000</div>
                      <div className="col-span-2 text-right py-[4px]">Linkedin:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Linkedin.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Instagram:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Instagram.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Twitter:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Twitter.com/....</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Tiktok:</div>
                      <div className="col-span-3 py-[4px] font-normal text-blue-600"><Link to="#">www.Tiktok.com/....</Link></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* other data part */}
              <Card sx={{mt: '16px'}}>
                <CardContent>
                  <div className="">
                    {/* contact-profile-part */}
                    <div className="grid grid-cols-5 gap-x-[52px] text-[14px] font-bold">
                      <div className="col-span-2 text-right py-[4px] ">Resume Document:</div>
                      <div className="col-span-3 py-[4px] text-blue-600"><Link to="#">Resume Download and View</Link></div>
                      <div className="col-span-2 text-right py-[4px]">Profile Summary:</div>
                      <div className="col-span-3 py-[4px] font-normal">Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals</div>
                      <div className="col-span-2 text-right py-[4px]">Education:</div>
                      <div className="col-span-3 py-[4px] font-normal">Under 2 Year of College</div>
                      <div className="col-span-2 text-right py-[4px]">Fitness Industry Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 3 years</div>
                      <div className="col-span-2 text-right py-[4px]">Sales Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 3 years</div>
                      <div className="col-span-2 text-right py-[4px]">Management Experience:</div>
                      <div className="col-span-3 py-[4px] font-normal">1 to 5 years</div>
                      <div className="col-span-2 text-right py-[4px]">National Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">CPR Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">AED Certification:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">Certification:</div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]"></div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]"></div>
                      <div className="col-span-3 py-[4px] font-normal">Cooper Institute </div>
                      <div className="col-span-2 text-right py-[4px]">Positions Considered:</div>
                      <div className="col-span-3 py-[4px] font-normal">Cycle Instructor, Pilates Instructor, Yoga Instructor</div>
                      <div className="col-span-2 text-right py-[4px]">Level of Work:</div>
                      <div className="col-span-3 py-[4px] font-normal">Contract, Fulltime , Partime</div>
                      <div className="col-span-2 text-right py-[4px]">Willing to Relacated:</div>
                      <div className="col-span-3 py-[4px]">YES</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 1:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 2:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Relocate 3:</div>
                      <div className="col-span-3 py-[4px] font-normal">Florida</div>
                      <div className="col-span-2 text-right py-[4px]">Languages:</div>
                      <div className="col-span-3 py-[4px] font-normal">English, Chinese, French</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* rating parts */}
              <Card sx={{mt: '16px'}}>
                <CardContent>
                  <div className="">
                    <div className="grid grid-cols-6 gap-4">
                      {
                        ratings.map((item)=>{
                          return ( 
                            <div className="col-span-2">
                              <StyledReadOnlyRatingBar text={item.text} value={2}/>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default CreateUserFinal;
