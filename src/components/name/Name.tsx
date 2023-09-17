import { useState, useEffect } from "react";
import NameInput from "./NameInput";
import { ProgressBar } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { selectFullName } from "./nameSlice";
import { selectUserId } from "../email/emailSlice";
import { setFullName } from "./nameSlice";
import { useNavigate } from "react-router-dom";
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
import { setArrivalDate } from "../date/dateSlice";
import { useLocation } from 'react-router-dom';
const item = {
  bgcolor: "#103b5e",
  completed: 70,
};

const Name = () => {
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
  const arrivalDate = searchParams.get('arrivalDate');
  if (id !== null && zipFrom !== null && cityFrom !== null && zipTo !== null && cityTo !== null && email !== null && moveAmount !== null && moveVehicle !== null && arrivalDate !== null) {
    dispatch(setUserId(parseInt(id)));
    dispatch(setCityFrom(zipFrom));
    dispatch(setCityFromName(cityFrom));
    dispatch(setCityTo(zipTo));
    dispatch(setCityToName(cityTo));
    dispatch(setEmail(email));
    dispatch(setMoveAmount(moveAmount));
    dispatch(setMoveVehicle(moveVehicle));
    dispatch(setArrivalDate(arrivalDate));
  }

  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const fullName = useAppSelector(selectFullName);
  const userId = useAppSelector(selectUserId);
  const navigate = useNavigate();
  const [invisibleFullNameErr, setInvisibleFullNameErr] = useState(true);
  const handleNameChange = (fullNameString: string) => {
    dispatch(setFullName(fullNameString));
    if (fullNameString !== "") {
      setInvisibleFullNameErr(true);
    } else {
      setInvisibleFullNameErr(false);
    }
  };
  const handleClick = () => {
    if (fullName === "") {
      setInvisibleFullNameErr(false);
    } else {
      setInvisibleFullNameErr(true);
      let payload = {
        id: userId,
        fullName: fullName,
      };
      try {
        fetch(
          `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/update-collection`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
      } catch (err) {
        console.log("err", err);
      }
      navigate("/phone");
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
            <p>Almost done! Let's finish up your price</p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Full Name
            </div>
            <div className="mb-[16px] text-left">
              <NameInput onNameChange={handleNameChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleFullNameErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                Please enter name.
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
            <p>Almost done! Let's finish up your price</p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Full Name
            </div>
            <div className="mb-[16px] text-left">
              <NameInput onNameChange={handleNameChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleFullNameErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                Please enter name.
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
            <p>Almost done! Let's finish up your price</p>
          </div>
          <div className="text-center mx-[20px] mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Full Name
            </div>
            <div className="mb-[16px] text-left">
              <NameInput onNameChange={handleNameChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisibleFullNameErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                Please enter name.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Name;
