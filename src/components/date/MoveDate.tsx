import { useEffect } from "react";
import { ProgressBar } from "../common";
import { RadioButton } from "../common";
import { NextButton } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import { selectEmail } from "../email/emailSlice";
import { selectMoveDate, setMoveDate, setArrivalDate } from "./dateSlice";
import { useScreenSize } from "../../app/hooks";
import { setLastActivity } from "../home/homeSlice";
import { setIsCompleted } from "../home/homeSlice";
import { setUserId } from "../email/emailSlice";
import { setCityFrom } from "../home/homeSlice";
import { setCityFromName } from "../home/homeSlice";
import { setCityTo } from "../destcity/destCitySlice";
import { setCityToName } from "../destcity/destCitySlice";
import { setEmail } from "../email/emailSlice";
import { setMoveAmount } from "../size/sizeSlice";
import { setMoveVehicle } from "../size/sizeSlice";
import { useLocation } from 'react-router-dom';

import "./style.scss";

const item = {
  bgcolor: "#103b5e",
  completed: 56,
};

const MoveDate = () => {
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const zipFrom = searchParams.get('zipFrom');
  const cityFrom = searchParams.get('cityFrom');
  const zipTo = searchParams.get('zipTo');
  const cityTo = searchParams.get('cityTo');
  const email = searchParams.get('email');
  const moveAmount = searchParams.get('moveAmount');
  const moveVehicle = Boolean(searchParams.get('moveVehicle'));
  if (id !== null && zipFrom !== null && cityFrom !== null && zipTo !== null && cityTo !== null && email !== null && moveAmount !== null && moveVehicle !== null) {
    dispatch(setUserId(parseInt(id)));
    dispatch(setCityFrom(zipFrom));
    dispatch(setCityFromName(cityFrom));
    dispatch(setCityTo(zipTo));
    dispatch(setCityToName(cityTo));
    dispatch(setEmail(email));
    dispatch(setMoveAmount(moveAmount));
    dispatch(setMoveVehicle(moveVehicle));
  }
  
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);
  const moveDate = useAppSelector(selectMoveDate);
  const radioChangeHandler = (e: any) => {
    const currDateTime = new Date();
    let consumeDays;
    let currDateTimeCopy;
    let arrivalDateString;
    switch (e.target.value) {
      case "1":
        consumeDays = Math.floor(Math.random() * 7 + 1);
        currDateTimeCopy = new Date(currDateTime.getTime());
        arrivalDateString = new Date(
          currDateTimeCopy.setDate(currDateTimeCopy.getDate() + consumeDays)
        ).toLocaleDateString();
        dispatch(setArrivalDate(arrivalDateString));
        break;
      case "2":
        consumeDays = Math.floor(Math.random() * 7 + 8);
        currDateTimeCopy = new Date(currDateTime.getTime());
        arrivalDateString = new Date(
          currDateTimeCopy.setDate(currDateTimeCopy.getDate() + consumeDays)
        ).toLocaleDateString();
        dispatch(setArrivalDate(arrivalDateString));

        break;
      case "3":
        consumeDays = Math.floor(Math.random() * 16 + 15);
        currDateTimeCopy = new Date(currDateTime.getTime());
        arrivalDateString = new Date(
          currDateTimeCopy.setDate(currDateTimeCopy.getDate() + consumeDays)
        ).toLocaleDateString();
        dispatch(setArrivalDate(arrivalDateString));

        break;
      case "4":
        consumeDays = Math.floor(Math.random() * 59 + 31);
        currDateTimeCopy = new Date(currDateTime.getTime());
        arrivalDateString = new Date(
          currDateTimeCopy.setDate(currDateTimeCopy.getDate() + consumeDays)
        ).toLocaleDateString();
        dispatch(setArrivalDate(arrivalDateString));

        break;
    }
    dispatch(setMoveDate(e.target.value));
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
            <p>When are you moving?</p>
          </div>
          <div className="grid-container text-blue-100 text-[20px] mb-[32px]">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveDate === "1"}
              label="As soon as possible"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveDate === "2"}
              label="In the next few weeks"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveDate === "3"}
              label="In the next month or so"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveDate === "4"}
              label="Later"
              value="4"
            />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/name" desc="NEXT" />
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
            <p>When are you moving?</p>
          </div>
          <div className="flex flex-col gap-[20px] text-blue-100 text-[20px] mb-[32px]">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveDate === "1"}
              label="As soon as possible"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveDate === "2"}
              label="In the next few weeks"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveDate === "3"}
              label="In the next month or so"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveDate === "4"}
              label="Later"
              value="4"
            />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/destination-city" desc="NEXT" />
          </div>
        </div>
      </div>
    );
  } else if (isMobile) {
    content = (
      <div className="w-full flex flex-col items-center pb-[40px] bg-background overflow-x-hidden">
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
            <p>When are you moving?</p>
          </div>
          <div className="flex flex-col gap-[20px] text-blue-100 text-[20px] mb-[32px]">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveDate === "1"}
              label="As soon as possible"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveDate === "2"}
              label="In the next few weeks"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveDate === "3"}
              label="In the next month or so"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveDate === "4"}
              label="Later"
              value="4"
            />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/destination-city" desc="NEXT" />
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default MoveDate;
