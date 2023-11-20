
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import url from "../../app/const/url";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tab';


import "./style.scss";
const Management = () => {
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
            WORK MANAGEMENT
          </div>
        </div>
        {/* section-input */}
        <div className="grid grid-cols-4 gap-8 px-[180px] mt-[70px]">
          <div className="col-span-1 bg-blue-100 rounded-t-[8px] px-[24px]">
            <ul className="mt-[36px]">
              <li className="text-blue-100 bg-white px-[20px] py-[14px] rounded-[12px] mb-[5px]">General</li>
              <li className="text-white  px-[20px] py-[14px] rounded-[12px] mb-[5px]">Job active</li>
              <li className="text-white  px-[20px] py-[14px] rounded-[12px] mb-[5px]">Job stopped</li>
              <li className="text-white  px-[20px] py-[14px] rounded-[12px] mb-[5px]">Recruiting</li>
              <li className="text-white  px-[20px] py-[14px] rounded-[12px] mb-[5px]">Recruit urgently</li>
            </ul>
          </div>
          <div className="col-span-3 pb-[250px]">
            <table className="w-full">
              <tr className="text-white bg-blue-100 text-[18px]">
                <th className="p-[8px] border-blue-100 rounded-tl-[8px]">Post ID</th>
                <th>Active</th>
                <th>Post Date</th>
                <th>Location</th>
                <th className="border-blue-100 rounded-tr-[8px]">Title</th>
              </tr>
              <tr className="text-black-300 text-[18px] border-b-[1px] border-black">
                <td className="p-[8px] text-center">01</td>
                <td className="text-center">Deactivate</td>
                <td className="text-center" >10-09-2023</td>
                <td className="text-center">Newyork Gym</td>
                <td className="text-center">Trainer PT</td>
              </tr>
              <tr className="text-black-300 text-[18px] border-b-[1px] border-black">
                <td className="p-[8px] text-center">21</td>
                <td className="text-center">Deactivate</td>
                <td className="text-center" >10-09-2023</td>
                <td className="text-center">Newyork Gym</td>
                <td className="text-center">Trainer PT</td>
              </tr>
              <tr className="text-black-300 text-[18px] border-b-[1px] border-black">
                <td className="p-[8px] text-center">32</td>
                <td className="text-center">Deactivate</td>
                <td className="text-center" >10-09-2023</td>
                <td className="text-center">Newyork Gym</td>
                <td className="text-center">Trainer PT</td>
              </tr>
              <tr className="text-black-300 text-[18px] border-b-[1px] border-black">
                <td className="p-[8px] text-center">12</td>
                <td className="text-center">Deactivate</td>
                <td className="text-center" >10-09-2023</td>
                <td className="text-center">Newyork Gym</td>
                <td className="text-center">Trainer PT</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }else if(isMobile){
    content = (
      <div>
                              
    </div>
    );
  }
  return <>{content}</>;
};

export default Management;
