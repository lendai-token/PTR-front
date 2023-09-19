import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { useScreenSize } from '../app/hooks';
import { useLocation } from 'react-router-dom';

const invisiblePathList = [
    "/signin",
    "/signup",
]

const Navbar = () => {
    const { isDesktop, isTablet } = useScreenSize();
    const location = useLocation();

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
                    <Link to="#" className='text-base text-blue-100 bg-grey-100 rounded border-grey-100 px-[24px] py-[10px] hover:text-white hover:bg-blue-100'>Post a Job</Link>
                    <Link to="#" className='text-base hover:text-blue-100 hover:bg-grey-100 rounded border-grey-100 px-[24px] py-[10px] text-white bg-blue-100'>Sign in</Link>
                    <Link to="#" className='text-base text-blue-100 bg-grey-100 rounded border-grey-100 px-[24px] py-[10px] hover:text-white hover:bg-blue-100'>Sign up</Link>
                </div>
            </div>
        ) : (
            <div></div>
        )
        
    } else if (isTablet) {
        content = 
        <div className="w-full px-30 bg-blue-100 px-[20px] py-[8px] flex justify-center">
            <Link to="/">
                <img src={logo} alt="logo-png" />
            </Link>
        </div>
    } else {
        content = 
        <div className="w-full px-30 bg-blue-100 px-[20px] py-[8px] flex justify-center">
            <Link to="/">
                <img src={logo} alt="logo-png" />
            </Link>
        </div>
    }
    return (
      <>
        { content }
      </>
    )
}

export default Navbar;