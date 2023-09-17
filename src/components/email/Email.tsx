import { useState, useEffect } from "react";
import EmailInput from "./EmailInput";
import { ProgressBar } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { setEmail } from "./emailSlice";
import { selectEmail } from "./emailSlice";
import { validateEmail } from "../helpers";
import { useScreenSize } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { selectCityFromName } from "../home/homeSlice";
import { selectCityTo } from "../destcity/destCitySlice";
import { selectCityToName } from "../destcity/destCitySlice";
import { selectLastActivity } from "../home/homeSlice";
import { selectUserId } from "../email/emailSlice";
import { setLastActivity } from "../home/homeSlice";
import { setIsCompleted } from "../home/homeSlice";
import { setUserId } from "./emailSlice";
import { setSubscriptionId } from "./emailSlice";
import ReCAPTCHA from 'react-google-recaptcha';

const item = {
  bgcolor: "#103b5e",
  completed: 28,
};

const Email = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toLocaleDateString()));
    dispatch(setIsCompleted(false));
  }, []);
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const cityFrom = useAppSelector(selectCityFrom);
  const cityFromName = useAppSelector(selectCityFromName);
  const cityTo = useAppSelector(selectCityTo);
  const cityToName = useAppSelector(selectCityToName);
  const lastActivity = useAppSelector(selectLastActivity);
  const userId = useAppSelector(selectUserId);

  const email = useAppSelector(selectEmail);
  const navigate = useNavigate();
  const [invisibleEmailInputErr, setInvisibleEmailInputErr] = useState(true);
  const [invisibleEmailValidErr, setInvisibleEmailValidErr] = useState(true);
  const [isCaptchaSuccess, setIsCaptchaSuccess] = useState(false);
  const [invisibleCaptchaErr, setInvisibleCaptchaErr] = useState(true);

  const onChange = (value: any) => {
    let token = value;
    let payload = {
      token: token,
    }
    fetch(
      `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/verify-token`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
    .then(response=>response.json())
    .then((data)=>{
      if (data.status === 200) {
        setIsCaptchaSuccess(true);
        setInvisibleCaptchaErr(true);
      }
    });

  }

  const handleEmailChange = (emailString: string) => {
    dispatch(setEmail(emailString));
    if (emailString !== "") {
      if (!validateEmail(emailString)) {
        setInvisibleEmailInputErr(true);
        setInvisibleEmailValidErr(false);
        return;
      } else {
        setInvisibleEmailValidErr(true);
        return;
      }
    } else {
      setInvisibleEmailInputErr(false);
      setInvisibleEmailValidErr(true);
      return;
    }
  };
  const handleClick = () => {
    if (email === "") {
      setInvisibleEmailInputErr(false);
      setInvisibleEmailValidErr(true);
      return;
    } else if (!validateEmail(email)) {
      setInvisibleEmailInputErr(true);
      setInvisibleEmailValidErr(false);
      return;
    } else {
      setInvisibleEmailInputErr(true);
      setInvisibleEmailValidErr(true);
      if (isCaptchaSuccess === true) {
        saveCollectionToDB(
          cityFrom,
          cityFromName,
          cityTo,
          cityToName,
          email,
          lastActivity
        );
        navigate("/size");
      } else {
        setInvisibleCaptchaErr(false);
        return;
      }
    }
  };

  const saveSubscriptionToDB = async (userId: number) => {
    let payload = {
      userId: userId,
    };
    try {
      await fetch(
        `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/save-subscription`,
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
          dispatch(setSubscriptionId(data.data.id));
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  const saveCollectionToDB = async (
    zipFrom: string,
    cityFrom: string,
    zipTo: string,
    cityTo: string,
    email: string,
    lastActivity: string
  ) => {
    let details: any = {
      zipFrom: zipFrom,
      cityFrom: cityFrom,
      zipTo: zipTo,
      cityTo: cityTo,
      email: email,
      lastActivity: lastActivity,
    };
    try {
      await fetch(
        `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/save-collection`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setUserId(data.data.id));
          saveSubscriptionToDB(data.data.id);
        });
    } catch (err) {
      console.log("err", err);
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
            <p>Your price is ready!</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Email
            </div>
            <div className="mb-[16px] text-left">
              <EmailInput onEmailChange={handleEmailChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            <div className="flex flex-col items-center mt-[40px]">
              <ReCAPTCHA sitekey={`${process.env.REACT_APP_SITE_KEY}`} onChange={onChange}  />
            </div>
            {
              !invisibleCaptchaErr && (
                <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                  Captcha verification failed. Please try again.
                </div>
              )
            }
            {invisibleEmailInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                Please enter email.
              </div>
            )}
            {invisibleEmailValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                Please enter valid email.
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
            <p>Your price is ready!</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="max-w-[530px] text-center mx-auto mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Email
            </div>
            <div className="mb-[16px] text-left">
              <EmailInput onEmailChange={handleEmailChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            <div className="flex flex-col items-center mt-[40px]">
              <ReCAPTCHA sitekey={`${process.env.REACT_APP_SITE_KEY}`} onChange={onChange}  />
            </div>
            {
              !invisibleCaptchaErr && (
                <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                  Captcha verification failed. Please try again.
                </div>
              )
            }
            {invisibleEmailInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                Please enter email.
              </div>
            )}
            {invisibleEmailValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[540px] mx-auto mt-[20px] p-[4px]">
                Please enter valid email.
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
            <p>Your price is ready!</p>
            <p className="text-[14px] font-inter font-medium">
              We respect your privacy, we'll only email you if better quotes are
              available.
            </p>
          </div>
          <div className="text-center mx-[20px] mb-[20px]">
            <div className="text-left text-blue-100 text-[14px] mb-[16px]">
              Email
            </div>
            <div className="mb-[16px] text-left">
              <EmailInput onEmailChange={handleEmailChange} />
            </div>
          </div>
          <div className="mb-[60px]">
            <button
              className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              NEXT
            </button>
            {/* <div className="flex flex-col items-center mt-[40px]">
              <ReCAPTCHA sitekey={`${process.env.REACT_APP_SITE_KEY}`} onChange={onChange}  />
            </div>
            {
              !invisibleCaptchaErr && (
                <div className="text-red-200 border-2 border-dashed border-red-200 max-w-[740px] mx-auto mt-[20px] p-[4px]">
                  Captcha verification failed. Please try again.
                </div>
              )
            } */}
            {invisibleEmailInputErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                Please enter email.
              </div>
            )}
            {invisibleEmailValidErr ? (
              <></>
            ) : (
              <div className="text-red-200 border-2 border-dashed border-red-200 mx-[20px] mt-[20px] p-[4px]">
                Please enter valid email.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Email;
