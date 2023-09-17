import { useState, useEffect } from "react";
import PhoneInput from "./PhoneInput";
import { ProgressBar } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { setPhone } from "./phoneSlice";
import { selectCityFrom } from "../home/homeSlice";
import { selectMoveAmount } from "../size/sizeSlice";
import { selectArrivalDate } from "../date/dateSlice";
import { selectCityTo } from "../destcity/destCitySlice";
import { selectFullName } from "../name/nameSlice";
import { selectEmail } from "../email/emailSlice";
import { selectPhone } from "./phoneSlice";
import { selectUserId } from "../email/emailSlice";
import { selectCityFromName } from "../home/homeSlice";
import { selectCityToName } from "../destcity/destCitySlice";
import { selectMoveVehicle } from "../size/sizeSlice";
import { selectIsCompleted } from "../home/homeSlice";
import { selectLastActivity } from "../home/homeSlice";
import url from "../../app/const/url";
import { validatePhone } from "../helpers";
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
import { setFullName } from "../name/nameSlice";
import { useLocation } from 'react-router-dom';

const item = {
  bgcolor: "#103b5e",
  completed: 84,
};

const Phone = () => {
  const dispatch: any = useAppDispatch();
  const [invisiblePhoneInputErr, setInvisiblePhoneInputErr] = useState(true);
  const [invisiblePhoneValidErr, setInvisiblePhoneValidErr] = useState(true);

  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);

  const { isDesktop, isTablet, isMobile } = useScreenSize();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idStr = searchParams.get('id');
  const zipFromStr = searchParams.get('zipFrom');
  const cityFromStr = searchParams.get('cityFrom');
  const zipToStr = searchParams.get('zipTo');
  const cityToStr = searchParams.get('cityTo');
  const emailStr = searchParams.get('email');
  const moveAmountStr = searchParams.get('moveAmount');
  const moveVehicleStr = Boolean(searchParams.get('moveVehicle'));
  const arrivalDateStr = searchParams.get('arrivalDate');
  const fullNameStr = searchParams.get('fullName');
  if (idStr !== null && zipFromStr !== null && cityFromStr !== null && zipToStr !== null && cityToStr !== null && emailStr !== null && moveAmountStr !== null && moveVehicleStr !== null && arrivalDateStr !== null && fullNameStr !== null) {
    dispatch(setUserId(parseInt(idStr)));
    dispatch(setCityFrom(zipFromStr));
    dispatch(setCityFromName(cityFromStr));
    dispatch(setCityTo(zipToStr));
    dispatch(setCityToName(cityToStr));
    dispatch(setEmail(emailStr));
    dispatch(setMoveAmount(moveAmountStr));
    dispatch(setMoveVehicle(moveVehicleStr));
    dispatch(setArrivalDate(arrivalDateStr));
    dispatch(setFullName(fullNameStr));
  }

  const cityFrom = useAppSelector(selectCityFrom);
  const moveAmount = useAppSelector(selectMoveAmount);
  const cityTo = useAppSelector(selectCityTo);
  const fullName = useAppSelector(selectFullName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);
  const cityFromName = useAppSelector(selectCityFromName);
  const cityToName = useAppSelector(selectCityToName);
  const arrivalDate = useAppSelector(selectArrivalDate);
  const moveVehicle = useAppSelector(selectMoveVehicle);
  const isCompleted = useAppSelector(selectIsCompleted);
  const lastActivity = useAppSelector(selectLastActivity);
  const userId = useAppSelector(selectUserId);

  const navigate = useNavigate();

  const handlePhoneChange = (phoneString: string) => {
    dispatch(setPhone(phoneString));
    if (phoneString !== "") {
      if (!validatePhone(phoneString)) {
        setInvisiblePhoneInputErr(true);
        setInvisiblePhoneValidErr(false);
        return;
      } else {
        setInvisiblePhoneInputErr(true);
        setInvisiblePhoneValidErr(true);
        return;
      }
    } else {
      setInvisiblePhoneInputErr(false);
      setInvisiblePhoneValidErr(true);
      return;
    }
  };
  const handleClick = () => {
    if (phone === "") {
      setInvisiblePhoneInputErr(false);
      setInvisiblePhoneValidErr(true);
      return;
    } else if (!validatePhone(phone)) {
      setInvisiblePhoneInputErr(true);
      setInvisiblePhoneValidErr(false);
      return;
    } else {
      setInvisiblePhoneInputErr(true);
      setInvisiblePhoneValidErr(true);
      let collectionPayload = {
        id: userId,
        phone: phone,
        lastActivity: lastActivity,
        isCompleted: true,
      };
      let subscriptionPayload = {
        userId: userId,
        isSubscribed: false,
      };

      try {
        fetch(
          `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/update-collection`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(collectionPayload),
          }
        );
      } catch (err) {
        console.log("err", err);
      }

      try {
        fetch(
          `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/update-subscription`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(subscriptionPayload),
          }
        );
      } catch (err) {
        console.log("err", err);
      }

      sendDataToGranot(
        cityFrom,
        moveAmount,
        arrivalDate,
        cityTo,
        fullName,
        email,
        phone
      );
      sendEmailToMovemater(
        cityFrom,
        cityFromName,
        moveAmount,
        arrivalDate,
        cityTo,
        cityToName,
        fullName,
        email,
        phone,
        moveVehicle,
        isCompleted,
        lastActivity
      );
      // sendThankToCustomer(
      //   cityFrom,
      //   cityFromName,
      //   moveAmount,
      //   arrivalDate,
      //   cityTo,
      //   cityToName,
      //   fullName,
      //   email,
      //   phone,
      //   moveVehicle,
      //   isCompleted,
      //   lastActivity
      // )
      navigate("/confirmation");
    }
  };

  const sendDataToGranot = (
    cityFrom: string,
    moveAmount: string,
    arrivalDate: string,
    cityTo: string,
    fullName: string,
    email: string,
    phone: string
  ) => {
    let details: any = {
      MODULE: "EST",
      REF: "Google Ads",
      SNAME: fullName,
      EMAIL: email,
      STELH: phone,
      MOVEDATE: arrivalDate,
      SZIP: cityFrom,
      RZIP: cityTo,
      ROOMS: moveAmount,
      btnSubmit: "Get Your Quote,",
    };
    let formBody: any = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(`${url.granotURL}`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    });
  };

  // const sendThankToCustomer = (
  //   zipFrom: string,
  //   cityFrom: string,
  //   moveAmount: string,
  //   arrivalDate: string,
  //   zipTo: string,
  //   cityTo: string,
  //   fullName: string,
  //   email: string,
  //   phone: string,
  //   moveVehicle: boolean,
  //   isCompleted: boolean,
  //   lastActivity: string
  // ) => {
  //   let payload = {
  //     zipFrom: zipFrom,
  //     cityFrom: cityFrom,
  //     moveAmount: moveAmount,
  //     arrivalDate: arrivalDate,
  //     zipTo: zipTo,
  //     cityTo: cityTo,
  //     fullName: fullName,
  //     email: email,
  //     phone: phone,
  //     moveVehicle: moveVehicle,
  //     isCompleted: isCompleted,
  //     lastActivity: lastActivity,
  //   };

  //   try {
  //     fetch(
  //       `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/send-thank`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  // };

  const sendEmailToMovemater = (
    zipFrom: string,
    cityFrom: string,
    moveAmount: string,
    arrivalDate: string,
    zipTo: string,
    cityTo: string,
    fullName: string,
    email: string,
    phone: string,
    moveVehicle: boolean,
    isCompleted: boolean,
    lastActivity: string
  ) => {
    let payload = {
      zipFrom: zipFrom,
      cityFrom: cityFrom,
      moveAmount: moveAmount,
      arrivalDate: arrivalDate,
      zipTo: zipTo,
      cityTo: cityTo,
      fullName: fullName,
      email: email,
      phone: phone,
      moveVehicle: moveVehicle,
      isCompleted: isCompleted,
      lastActivity: lastActivity,
    };

    try {
      fetch(
        `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log("error:", error);
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
            <p>Next, view your price</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Phone Number
            </div>
            <div className="mb-[16px] text-left">
              <PhoneInput onPhoneChange={handlePhoneChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisiblePhoneInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                Please enter phone number.
              </div>
            )}
            {invisiblePhoneValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                Please enter valid phone number.
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
            <p>Next, view your price</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Phone Number
            </div>
            <div className="mb-[16px] text-left">
              <PhoneInput onPhoneChange={handlePhoneChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisiblePhoneInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                Please enter phone number.
              </div>
            )}
            {invisiblePhoneValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                Please enter valid phone number.
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
            <p>Next, view your price</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="text-center mx-[20px] mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Phone Number
            </div>
            <div className="mb-[16px] text-left">
              <PhoneInput onPhoneChange={handlePhoneChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {invisiblePhoneInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                Please enter phone number.
              </div>
            )}
            {invisiblePhoneValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                Please enter valid phone number.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Phone;
