import * as React from 'react';
import { FormControl, FormControlLabel, OutlinedInput, InputLabel, InputAdornment, IconButton, Divider, Button, ButtonProps, Checkbox,TextField, Grid, Link, Box, Typography, styled, Card } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import { Button as SocialButton} from "@material-tailwind/react";
import { useScreenSize } from "../../../app/hooks";
import logo from '../../../assets/imgs/logo.svg';
import  googleIcon  from "../../../assets/imgs/signup/google-icon.svg";
import  facebookIcon  from "../../../assets/imgs/signup/facebook-icon.svg";
import  appleIcon  from "../../../assets/imgs/signup/apple-icon.svg";

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

const Signin = () => {
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
        <div className="signin-page"></div>
        <div className="signin-section">
            <div className="grid grid-cols-2 h-screen">
                <div className="flex flex-col justify-center mr-[68px]">
                    <RouterLink to="/">
                      <img src={logo} alt="logo" className="pt-[9px] pb-[11px] pl-[100px] pr-[14px] rounded-br-[24.5px] bg-grey-700 mr-[120px] max-w-[300px]" />
                    </RouterLink>
                    <div className="pl-[100px] mt-[5px] text-[39px] text-white">
                        Bring to work Fitness
                    </div>
                    <div className="pl-[100px] text-white">
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
                            <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px'}}>
                                WELCOME BACK
                            </Typography>
                            <Typography component="h1" variant="h5" style={{fontSize: '25px'}}>
                                Log In to your Account
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
                                  <Grid item xs={12}>
                                    {/* <FormControl sx={{ width: '100%' }} variant="outlined">
                                      <InputLabel htmlFor="email">
                                        Email
                                      </InputLabel>
                                      <OutlinedInput
                                        autoComplete="email"
                                        name="email"
                                        id="email"
                                        required
                                        label="Email"
                                        placeholder="johnsondoe@nomail.com"
                                        sx={{borderRadius: '8px'}}
                                      />
                                    </FormControl> */}
                                    <CssTextField
                                      autoComplete="email"
                                      name="email"
                                      id="email"
                                      label="Email"
                                      placeholder="johnsondoe@nomail.com"
                                      required
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
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
                                        label="Password"
                                        className="custom-outlined-input"
                                        sx={[{borderRadius: '8px'}]}
                                      />
                                    </FormControl>
                                  </Grid>
                                </Grid>
                                <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mt:2}}>
                                  <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                  />
                                  <Typography>
                                    <Link href="#" variant="body2" sx={{fontSize: '16px'}}>
                                      Forgot Password
                                    </Link>
                                  </Typography>
                                </Box>
                                <ColorButton
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 2, mb: 2 , height: '56px'}}
                                >
                                  CONTINUE
                                </ColorButton>
                                <Divider>Or</Divider>
                                <Box sx={{ width:'100%', mt:'22px'}}>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                    Sign up with Google
                                  </SocialButton>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                    Sign up with Facebook
                                  </SocialButton>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                    Sign up with Apple
                                  </SocialButton>
                                </Box>
                                <Box sx={{mt: '48px', mb: '65px'}}>
                                  <Grid container justifyContent="center">
                                    <Grid item>
                                        New User&nbsp;
                                        <RouterLink to="/signup" className="custom-link">
                                          SIGN UP HERE
                                        </RouterLink>
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
        <div className="signin-page"></div>
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
                            <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px'}}>
                                WELCOME BACK
                            </Typography>
                            <Typography component="h1" variant="h5" style={{fontSize: '25px'}}>
                                Log In to your Account
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
                                  <Grid item xs={12}>
                                    {/* <FormControl sx={{ width: '100%' }} variant="outlined">
                                      <InputLabel htmlFor="email">
                                        Email
                                      </InputLabel>
                                      <OutlinedInput
                                        autoComplete="email"
                                        name="email"
                                        id="email"
                                        required
                                        label="Email"
                                        placeholder="johnsondoe@nomail.com"
                                        sx={{borderRadius: '8px'}}
                                      />
                                    </FormControl> */}
                                    <CssTextField
                                      autoComplete="email"
                                      name="email"
                                      id="email"
                                      label="Email"
                                      placeholder="johnsondoe@nomail.com"
                                      required
                                      fullWidth
                                      className="rounded-textfield"
                                      sx={{borderRadius: '8px'}}
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
                                        label="Password"
                                        className="custom-outlined-input"
                                        sx={[{borderRadius: '8px'}]}
                                      />
                                    </FormControl>
                                  </Grid>
                                </Grid>
                                <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mt:2}}>
                                  <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                  />
                                  <Typography>
                                    <Link href="#" variant="body2" sx={{fontSize: '16px'}}>
                                      Forgot Password
                                    </Link>
                                  </Typography>
                                </Box>
                                <ColorButton
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 2, mb: 2 , height: '56px'}}
                                >
                                  CONTINUE
                                </ColorButton>
                                <Divider>Or</Divider>
                                <Box sx={{ width:'100%', mt:'22px'}}>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                    Sign up with Google
                                  </SocialButton>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                    Sign up with Facebook
                                  </SocialButton>
                                  <SocialButton
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal"
                                  >
                                    <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                    Sign up with Apple
                                  </SocialButton>
                                </Box>
                                <Box sx={{mt: '48px', mb: '65px'}}>
                                  <Grid container justifyContent="center">
                                    <Grid item>
                                        New User&nbsp;
                                        <RouterLink to="/signup" className="custom-link">
                                          SIGN UP HERE
                                        </RouterLink>
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
        <div className="h-screen">
            <div className="flex justify-center h-full">
              <Box sx={{maxWidth: '460px', margin: 'auto'}}>
                <Box sx={{borderRadius: '24px'}}>
                    <Box sx={{
                        marginTop: 5,
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px'}}>
                            WELCOME BACK
                        </Typography>
                        <Typography component="h1" variant="h5" style={{fontSize: '25px'}}>
                            Log In to your Account
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
                              <Grid item xs={12}>
                                {/* <FormControl sx={{ width: '100%' }} variant="outlined">
                                  <InputLabel htmlFor="email">
                                    Email
                                  </InputLabel>
                                  <OutlinedInput
                                    autoComplete="email"
                                    name="email"
                                    id="email"
                                    required
                                    label="Email"
                                    placeholder="johnsondoe@nomail.com"
                                    sx={{borderRadius: '8px'}}
                                  />
                                </FormControl> */}
                                <CssTextField
                                  autoComplete="email"
                                  name="email"
                                  id="email"
                                  label="Email"
                                  placeholder="johnsondoe@nomail.com"
                                  required
                                  fullWidth
                                  className="rounded-textfield"
                                  sx={{borderRadius: '8px'}}
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
                                    label="Password"
                                    className="custom-outlined-input"
                                    sx={[{borderRadius: '8px'}]}
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mt:2}}>
                              <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                              />
                              <Typography>
                                <Link href="#" variant="body2" sx={{fontSize: '16px'}}>
                                  Forgot Password
                                </Link>
                              </Typography>
                            </Box>
                            <ColorButton
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 2, mb: 2 , height: '56px'}}
                            >
                              CONTINUE
                            </ColorButton>
                            <Divider>Or</Divider>
                            <Box sx={{ width:'100%', mt:'22px'}}>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                              >
                                <img src={ googleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px]" />
                                Sign up with Google
                              </SocialButton>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center mb-[9px] relative font-trebuchet normal-case font-normal"
                              >
                                <img src={ facebookIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[12px]" />
                                Sign up with Facebook
                              </SocialButton>
                              <SocialButton
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center gap-3 w-full justify-center relative font-trebuchet normal-case font-normal"
                              >
                                <img src={ appleIcon } alt="metamask" className="h-6 w-6 absolute left-[40px] top-[10px]" />
                                Sign up with Apple
                              </SocialButton>
                            </Box>
                            <Box sx={{mt: '48px', mb: '65px'}}>
                              <Grid container justifyContent="center">
                                <Grid item>
                                    New User&nbsp;
                                    <RouterLink to="/signup" className="custom-link">
                                      SIGN UP HERE
                                    </RouterLink>
                                </Grid>
                              </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
              </Box>
            </div>
        </div>
      </>
    )
  }

  return (
      <>{ content }</>
  )
}

export default Signin;