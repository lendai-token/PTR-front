import "./style.scss";
import logo from '../../../assets/imgs/logo.svg';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, OutlinedInput, InputLabel, InputAdornment, IconButton, Divider, Button, ButtonProps, Checkbox } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import  googleIcon  from "../../../assets/imgs/signup/google-icon.svg";
import  facebookIcon  from "../../../assets/imgs/signup/facebook-icon.svg";
import  appleIcon  from "../../../assets/imgs/signup/apple-icon.svg";
import { Button as SocialButton} from "@material-tailwind/react";
import { Card } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Link as RouterLink } from "react-router-dom";

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

const EmpSignin = () => {
  const classes = useStyles();
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

  return (
      <>
          <div className="emp-signin-page"></div>
          <div className="signin-section">
              <div className="grid grid-cols-2 h-screen">
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
                            <div className="grid grid-cols-2">
                              <div className="px-[30px] pt-[15px] pb-[6px] text-[20px] shadow-custom"><RouterLink to="/emp/signup">Employer Sign Up</RouterLink></div>
                              <div className="px-[30px] pt-[15px] pb-[6px] text-[20px]"><RouterLink to="/emp/signin">Employer Sign In</RouterLink></div>
                            </div>

                            <Box sx={{
                                marginTop: 5,
                                marginLeft: 5,
                                marginRight: 5,
                            }}>
                                <Typography component="h1" variant="h5" className={classes.welcomeTxt} sx={{fontSize: '12.8px'}}>
                                    WELCOME BACK
                                </Typography>
                                <Typography component="h1" variant="h5" className={classes.titleTxt}>
                                    Employer sign in
                                </Typography>
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
                                    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mt:2 }}>
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
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                  </div>
              </div>
          </div>
      </>
  )
}

export default EmpSignin;