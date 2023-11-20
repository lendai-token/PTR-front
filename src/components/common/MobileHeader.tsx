import { Link as RouterLink } from "react-router-dom";
import logo from '../../assets/imgs/logo.svg';


const MobileHeader = () => {
    return (
        <div className='flex items-center mt-[64px] mx-[40px] justify-between'>
            <span className='text-[40px] pr-5 text-blue-100'>
                <RouterLink to="/">
                    &lt;
                </RouterLink>
            </span>
            <span>
                <RouterLink to="/">
                    <img src={logo} alt="logo-png" className='h-[27px]'/>
                </RouterLink>
            </span>
        </div>
    )
}

export default MobileHeader;