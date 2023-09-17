import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { ProgressBar } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppSelector } from "../../app/hooks";
import { selectCityTo } from "./destCitySlice";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { setLastActivity } from "../home/homeSlice";
import { setIsCompleted } from "../home/homeSlice";
import url from "../../app/const/url";

const item = {
  bgcolor: "#103b5e",
  completed: 14,
};

const DestCity = () => {
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const navigate = useNavigate();
  const cityTo = useAppSelector(selectCityTo);
  const [cityList, setCityList] = useState([]);
  const [invisibleCityToErr, setInvisibleCityToErr] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);
  const handleCityToChange = (cityToString: string) => {
    const queryString = encodeURIComponent(cityToString);

    fetch(`${url.cityListURL}?query=${queryString}`, {
      headers: { Authorization: `${process.env.REACT_APP_CITYLIST_TOKEN}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setCityList(data.locations);
      })
      .catch((error) => console.error("error", error));
    if (cityToString !== "") {
      setInvisibleCityToErr(true);
    }
  };

  const handleClick = () => {
    if (cityTo === "") {
      setInvisibleCityToErr(false);
    } else {
      setInvisibleCityToErr(true);
      navigate("/email");
    }
  };

  let content;
  if (isDesktop) {
    content = (
      <div className="w-full flex flex-col items-center pb-[200px] bg-background overflow-x-hidden">
        <div className="py-2 w-full bg-grey-400">
          <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
        </div>

        <div className="text-center pt-[80px]">
          <img
            className="mx-auto"
            src={SalesPerson}
            alt="sales-person"
            width={60}
            height={60}
          />
          <div className="min-w-[740px] text-blue-100 text-[28px] mx-[200px] mb-[52px] pt-[1.5vh] font-merriweather font-semibold">
            <p>What city are you moving to?</p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              What city are you moving to?
            </div>
            <div className="mb-[16px] text-left">
              <SearchInput
                onCityToChange={handleCityToChange}
                cityList={cityList}
              />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleCityToErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                No match found. Please check your spelling or try entering a to
                zip code.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (isTablet) {
    content = (
      <div className="w-full flex flex-col items-center pb-[200px] bg-background overflow-x-hidden">
        <div className="py-2 w-full bg-grey-400">
          <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
        </div>

        <div className="text-center pt-[80px]">
          <img
            className="mx-auto"
            src={SalesPerson}
            alt="sales-person"
            width={60}
            height={60}
          />
          <div className="min-w-[740px] text-blue-100 text-[28px] mx-[200px] mb-[52px] pt-[1.5vh] font-merriweather font-semibold">
            <p>What city are you moving to?</p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              What city are you moving to?
            </div>
            <div className="mb-[16px] text-left">
              <SearchInput
                onCityToChange={handleCityToChange}
                cityList={cityList}
              />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleCityToErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                No match found. Please check your spelling or try entering a to
                zip code.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (isMobile) {
    content = (
      <div className="w-full flex flex-col items-center pb-[30px] bg-background overflow-x-hidden">
        <div className="py-2 w-full bg-grey-400">
          <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
        </div>

        <div className="text-center pt-[80px]">
          <img
            className="mx-auto"
            src={SalesPerson}
            alt="sales-person"
            width={60}
            height={60}
          />
          <div className="text-blue-100 text-[28px] mx-[20px] mb-[52px] pt-[1.5vh] font-merriweather font-semibold">
            <p>What city are you moving to?</p>
          </div>
          <div className="text-center mx-[20px] mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              What city are you moving to?
            </div>
            <div className="mb-[16px] text-left">
              <SearchInput
                onCityToChange={handleCityToChange}
                cityList={cityList}
              />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleCityToErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                No match found. Please check your spelling or try entering a to
                zip code.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default DestCity;
