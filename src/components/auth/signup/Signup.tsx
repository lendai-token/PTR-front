import "./style.scss";
import logo from '../../../assets/imgs/logo.svg';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { OutlinedInput, InputLabel, InputAdornment, IconButton, Divider, Button, ButtonProps, createStyles  } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import  googleIcon  from "../../../assets/imgs/signup/google-icon.svg";
import  facebookIcon  from "../../../assets/imgs/signup/facebook-icon.svg";
import  appleIcon  from "../../../assets/imgs/signup/apple-icon.svg";
import { Button as SocialButton} from "@material-tailwind/react";
import { Card } from "@mui/material";

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
            <div className="signin-page"></div>
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
                              <Box sx={{
                                  marginTop: 5,
                                  marginLeft: 5,
                                  marginRight: 5,
                              }}>
                                  <Typography component="h1" variant="h5" style={{fontSize: '12.8px', marginBottom: '10px'}}>
                                      LET'S GET STARTED
                                  </Typography>
                                  <Typography component="h1" variant="h5" style={{fontSize: '25px'}}>
                                      Create an Account
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
                                        GET STARTED
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
                                              ALREADY HAVE A PROFILE?&nbsp;
                                              <Link href="/signin" variant="body2" className="custom-link">
                                                LOGIN HERE
                                              </Link>
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
}

export default Signup