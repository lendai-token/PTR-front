
import React, { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCityFrom } from "../home/homeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { setLastActivity } from "./homeSlice";
import { setIsCompleted } from "./homeSlice";
import { setOrderId } from "./homeSlice";
import url from "../../app/const/url";
import SearchBar from "./SearchBar";
import { Divider} from '@mui/material';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles'
import { jobData, interstedCompanyData } from "../../app/const/mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 18,
  height: 18,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  // backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundColor: '#E8F4FC',
  // backgroundImage:
  //   theme.palette.mode === 'dark'
  //     ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
  //     : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  border: '1px solid #0F43F9',
  borderColor:'#0F43F9',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#0F43F9',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    // backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#0F43F9',
  },
});

const useStyles = makeStyles(
  (theme => ({
    radioWrapper: {
      flexDirection: "row",
      alignItems: "center"
    },
    radioSelect: {
      flexDirection: "row",
      alignItems: "center"
    },
    labelPadding: {
      marginRight: "32px",
    },
    labelColor: {
      color: "#212F3F",
    }
  })),
)


const Result = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const lastActivityDateTime = new Date();
    dispatch(setLastActivity(lastActivityDateTime.toString()));
    dispatch(setIsCompleted(false));
    dispatch(setOrderId(""));
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
    if  (cityFromString !== "") {
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
      <div className="w-full flex flex-col items-center bg-background overflow-x-hidden">
        <div className="text-center w-full">
          {/* banner */}
          <div className="min-w-[740px] text-blue-100 relative">
            <video autoPlay loop muted className="w-full">
              <source src="./banner-movie.mp4" type='video/mp4' />
            </video>
            <div className="video-overlay"></div>
            <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-[58px] text-white font-bold w-full">
              <div className="relative">
                <div>
                  <p className="italic">DISCOVER YOUR PERFECT JOB</p>
                  <p className="italic">AT THE IDEAL FITNESS FACILITY</p>
                </div>
                <div className="absolute w-full mt-[25px]">
                  <SearchBar/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[150px] bg-blue-700 w-full" >
          <div className="bg-blue-800">
            {/* result-title-part */}
            <div className="result-title px-[24px] pt-[20px] pb-[16px]">
              <div className="text-black-500 text-[19px]">
                Find Coaching jobs in New York
              </div>
              <div className="text-black-600 text-[14px] pt-[12px]">
                <span className="text-purple-100 cursor-pointer">Home&nbsp;&gt;&nbsp;</span>
                <span className="text-purple-100 cursor-pointer">Coaching jobs&nbsp;&gt;&nbsp;</span>
                <span>Coach in New York&nbsp;</span>
              </div>
            </div>
            <Divider></Divider>
            {/* result-content-part */}
            <div className="px-[24px] pt-[20px] pb-[16px] grid grid-cols-4 gap-6">
              <div className="col-span-3">
                <div className="pt-[32px]">
                  <FormControl sx={{flexDirection: 'row' }} className={classes.radioWrapper}>
                    <FormLabel id="demo-customized-radios" className={classes.labelPadding}>Show priority by</FormLabel>
                    <RadioGroup
                      defaultValue="Related"
                      aria-labelledby="demo-customized-radios"
                      name="customized-radios"
                      sx={{flexDirection: 'row' }}
                      className={classes.radioSelect}
                    >
                      <FormControlLabel value="related" control={<BpRadio />} label="Related" sx={{color: '#212F3F'}} />
                      <FormControlLabel value="posting" control={<BpRadio />} label="Posting date" className={classes.labelColor} />
                      <FormControlLabel value="Update" control={<BpRadio />} label="Update date" className={classes.labelColor} />
                      <FormControlLabel value="urgent" control={<BpRadio />} label="Urgent recruitment" className={classes.labelColor} />
                      
                    </RadioGroup>
                  </FormControl>
                </div>
                {/* company list section */}
                <div className="company-list pt-[20px]">
                  {
                    jobData.map((item)=>{
                      return (
                        <JobItem data={item} key={item.id}/>
                      )
                    })
                  }
                </div>
              </div>
              <div className="col-span-1">
                <div className="pt-[36px] text-[19px] font-bold">Maybe you are interested</div>
                <div className="pt-[24px] grid grid-rows-2 gap-4 grid-flow-col">
                  {interstedCompanyData.map((item)=>{
                    return (
                      <div className="row-span-1">
                        <InterestedItem data={item} key={item.id} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

function JobItem(props: any) {
  let img = require(`../../assets/imgs/search/${props.data.imgURL}`);
  return (
    <div className="flex p-[18px] bg-white border border-grey-1200 rounded-[5px] mb-[16px]">
      <div>
        <img src={img} alt="company image" className="p-[9px] border border-grey-1100 rounded-[8px]" width={150} height={150} />
      </div>
      <div className="pl-[16px] company-data w-full">
        <div className="flex justify-between items-center">
          <span className="font-bold text-black-600">{props.data.jobName}</span>
          <span className="text-purple-200 text-[19px]">{props.data.price} $</span>
        </div>
        <div className="text-black-700 pt-[4px] text-[13px]">
          {props.data.companyName}
        </div>
        <div className="pt-[40px] flex justify-between items-center w-full">
          <div>
            <span className="text-black-600 bg-grey-1100 p-[8px] text-[11px] rounded-[3px] mr-[8px]">{props.data.tagLocation}</span>
            <span className="text-black-600 bg-grey-1100 p-[8px] text-[11px] rounded-[3px] mr-[8px]">{props.data.tagDayLeft}</span>
            <span className="text-black-600 bg-grey-1100 p-[8px] text-[11px] rounded-[3px]">{props.data.tagpdatedTime}</span>
          </div>
          <div className="flex items-center">
            <button className="text-white text-[15px] font-bold px-[24px] py-[6px] items-center bg-purple-200 rounded-[3px]">Apply</button>
            <span className="ml-[16px]">
              { 
                props.data.isBookmarked ? 
                <FontAwesomeIcon
                icon={icon({ name: "bookmark", style: 'solid'})}
                className={`pl-[2px] text-purple-200 text-[30px]`}
                /> : 
                <FontAwesomeIcon
                  icon={icon({ name: "bookmark", style: 'regular'})}
                  className={`pl-[2px] text-purple-200 text-[30px]`}
                />
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestedItem(props: any) {
  console.log(props)
  let img = require(`../../assets/imgs/search/${props.data.imgURL}`);
  return (
    <div className="bg-white border border-grey-1100 rounded-b-[8px]">
      <img src={img} alt="company cover image" />
      <div className="px-[17px] py-[12px]">
        <div className="text-[15px] text-black-800 pb-[7px] border-b border-grey-1300">
          {props.data.companyName}
        </div>
        <div className="pt-[11px] text-black-600 font-bold">
          {props.data.jobName}
        </div>
        <div className="pt-[14px] flex justify-between items-center pb-[12px] border-b border-grey-1300">
          <span className="text-black-900 text-[12px]">The deal</span><span className="text-black-900 text-[12px]">{props.data.dealDate}</span>
        </div>
        <div className="pt-[10px] text-[14px] text-black-600">
          {props.data.trainName}
        </div>
        <div className="pt-[15px] flex justify-between items-start text-[12px] text-black-900 pb-[12px]">
          <div>
            <div>Up to</div>
            <div>{props.data.price} $</div>
          </div>
          <div>
            {props.data.trainDate}
          </div>
        </div>
        <div>
          <button className="bg-purple-200 py-[10px] text-white text-[13px] rounded-[6px] w-full">Read more</button>
        </div>
      </div>
    </div>
  )
}

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default Result;
