import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, Grid, TextField, OutlinedInput, InputLabel, InputAdornment, IconButton, Divider, Button, ButtonProps, FormControl, styled, Card } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../../assets/imgs/logo.svg';
import { Button as SocialButton} from "@material-tailwind/react";
import MobileHeader from '../../common/MobileHeader';
import { Link as RouterLink } from "react-router-dom";
import { useScreenSize } from "../../../app/hooks";
import  googleIcon  from "../../../assets/imgs/signup/google-icon.svg";
import  facebookIcon  from "../../../assets/imgs/signup/facebook-icon.svg";
import  appleIcon  from "../../../assets/imgs/signup/apple-icon.svg";
import "./style.scss";

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

const Signup = () => {
  const { isDesktop, isTablet } = useScreenSize();

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

  if (isDesktop) {
    content = (
      <>
        <div className="user-signup-page"></div>
          <div className="signin-section">
              <div className="grid grid-cols-2 h-screen max-w-[1440px] mx-auto">
                  <div className="flex flex-col justify-center mr-[68px]">
                      <RouterLink to="/">
                        <img src={logo} alt="logo" className="pt-[9px] pb-[11px] pl-[100px] pr-[14px] rounded-br-[24.5px] bg-grey-700 mr-[120px] max-w-[300px]" />
                      </RouterLink>
                      <div className="pl-[100px] mt-[5px] text-[39px] text-white">
                        Welcome to PTRoster!
                      </div>
                      <div className="pl-[100px] text-white mt-[10px]">
                          Create your free fitness professional profile and start searching and applying for available jobs in your area or areas you would like to relocate to. Every day, great employers across the nation are posting jobs on PTRoster. The perfect job is waiting for you!
                      </div>

                      <div className="pl-[100px] text-white mt-[15px]">
                        By creating a profile on PTRoster, you understand and agree that PTRoster will automatically email you job posting alerts that are relevant to your profile. You can always unsubscribe from this feature once you sign in or with the opt-out link in the emails. By continuing, you agree to PTRoster's  
                        <Link to="/privacy" className='text-[red] text-[18px]'> Privacy Policy</Link>, <Link className='text-[red] text-[18px]' to="/terms">Terms and Conditions</Link>, and use of cookies.                      
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
                                <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px', color: '#212121'}}>
                                    LET'S GET STARTED
                                </Typography>
                                <Typography component="h1" variant="h5" style={{fontSize: '25px', color: '#212121'}}>
                                    Create an Profile
                                </Typography>
                            </Box>
                        
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mx: 5,
                                    mt: '35px',
                                }}
                            >
                                <Box component="form" noValidate onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                      <Grid item xs={12} sm={12}>
                                        <CssTextField
                                          autoComplete="given-name"
                                          name="yourName"
                                          id="yourName"
                                          label="Your Full Name"
                                          placeholder="Johnson Doe"
                                          required
                                          fullWidth
                                          autoFocus
                                          className="rounded-textfield"
                                        />
                                      </Grid>
                                      <Grid item xs={12}>
                                        <CssTextField
                                          autoComplete="email"
                                          name="email"
                                          id="email"
                                          label="Email"
                                          placeholder="johnsondoe@nomail.com"
                                          required
                                          fullWidth
                                          className="rounded-textfield"
                                        />
                                        </Grid>
                                      <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                          <InputLabel htmlFor="password" className="custom-input-label">
                                            Password *
                                          </InputLabel>
                                          <OutlinedInput
                                            autoComplete="new-password"
                                            name="password"
                                            id="password"
                                            required
                                            type={showPassword ? "text" : "password"}
                                            sx={{borderRadius: '8px'}}
                                            endAdornment={
                                              <InputAdornment position="end">
                                                <IconButton
                                                  aria-label="toggle password visibility"
                                                  onClick={handleClickShowPassword}
                                                  onMouseDown={handleMouseDownPassword}
                                                  edge="end"
                                                >
                                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                              </InputAdornment>
                                            }
                                            className="custom-outlined-input"
                                            label="Password"
                                          />
                                        </FormControl>
                                      </Grid>
                                    </Grid>
                                    <ColorButton
                                      type="submit"
                                      fullWidth
                                      variant="contained"
                                      sx={{ mt: 3, mb: 2 , height: '56px'}}
                                    >
                                      <RouterLink to="/create-user/step1">
                                        GET STARTED
                                      </RouterLink>
                                    </ColorButton>
                                    <Divider sx={{color: '#212121'}}>Or</Divider>
                                    <Box sx={{ width:'100%', mt:'22px'}}>
                                      <SocialButton
                                        size="lg"
                                        variant="outlined"
                                        color="blue-gray"
                                        className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                      >
                                        <RouterLink to="/create-user/step1">
                                          <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                          Sign up with Google
                                        </RouterLink>
                                      </SocialButton>
                                      <SocialButton
                                        size="lg"
                                        variant="outlined"
                                        color="blue-gray"
                                        className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                      >
                                        <RouterLink to="/create-user/step1">
                                          <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                          Sign up with Facebook
                                        </RouterLink>
                                      </SocialButton>
                                      <SocialButton
                                        size="lg"
                                        variant="outlined"
                                        color="blue-gray"
                                        className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                      >
                                        <RouterLink to="/create-user/step1">
                                          <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                          Sign up with Apple
                                        </RouterLink>
                                      </SocialButton>
                                    </Box>
                                    <Box sx={{mt: '48px', mb: '65px'}}>
                                      <Grid container justifyContent="center">
                                        <Grid item>
                                            <span className='text-black-1000'>ALREADY HAVE A PROFILE?&nbsp;</span>
                                            <RouterLink to="/signin" className="custom-link">LOG IN HERE</RouterLink>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                  </div>
              </div>
          </div>
      </>
    )
  } else if (isTablet) {
    content = (
      <>
        <div className="user-signup-page"></div>
          <div className="signin-section">
              <div className="h-screen">
                <div className="flex justify-center h-full">
                  <Box sx={{maxWidth: '460px', margin: 'auto'}}>
                      <Card sx={{borderRadius: '24px'}}>
                          <Box sx={{
                              marginTop: 5,
                              marginLeft: 5,
                              marginRight: 5,
                          }}>
                              <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px', color: '#212121'}}>
                                  LET'S GET STARTED
                              </Typography>
                              <Typography component="h1" variant="h5" style={{fontSize: '25px', color: '#212121'}}>
                                  Create an Profile
                              </Typography>
                          </Box>
                      
                          <Box
                              sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  mx: 5,
                                  mt: '35px',
                              }}
                          >
                              <Box component="form" noValidate onSubmit={handleSubmit}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                      <CssTextField
                                        autoComplete="given-name"
                                        name="yourName"
                                        id="yourName"
                                        label="Your Full Name"
                                        placeholder="Please enter the Full name"
                                        required
                                        fullWidth
                                        autoFocus
                                        className="rounded-textfield"
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <CssTextField
                                        autoComplete="email"
                                        name="email"
                                        id="email"
                                        label="Email"
                                        placeholder="johnsondoe@nomail.com"
                                        required
                                        fullWidth
                                        className="rounded-textfield"
                                      />
                                      </Grid>
                                    <Grid item xs={12}>
                                      <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="password" className="custom-input-label">
                                          Password *
                                        </InputLabel>
                                        <OutlinedInput
                                          autoComplete="new-password"
                                          name="password"
                                          id="password"
                                          required
                                          type={showPassword ? "text" : "password"}
                                          sx={{borderRadius: '8px'}}
                                          endAdornment={
                                            <InputAdornment position="end">
                                              <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                              >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                              </IconButton>
                                            </InputAdornment>
                                          }
                                          className="custom-outlined-input"
                                          label="Password"
                                        />
                                      </FormControl>
                                    </Grid>
                                  </Grid>
                                  <ColorButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 , height: '56px'}}
                                  >
                                    <RouterLink to="/create-user/step1">
                                      GET STARTED
                                    </RouterLink>
                                  </ColorButton>
                                  <Divider sx={{color: '#212121'}}>Or</Divider>
                                  <Box sx={{ width:'100%', mt:'22px'}}>
                                    <SocialButton
                                      size="lg"
                                      variant="outlined"
                                      color="blue-gray"
                                      className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                    >
                                      <RouterLink to="/create-user/step1">
                                        <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                        Sign up with Google
                                      </RouterLink>
                                    </SocialButton>
                                    <SocialButton
                                      size="lg"
                                      variant="outlined"
                                      color="blue-gray"
                                      className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                    >
                                      <RouterLink to="/create-user/step1">
                                        <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                        Sign up with Facebook
                                      </RouterLink>
                                    </SocialButton>
                                    <SocialButton
                                      size="lg"
                                      variant="outlined"
                                      color="blue-gray"
                                      className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                                    >
                                      <RouterLink to="/create-user/step1">
                                        <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                        Sign up with Apple
                                      </RouterLink>
                                    </SocialButton>
                                  </Box>
                                  <Box sx={{mt: '48px', mb: '65px'}}>
                                    <Grid container justifyContent="center">
                                      <Grid item>
                                          <span className='text-black-1000'>ALREADY HAVE A PROFILE?&nbsp;</span>
                                          <RouterLink to="/signin" className="custom-link">LOGIN HERE</RouterLink>
                                      </Grid>
                                    </Grid>
                                  </Box>
                              </Box>
                          </Box>
                      </Card>
                  </Box>
                </div>
              </div>
          </div>
      </>
    )
  } else {
    content = (
      <>
        <div className="">
          <Box sx={{maxWidth: '460px', margin: 'auto'}}>
            <MobileHeader />
          </Box>
          <div className="flex justify-center h-full">
            <Box sx={{maxWidth: '460px', margin: 'auto'}}>
                <Box  sx={{borderRadius: '24px'}}>
                    <Box sx={{
                        marginTop: 4,
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px', color: '#212121'}}>
                            LET'S GET STARTED
                        </Typography>
                        <Typography component="h1" variant="h5" style={{fontSize: '25px', color: '#212121'}}>
                            Create an Profile
                        </Typography>
                    </Box>
                
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mx: 5,
                            mt: '35px',
                        }}
                    >
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={12}>
                                <CssTextField
                                  autoComplete="given-name"
                                  name="yourName"
                                  id="yourName"
                                  label="Your Name"
                                  placeholder="Please enter the Full name"
                                  required
                                  fullWidth
                                  autoFocus
                                  className="rounded-textfield"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <CssTextField
                                  autoComplete="email"
                                  name="email"
                                  id="email"
                                  label="Email"
                                  placeholder="johnsondoe@nomail.com"
                                  required
                                  fullWidth
                                  className="rounded-textfield"
                                />
                                </Grid>
                              <Grid item xs={12}>
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                  <InputLabel htmlFor="password" className="custom-input-label">
                                    Password *
                                  </InputLabel>
                                  <OutlinedInput
                                    autoComplete="new-password"
                                    name="password"
                                    id="password"
                                    required
                                    type={showPassword ? "text" : "password"}
                                    sx={{borderRadius: '8px'}}
                                    endAdornment={
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                        >
                                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                      </InputAdornment>
                                    }
                                    className="custom-outlined-input"
                                    label="Password"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <ColorButton
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 , height: '56px'}}
                            >
                              <RouterLink to="/create-user/step1">
                                GET STARTED
                              </RouterLink>
                            </ColorButton>
                            <Divider>Or</Divider>
                            <Box sx={{ width:'100%', mt:'22px'}}>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                              >
                                <RouterLink to="/create-user/step1">
                                  <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                  Sign up with Google
                                </RouterLink>
                              </SocialButton>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                              >
                                <RouterLink to="/create-user/step1">
                                  <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                  Sign up with Facebook
                                </RouterLink>
                              </SocialButton>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal text-black-1100 border-grey-1600 bg-grey-1500"
                              >
                                <RouterLink to="/create-user/step1">
                                  <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                  Sign up with Apple
                                </RouterLink>
                              </SocialButton>
                            </Box>
                            <Box sx={{mt: '48px', mb: '65px'}}>
                              <Grid container justifyContent="center">
                                <Grid item>
                                    <span className='text-black-1000'>ALREADY HAVE A PROFILE?&nbsp;</span>
                                    <RouterLink to="/signin" className="custom-link">LOG IN HERE</RouterLink>
                                </Grid>
                              </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </Box>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      { content }
    </>
  )
}

export default Signup