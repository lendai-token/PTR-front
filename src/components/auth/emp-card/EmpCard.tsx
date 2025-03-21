import "./style.scss";
import logo from '../../../assets/imgs/logo.svg';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useScreenSize } from "../../../app/hooks";

import { FormControl, FormControlLabel, OutlinedInput, InputLabel, InputAdornment, IconButton, Divider, Button, ButtonProps, Checkbox } from '@mui/material';
import { RememberMe, Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import  googleIcon  from "../../../assets/imgs/signup/google-icon.svg";
import  facebookIcon  from "../../../assets/imgs/signup/facebook-icon.svg";
import  appleIcon  from "../../../assets/imgs/signup/apple-icon.svg";
import { Button as SocialButton} from "@material-tailwind/react";
import { Card } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Link as RouterLink } from "react-router-dom";
import CreditCard from "../../../assets/imgs/signup/credit-card.svg";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#1273EB',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#1273F0',
  },
}));

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#424242',
  },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  '& .MuiOutlinedInput-root': {
    // '& fieldset': {
    //   borderColor: 'red',
    // },
    '&:hover fieldset': {
      borderColor: '#424242',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#424242',
    },
  },
});

const useStyles = makeStyles({
  welcomeTxt: {
    fontSize: '12.8px', 
    marginBottom: '10px'
  },
  titleTxt: {
    fontSize: '25px',
  },
  signInTxt: {
    fontSize: '20px'
  },
  signUpTxt: {
    fontSize: '20px'
  }
});

const EmpCard = () => {
  const classes = useStyles();
  const { isDesktop, isTablet, isMobile } = useScreenSize();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let content;
  if(isDesktop){
    content = (
      <div>
        <div className="emp-card-page"></div>
        <div className="signin-section">
          {/* section-progress */}
          <div className="text-center">
            <div className="progress-ruler mx-[260px] pt-[22px] relative mt-[62px] mb-[92px]">
              <div className=" w-[99%] m-auto flex justify-between items-center">
                <div className="bg-purple-200 h-[6px] w-[25%]"></div>
                <div className="bg-purple-200 h-[6px] w-[25%]"></div>
                <div className="bg-purple-200 h-[6px] w-[25%]"></div>
                <div className="bg-purple-300 h-[6px] w-[25%]"></div>
              </div>
              <div className="dots-part flex justify-between absolute w-full top-[8px]">
                <div>
                  <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center relative">
                    <span className="text-[14px] font-bold text-white">1</span>
                  </div>
                  <div className="absolute -translate-x-[30%] translate-y-[10px] font-bold">
                  Pick Your Plan
                  </div>
                </div>
                <div>
                  <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center relative">
                    <span className="text-[14px] font-bold text-white">2</span>
                  </div>
                  <div className="absolute -translate-x-[31%] translate-y-[10px] font-bold">
                  Set Up Account
                  </div>
                </div>
                <div>
                  <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-[14px] font-bold text-white">3</span>
                  </div>
                  <div className="absolute -translate-x-[33%] translate-y-[10px] font-bold">
                  Company Profile
                  </div>
                </div>
                <div>
                  <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-[14px] font-bold text-white">4</span>
                  </div>
                  <div className="absolute -translate-x-[30%] translate-y-[10px] font-bold text-[23px]">
                  Billing Information
                  </div>
                </div>
                <div>
                  <div className="dot-step-passed w-[34px] h-[34px] rounded-full bg-purple-300 flex items-center justify-center">
                    <span className="text-[14px] font-bold text-white">5</span>
                  </div>
                  <div className="absolute -translate-x-[23%] translate-y-[10px] font-bold whitespace-nowrap">
                    Post a Job
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center mr-[68px]">
                  <img src={logo} alt="logo" className="pt-[9px] pb-[11px] pl-[263px] pr-[14px] rounded-br-[24.5px] bg-grey-700 mr-[120px]" />
                  <div className="pl-[250px] mt-[5px] text-[39px] text-white">
                      Bring to work Fitness
                  </div>
                  <div className="pl-[250px] text-white">
                      Create your free fitness professional profile and start searching and applying for available jobs in your area or areas you would like to relocate to. Every day, great employers across the nation are posting jobs on PTRoster. The perfect job is waiting for you!
                  </div>
              </div>
              <div className="flex flex-col justify-center">
                <Box sx={{maxWidth: '460px'}}>
                    <Card sx={{borderRadius: '24px'}}>
                        <Box sx={{
                            marginTop: 5,
                            marginLeft: 5,
                            marginRight: 5,
                        }}>
                            <Typography component="h1" variant="h5" className={classes.welcomeTxt} sx={{fontSize: '25px', mb: '35px'}}>
                                Payment
                            </Typography>
                            <img src={CreditCard} alt="credit-card-svg" />
                        </Box>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mx: 5,
                                mt: '35px',
                                mb: '60px'
                            }}
                        >
                            <Box component="form" noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                    <CssTextField
                                      autoComplete="cardholdername"
                                      name="cardholdername"
                                      id="cardholdername"
                                      label="Cardholder name"
                                      placeholder="Name"
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
                                    />
                                    </Grid>
                                  <Grid item xs={12}>
                                    <CssTextField
                                      autoComplete="cardnumber"
                                      name="cardnumber"
                                      id="cardnumber"
                                      label="Card number"
                                      placeholder="XXXXXXXXXXX"
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
                                    />
                                  </Grid>
                                  <Grid item xs={8}>
                                    <CssTextField
                                      autoComplete="expire"
                                      name="expire"
                                      id="expire"
                                      label="Expiration date"
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
                                    />
                                  </Grid>
                                  <Grid item xs={4}>
                                    <CssTextField
                                      autoComplete="cvv"
                                      name="cvv"
                                      id="cvv"
                                      label="CVV"
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
                                    />
                                  </Grid>
                                </Grid>
                                <ColorButton
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 2, mb: 2 , height: '56px'}}
                                >
                                  <RouterLink to="/job/open">CONTINUE</RouterLink>
                                </ColorButton>
                            </Box>
                        </Box>
                    </Card>
                </Box>
              </div>
          </div>
        </div>
      </div>
    );
  }else if(isMobile){
    content = (
        
        <Box sx={{maxWidth: '425px', padding: '10px', height: '600px'}}>
          <Card >
              <div className="flex justify-center mt-[50px]">
                <img src={logo} alt="logo" className="" />
              </div>
              <Box sx={{
                  marginTop: 5,
                  marginLeft: 5,
                  marginRight: 5,
              }}>
                  <Typography component="h1" variant="h5" className={classes.welcomeTxt} sx={{fontSize: '25px', mb: '35px'}}>
                      Payment
                  </Typography>
                  <img src={CreditCard} alt="credit-card-svg" />
              </Box>
              
              <Box
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      mx: 5,
                      mt: '35px',
                      mb: '60px'
                  }}
              >
                  <Box component="form" noValidate onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <CssTextField
                            autoComplete="cardholdername"
                            name="cardholdername"
                            id="cardholdername"
                            label="Cardholder name"
                            placeholder="Name"
                            fullWidth
                            className="rounded-textfield"
                            sx={{borderRadius: '8px'}}
                          />
                          </Grid>
                        <Grid item xs={12}>
                          <CssTextField
                            autoComplete="cardnumber"
                            name="cardnumber"
                            id="cardnumber"
                            label="Card number"
                            placeholder="XXXXXXXXXXX"
                            fullWidth
                            className="rounded-textfield"
                            sx={{borderRadius: '8px'}}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <CssTextField
                            autoComplete="expire"
                            name="expire"
                            id="expire"
                            label="Expiration date"
                            fullWidth
                            className="rounded-textfield"
                            sx={{borderRadius: '8px'}}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <CssTextField
                            autoComplete="cvv"
                            name="cvv"
                            id="cvv"
                            label="CVV"
                            fullWidth
                            className="rounded-textfield"
                            sx={{borderRadius: '8px'}}
                          />
                        </Grid>
                      </Grid>
                      <ColorButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 , height: '56px'}}
                      >
                        <RouterLink to="/job/open">CONTINUE</RouterLink>
                      </ColorButton>
                  </Box>
              </Box>
          </Card>
      </Box>
    );
  }
  return <>{content}</>;
}

export default EmpCard;