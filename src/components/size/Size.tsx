import { useEffect } from "react";
import { ProgressBar } from "../common";
import { RadioButton } from "../common";
import { NextButton } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppSelector } from "../../app/hooks";
import { selectMoveAmount } from "./sizeSlice";
import { useAppDispatch } from "../../app/hooks";
import { setMoveAmount } from "./sizeSlice";
import { useScreenSize } from "../../app/hooks";
import { MoveCheckbox } from "../common";
import { setLastActivity } from "../home/homeSlice";
import { setIsCompleted } from "../home/homeSlice";
import { setUserId } from "../email/emailSlice";
import { setCityFrom } from "../home/homeSlice";
import { setCityFromName } from "../home/homeSlice";
import { setCityTo } from "../destcity/destCitySlice";
import { setCityToName } from "../destcity/destCitySlice";
import { setEmail } from "../email/emailSlice";

import { useLocation } from 'react-router-dom';
import "./style.scss";

const item = {
  bgcolor: "#103b5e",
  completed: 42,
};

const Size = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const zipFrom = searchParams.get('zipFrom');
  const cityFrom = searchParams.get('cityFrom');
  const zipTo = searchParams.get('zipTo');
  const cityTo = searchParams.get('cityTo');
  const email = searchParams.get('email');
  if (id !== null && zipFrom !== null && cityFrom !== null && zipTo !== null && cityTo !== null && email !== null) {
    dispatch(setUserId(parseInt(id)));
    dispatch(setCityFrom(zipFrom));
    dispatch(setCityFromName(cityFrom));
    dispatch(setCityTo(zipTo));
    dispatch(setCityToName(cityTo));
    dispatch(setEmail(email));
  }
  
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const moveAmount = useAppSelector(selectMoveAmount);

  const radioChangeHandler = (e: any) => {
    dispatch(setMoveAmount(e.target.value));
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
            <p>Hey! I'm Judy.</p>
            <p>I’ll finish your awesome price in seconds.</p>
            <p>Ready to go?</p>
          </div>
          <div className="grid-container text-blue-100 text-[20px] radio-label">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveAmount === "1"}
              label="1 Bedroom"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveAmount === "2"}
              label="2 Bedroom"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveAmount === "3"}
              label="3 Bedroom"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveAmount === "4"}
              label="4 Bedroom"
              value="4"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="5"
              isSelected={moveAmount === "5"}
              label="5 Bedroom"
              value="5"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="6"
              isSelected={moveAmount === "6"}
              label="Office Space"
              value="6"
            />
          </div>
          <div className="mb-[20px]">
            <MoveCheckbox />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/date" desc="NEXT" />
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
            <p>Hey! I'm Judy.</p>
            <p>I’ll finish your awesome price in seconds.</p>
            <p>Ready to go?</p>
          </div>
          <div className="flex flex-col gap-[20px] text-blue-100 text-[20px] mb-[32px]">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveAmount === "1"}
              label="1 Bedroom"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveAmount === "2"}
              label="2 Bedroom"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveAmount === "3"}
              label="3 Bedroom"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveAmount === "4"}
              label="4 Bedroom"
              value="4"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="5"
              isSelected={moveAmount === "5"}
              label="5 Bedroom"
              value="5"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="6"
              isSelected={moveAmount === "6"}
              label="Office Space"
              value="6"
            />
          </div>
          <div className="mb-[20px]">
            <MoveCheckbox />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/date" desc="NEXT" />
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
          <div className="text-blue-100 text-[19px] mx-[20px] mb-[52px] pt-[1.5vh] font-merriweather font-semibold">
            <p>Hey! I'm Judy.</p>
            <p>I’ll finish your awesome price in seconds.</p>
            <p>Ready to go?</p>
          </div>
          <div className="flex flex-col gap-[20px] text-blue-100 text-[20px] mb-[32px]">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={moveAmount === "1"}
              label="1 Bedroom"
              value="1"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={moveAmount === "2"}
              label="2 Bedroom"
              value="2"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="3"
              isSelected={moveAmount === "3"}
              label="3 Bedroom"
              value="3"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="4"
              isSelected={moveAmount === "4"}
              label="4 Bedroom"
              value="4"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="5"
              isSelected={moveAmount === "5"}
              label="5 Bedroom"
              value="5"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="6"
              isSelected={moveAmount === "6"}
              label="Office Space"
              value="6"
            />
          </div>
          <div className="mb-[20px]">
            <MoveCheckbox />
          </div>
          <div className="mb-[60px]">
            <NextButton link="/date" desc="NEXT" />
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Size;
