import { ProgressBar } from "../common";
import SalesPerson from "../../assets/imgs/sales-person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAppSelector } from "../../app/hooks";
import { selectCityFromName } from "../home/homeSlice";
import { selectCityToName } from "../destcity/destCitySlice";
import { selectMoveAmount } from "../size/sizeSlice";
import { selectArrivalDate } from "../date/dateSlice";
import { useScreenSize } from "../../app/hooks";
import { Helmet } from "react-helmet";
import "./style.scss";

const item = {
  bgcolor: "#103b5e",
  completed: 100,
};

const Confirmation = () => {
  const { isDesktop, isTablet, isMobile } = useScreenSize();
  const cityFromName = useAppSelector(selectCityFromName);
  const cityToName = useAppSelector(selectCityToName);
  const moveAmount = useAppSelector(selectMoveAmount);
  const arrivalDate = useAppSelector(selectArrivalDate);
  let content;
  if (isDesktop) {
    content = (
      <div className="w-full flex flex-col items-center pb-[200px] bg-background overflow-x-hidden">
        <Helmet>
          {/* <!--  Microsoft conversion tracking --> */}
          <script>{`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97042756", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq"); console.log('microsoft ok');`}</script>
          {/* <!-- Google tag (gtag.js) --> */}
          <script>
            {`gtag('js', new Date()); gtag('config', 'AW-11218728837'); console.log('google ok'); gtag('event', 'conversion', {'send_to': 'AW-11171021106/D1SLCNiUvaMYELKC4c4p'});console.log('added Event snippet for Move Mater Lead Form Submission conversion page');`}
          </script>
        </Helmet>
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
            <p>Your request has been received!</p>
            <p className="text-[14px] font-inter font-medium">
              What to do next:
            </p>
          </div>
          <div className="max-w-[700px] text-center mx-auto mb-[20px] flex items-center justify-between">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "phone" })}
                flip="horizontal"
                className="text-green-100 pl-2"
              />
              <span className="">Answer your phone</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "envelope" })}
                className="text-green-100 pr-2"
              />
              <span>Check your email</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "stop-circle" })}
                className="text-red-100 pr-2"
              />
              <span>Don't request more quotes</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex items-center justify-between mx-[65px] py-[25px] bg-white custom-box-shadow">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "truck-moving" })}
                className="text-grey-500 pr-2"
              />
              <span className="">Move: {moveAmount} Bedrooms</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Pickup: {cityFromName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Destination: {cityToName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "calendar" })}
                className="text-grey-500 pr-2"
              />
              <span>Date: {arrivalDate}</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex items-center justify-between px-[65px] py-[25px]">
            <div className="text-left">
              <div className="custom-box-shadow mb-2">
                <div className="text-[24px]">Matched Companies</div>
                <hr className="mt-5 mb-5"></hr>
                <div className="font-regular">
                  The professional companies listed on this page will contact
                  you & provide you with best quotes. They may be able to lower
                  your final cost by 7%-23%.
                </div>
              </div>
              <div className="custom-box-shadow">
                <div className="text-[24px]">Shipping Checklist</div>
                <hr className="mt-5 mb-5"></hr>
                <ul>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Don't request another quote, you will get overloaded with
                      prices
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Answer your phone and check your spam - matching companies
                      will reaching out with more accurate pricing.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Compare what is included: insurance, inventory, materials,
                      storage etc.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Check reviews to ensure you are booking with the best
                      match for you
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Book your move with someone that gives you peace of mind
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isTablet) {
    content = (
      <div className="w-full flex flex-col items-center pb-[200px] bg-background overflow-x-hidden">
        <Helmet>
          {/* <!--  Microsoft conversion tracking --> */}
          <script>{`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97042756", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq"); console.log('microsoft ok');`}</script>
          {/* <!-- Google tag (gtag.js) --> */}
          <script>
            {`gtag('js', new Date()); gtag('config', 'AW-11218728837'); console.log('google ok'); gtag('event', 'conversion', {'send_to': 'AW-11171021106/D1SLCNiUvaMYELKC4c4p'});console.log('added Event snippet for Move Mater Lead Form Submission conversion page');`}
          </script>
        </Helmet>
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
          <div className="text-blue-100 text-[28px] mx-[200px] mb-[52px] pt-[1.5vh] font-merriweather font-semibold">
            <p>Your request has been received!</p>
            <p className="text-[14px] font-inter font-medium">
              What to do next:
            </p>
          </div>
          <div className="max-w-[700px] text-center mx-auto mb-[20px] flex flex-col gap-[20px] items-center justify-between">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "phone" })}
                flip="horizontal"
                className="text-green-100 pl-2"
              />
              <span className="">Answer your phone</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "envelope" })}
                className="text-green-100 pr-2"
              />
              <span>Check your email</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "stop-circle" })}
                className="text-red-100 pr-2"
              />
              <span>Don't request more quotes</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex flex-col gap-[20px] items-center justify-between mx-[65px] py-[25px] bg-white custom-box-shadow">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "truck-moving" })}
                className="text-grey-500 pr-2"
              />
              <span className="">Move: {moveAmount} Bedrooms</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Pickup: {cityFromName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Destination: {cityToName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "calendar" })}
                className="text-grey-500 pr-2"
              />
              <span>Date: {arrivalDate}</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex flex-col items-center justify-between px-[65px] py-[25px]">
            <div className="text-left">
              <div className="custom-box-shadow mb-2">
                <div className="text-[24px]">Matched Companies</div>
                <hr className="mt-5 mb-5"></hr>
                <div className="font-regular">
                  The professional companies listed on this page will contact
                  you & provide you with best quotes. They may be able to lower
                  your final cost by 7%-23%.
                </div>
              </div>
              <div className="custom-box-shadow">
                <div className="text-[24px]">Shipping Checklist</div>
                <hr className="mt-5 mb-5"></hr>
                <ul>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Don't request another quote, you will get overloaded with
                      prices
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Answer your phone and check your spam - matching companies
                      will reaching out with more accurate pricing.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Compare what is included: insurance, inventory, materials,
                      storage etc.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Check reviews to ensure you are booking with the best
                      match for you
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Book your move with someone that gives you peace of mind
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isMobile) {
    content = (
      <div className="w-full flex flex-col items-center pb-[200px] bg-background overflow-x-hidden">
        <Helmet>
          {/* <!--  Microsoft conversion tracking --> */}
          <script>{`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97042756", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq"); console.log('microsoft ok');`}</script>
          {/* <!-- Google tag (gtag.js) --> */}
          <script>
            {`gtag('js', new Date()); gtag('config', 'AW-11218728837'); console.log('google ok'); gtag('event', 'conversion', {'send_to': 'AW-11171021106/D1SLCNiUvaMYELKC4c4p'});console.log('added Event snippet for Move Mater Lead Form Submission conversion page');`}
          </script>
        </Helmet>
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
            <p>Your request has been received!</p>
            <p className="text-[14px] font-inter font-medium">
              What to do next:
            </p>
          </div>
          <div className="max-w-[700px] text-center mx-auto mb-[20px] flex flex-col gap-[20px] items-center justify-between">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "phone" })}
                flip="horizontal"
                className="text-green-100 pl-2"
              />
              <span className="">Answer your phone</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "envelope" })}
                className="text-green-100 pr-2"
              />
              <span>Check your email</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "stop-circle" })}
                className="text-red-100 pr-2"
              />
              <span>Don't request more quotes</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex flex-col gap-[20px] items-center justify-between mx-[65px] py-[25px] bg-white custom-box-shadow">
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "truck-moving" })}
                className="text-grey-500 pr-2"
              />
              <span className="">Move: {moveAmount} Bedrooms</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Pickup: {cityFromName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "map-marker" })}
                className="text-grey-500 pr-2"
              />
              <span>Destination: {cityToName}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={icon({ name: "calendar" })}
                className="text-grey-500 pr-2"
              />
              <span>Date: {arrivalDate}</span>
            </div>
          </div>
          <div className="text-center mb-[20px] flex flex-col items-center justify-between px-[65px] py-[25px]">
            <div className="text-left">
              <div className="custom-box-shadow mb-2">
                <div className="text-[24px]">Matched Companies</div>
                <hr className="mt-5 mb-5"></hr>
                <div className="font-regular">
                  The professional companies listed on this page will contact
                  you & provide you with best quotes. They may be able to lower
                  your final cost by 7%-23%.
                </div>
              </div>
              <div className="custom-box-shadow">
                <div className="text-[24px]">Shipping Checklist</div>
                <hr className="mt-5 mb-5"></hr>
                <ul>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Don't request another quote, you will get overloaded with
                      prices
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Answer your phone and check your spam - matching companies
                      will reaching out with more accurate pricing.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Compare what is included: insurance, inventory, materials,
                      storage etc.
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Check reviews to ensure you are booking with the best
                      match for you
                    </span>
                  </li>
                  <li className="px-[0px] py-[16px] text-[14px] border-b-[1px]">
                    <FontAwesomeIcon
                      icon={icon({ name: "check-circle" })}
                      className="text-green-100 pr-2"
                    />
                    <span className="">
                      Book your move with someone that gives you peace of mind
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Confirmation;
