import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Box, SwipeableDrawer, Button, List, ListItem, ListItemButton} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useScreenSize } from '../app/hooks';
import logo from '../assets/imgs/logo.png';
import MenuIcon from "../assets/imgs/landing/menu-icon.svg";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useStyles = makeStyles({
    menuItemWrapper: {
        paddingTop: '24px',
        paddingBottom: '24px',
        borderBottom: '1px solid #D4D2E3',
        color: '#ADABC3',
    },
    menuItemWrapperLast: {
        paddingTop: '24px',
        paddingBottom: '24px',
        color: '#ADABC3',
    },
    menuListWrapper: {
        padding: '0 24px'
    }
  });

            
const invisiblePathList = [
    "/signin",
    "/signup",
    "/emp/signin",
    "/emp/signup",
    "/emp/card",
]

const menuList = [
    {
        text: "Post a Job",
        link: "/job/open"
    },
    {
        text: "Join as Employer",
        link: "/emp/signup"
    },
    {
        text: "Profile",
        link: "/create-user/final"
    },
    {
        text: "Pricing",
        link: "/pricing"
    },
    {
        text: "Contact",
        link: "#"
    },
]

const Navbar = () => {
    const { isDesktop, isTablet } = useScreenSize();
    const location = useLocation();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = 
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.menuListWrapper} sx={{ padding: '0 24px'}}>
                {menuList.map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        {index === 4 ? (
                            <ListItemButton className={classes.menuItemWrapperLast} sx={{
                                paddingTop: '24px',
                                paddingBottom: '24px',
                                color: '#ADABC3',
                            }}>
                                <Link to={item.link}>{item.text}</Link>
                            </ListItemButton>
                        ) : (
                            <ListItemButton className={classes.menuItemWrapper} sx={{
                                paddingTop: '24px',
                                paddingBottom: '24px',
                                borderBottom: '1px solid #D4D2E3',
                                color: '#ADABC3',
                            }}>
                                <Link to={item.link}>{item.text}</Link>
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
                <ListItem sx={{justifyContent: 'center'}}>
                    <Link to="/signin">
                        <button className="mt-[8px] text-[12px] font-bold bg-blue-100 rounded-[30px] px-[54px] py-[14px] text-white">Sign in</button>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    let content;
    if (isDesktop) {
        content = !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full px-30 flex items-center justify-between bg-white px-[72px] py-[22px]">
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo-png" />
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link to="/job/open" className='text-base text-purple-100 rounded-[8px] border border-purple-100 px-[24px] py-[10px] hover:text-white hover:bg-purple-100'>Post a Job</Link>
                    <Link to="/emp/signup" className='text-base hover:text-purple-100 border border-purple-100 hover:bg-white rounded border-white-100 px-[24px] py-[10px] text-white bg-purple-100'>Join as Employer</Link>
                    <Link to="/signup" className='text-base text-purple-100 rounded-[8px] border border-purple-100 px-[24px] py-[10px] hover:text-white hover:bg-purple-100'>Sign up</Link>
                </div>
            </div>
        ) : (
            <div></div>
        )
        
    } else if (isTablet) {
        content = !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full px-30 flex items-center justify-between bg-white pl-[60px] pr-[40px] py-[22px]">
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo-png" />
                    </Link>
                </div>
                
                <div>
                    {(['right'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><img src={ MenuIcon } alt="menu-icon" /></Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ) : (
            <div></div>
        )
    } else {
        content = !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full px-30 flex items-center justify-between bg-white pl-[18px] pr-[4px] py-[10px]">
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo-png" />
                    </Link>
                </div>
                
                <div>
                    {(['right'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><img src={ MenuIcon } alt="menu-icon" /></Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ) : (
            <div></div>
        )
    }
    return (
      <>
        { content }
      </>
    )
}

export default Navbar;