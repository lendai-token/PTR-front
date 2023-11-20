import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from '@mui/icons-material';
import { useScreenSize, useAppDispatch, useAppSelector } from "../../app/hooks";



//import resource
import "./style.scss";
import banner from '../../assets/imgs/create-user/banner-img.png';
import contact_phone from "../../assets/imgs/contact-phone.svg";
import contact_mail from "../../assets/imgs/contact-mail.svg";



const Contact = () =>{
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    let content;
    if(isDesktop){
        content = (
            <div className="contact-page-background">
                <div className="contact-page-banner">
                </div>
                <div className="contact-page-conntent ">
                    <div className="max-w-[1440px] mx-auto">                 
                        <div className="xl:pl-[18%] lg:pl-[14%] pl-[12%]">
                            <div className="contact-page-content-title">
                                <h1>Bring to work Fitness</h1>
                            </div>
                            <div className="contact-page-content-phone">
                                <div>
                                    <img src={contact_phone}/>
                                </div>
                                <div className="contact-page-content-phone-information">
                                    <h1>Phone Number</h1>
                                    <h2>+1 (513) 264-2969</h2>
                                </div>
                            </div>
                            <div className="contact-page-content-mail">
                                <div>
                                    <img src={contact_mail}/>
                                </div>
                                <div className="contact-page-content-mail-information">
                                    <h1>Phone Number</h1>
                                    <h2>+1 (513) 264-2969</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-page-form-group">
                    <div className="relative p-[36px]">
                        <h1>Contact Us</h1>
                        <form className="">
                            <div className="input-group">
                                <label>Full Name</label>
                                <br/>
                                <input className="w-full mt-[5px] form-input-control" placeholder="Samantha Wheeler"/>
                            </div>
                            <div className="input-group">
                                <label>Email Address</label>
                                <br/>
                                <input className="w-full mt-[5px] form-input-control" placeholder="samantha@email.com"/>
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <br/>
                                <input className="w-full mt-[5px] form-input-control" placeholder="New Project"/>
                            </div>
                            <div className="input-group">
                                <label>Provide a brief description</label>
                                <br/>
                                <textarea className="w-full mt-[5px] form-textarea-control" placeholder="Description"></textarea>
                            </div>
                            <div className="input-group">
                                <input type="submit" className="w-full form-button-control" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else if(isTablet){
        content = (
           <>isTablet</>
        );
    } else{
        content = (
            <div className="contact-page-mo">
                <div className="contact-page-mo-content-title">
                    <h1 className="py-[10px]">Bring to work Fitness</h1>
                </div>
                <div className="contact-page-mo-conntent-information px-[38px] pt-[11px]">
                    <div className="contact-page-mo-content-phone">
                        <div>
                            <img src={contact_phone}/>
                        </div>
                        <div className="contact-page-mo-content-phone-information">
                            <h1>Phone Number</h1>
                            <h2>+1 (513) 264-2969</h2>
                        </div>
                    </div>
                    <div className="contact-page-mo-content-mail mt-[25px]">
                        <div>
                            <img src={contact_mail}/>
                        </div>
                        <div className="contact-page-mo-content-mail-information">
                            <h1>Email</h1>
                            <h2>PTROSTER@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className="contact-page-mo-form-group p-[20px]">
                    <h1>Contact Us</h1>
                    <form className="">
                        <div className="input-group">
                            <label>Full Name</label>
                            <br/>
                            <input className="w-full mt-[5px] form-input-control" placeholder="Samantha Wheeler"/>
                        </div>
                        <div className="input-group">
                            <label>Email Address</label>
                            <br/>
                            <input className="w-full mt-[5px] form-input-control" placeholder="samantha@email.com"/>
                        </div>
                        <div className="input-group">
                            <label>Subject</label>
                            <br/>
                            <input className="w-full mt-[5px] form-input-control" placeholder="New Project"/>
                        </div>
                        <div className="input-group">
                            <label>Provide a brief description</label>
                            <br/>
                            <textarea className="w-full mt-[5px] form-textarea-control" placeholder="Description"></textarea>
                        </div>
                        <div className="input-group">
                            <input type="submit" className="w-full form-button-control" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    return <>{content}</>;
}


export default Contact; 
