import * as React from 'react';
import Allied from "../assets/imgs/allied.png";
import Graebel from "../assets/imgs/graebel.png";
import National from "../assets/imgs/national.png";
import NorthAmerican from "../assets/imgs/north-american.png";
import United from "../assets/imgs/united.png";
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { useScreenSize } from '../app/hooks';

import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const invisiblePathList = [
    "/signin",
    "/signup",
]

const privacyItems = [
    {
        "title": "Personal Information Collection and Use",
        "desc": "At MoverMater.com, we collect personal information about you, such as your full name, email, and telephone number to provide you with the moving services you have requested.<br /><div style='padding: 5px;'></div>MoverMater.com does not, without your permission, rent, sell, exchange, or otherwise disclose personally identifiable information collected on our site except as described on this privacy policy. Personal information you provide to MoverMater.com is used to service and process your requests. To service your requests, third parties such as moving, storage and auto transport companies – depending on your request – need to be involved. MoverMater.com may also share your personal information with other third parties for them to market to you, products and services beyond those specifically requested. MoverMater.com does not permit these third parties to share any of the personal information provided to them, which you have previously provided to MoverMater.com.<div style='padding: 5px;'></div>",
    },
    {
        "title": "Security",
        "desc": "MoverMater.com maintains physical, electronic, and procedural safeguards that comply with the law, to guard your non-public personal information.<br /><div style='padding: 5px;'></div>We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.<br /><div style='padding: 5px;'></div>If you have any questions about security on our website, you can send email us at <a href='mailto:info@movermater.com' style='color:#0000ff'>info@movermater.com</a>.<br /><div style='padding: 5px;'></div>As required by law, such as to comply with a subpoena, or similar legal process when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Storage of Files",
        "desc": "As is true of most websites, MoverMater.com also gathers certain information automatically and stores it in log files. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data.<br /><div style='padding: 5px;'></div>We use this information, which does not identify individual users, to analyze trends, to administer our site, to track users’ movements around our site and to gather demographic information about our userbase. We do not link this automatically collected data to personally identifiable information.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Cookies",
        "desc": "A cookie is a small amount of data, which often includes an anonymous unique identifier that is sent to your browser from a website’s computer and stored on your computer’s hard drive. Each time you make a request on our site, a cookie is sent back to our website from your computer. The cookie helps us (i) identify you (ii) personalize your experience on our site; (iii) determine the popularity of certain content or advertisements; (iv) statistically monitor how many people are using our website; (v) as session timers; and (ix) generally facilitate your navigation. For these purposes our cookies are tied to your personal information.<br /><div style='padding: 5px;'></div>Your browser is generally set to accept cookies; however, you may set it up so it will not. This action may affect your experience on our site as you may not be able access some areas of the website or use some of the features on the site. A website can send its own cookie to your browser if your browser’s preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies that website has already sent to you, not the cookies sent to you by other websites.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Service Providers",
        "desc": "We partner with third parties to provide users with moving companies, storage providers, auto transporters and moving supply providers on our site. When a consumer requests any of these services, we will share their name, email address, phone number, and specific location, as necessary, to these third parties so that they may provide the requested service(s).<br /><div style='padding: 5px;'></div>When a user comes to our site and requests a quote from our service providers, the user’s personal information is then sent to a limited list of service providers that will be able to assist the user with his/her needs. The user’s personal information may also be sent to one or more additional third parties for them to market products and services beyond those specifically requested. The maximum number of companies this information will be sent to is 8. However, the number of companies could be lower depending on how many providers we have available in the state, county, or city that such services have been requested. personal information will be sent with the utmost possible speed upon consumer submission of such information. MoverMater.com will keep a copy of all consumers’ personal information on its data base for the purposes of record keeping and any necessary provision of assistance to consumers or service providers. Once a consumer’s information is received by the service provider, response time is at the complete discretion of the service provider.<br /><div style='padding: 5px;'></div>These third parties are prohibited from using your personally identifiable information for any other purpose. If you wish to no longer have your personal information by these third parties to provide you with their services, you may email us at <a href='mailto:info@movermater.com' style='color:#0000ff'>info@movermater.com</a>.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Links to Other Sites",
        "desc": "This Web site contains links to other sites that are not owned or operated by MoverMater.com. Please be aware that we, MoverMater.com, are not responsible for the privacy practices of such other sites.<br /><div style='padding: 5px;'></div>We encourage you to be aware of when you leave our site and to read the privacy statements of every Web site that collects personally identifiable information. This privacy statement applies only to information collected by this Web site.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Changes to This Policy",
        "desc": "If this privacy policy is changed at any time, we will make every effort to note those changes in the privacy statement, and other locations we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.<br /><div style='padding: 5px;'></div>We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our home page.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Contact Information",
        "desc": "If you have any questions or concerns regarding this policy, please contact us by emailing <a href='mailto:info@movermater.com' style='color:#0000ff'>info@movermater.com</a>. We make every effort to respond within one business week.<br /><div style='padding: 5px;'></div>",
    },
]

const termItems = [
    {
        "title": "Terms and Conditions",
        "desc": "MoverMater.com (the “Website”) owns the website located at https://www.MoverMater.com. By accessing and using the Website you (the “User”) agree to be bound by these terms and conditions (the “Terms”) which govern your access to and use of the Website.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Ownership and Use of Content and Intellectual Property Rights",
        "desc": "All text, data, charts, tables, software, video, music, sound, graphics, photographs, illustrations, artwork, names, logos, trademarks, service marks and other material on the Website (the “Content”) and all rights in it belongs to MoverMater.com, unless otherwise noted or plainly obvious. You may retrieve and display Content from the Website on a computer screen, print individual pages on paper (but not photocopy them) and store such pages in electronic form on disk (but not on any server or other storage device connected to a network) for your personal use. Content may not be copied, reproduced, republished, downloaded, posted, broadcast, or transmitted in any other way. You agree not to adapt, alter, or create a derivative work from any of the Content on the Website or to use it for any purpose other than for your personal and non-commercial use. All copyright, trademarks, database rights and other intellectual property rights that may exist in this Website and the Content shall always remain the property of MoverMater.com. The trademarks, service marks and logos used and displayed on this Website (“Trademarks”) are registered or unregistered trademarks of MoverMater.com. Nothing on this Website should be construed as granting, by implication or otherwise, any license or right to use any Trademark without written permission from MoverMater.com. The name of MoverMater.com may not be used in any way, including in advertising or publicity pertaining to distribution of Content without the prior written permission of MoverMater.com<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Unlawful Use",
        "desc": "You agree to use this Website only for lawful purposes and in a manner that does not infringe the rights of or restrict or inhibit the use and enjoyment of the Website by any third party. Such restriction or inhibition includes, but is not limited to, conduct which is defamatory, or which may harass, cause distress or inconvenience to any person and the transmission of obscene or offensive content or the disruption of normal flow of dialogue within the Website.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Liability",
        "desc": "The Website and Content is provided “AS IS” and on an “AS AVAILABLE” basis and MoverMater.com does not guarantee the accuracy, timeliness, completeness, performance, or fitness for a particular purpose of the Website or any Content. All implied warranties, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy are excluded from these Terms to the extent that they may be excluded as a matter of law. In no event will MoverMater.com be liable for any loss including, without limitation, indirect or consequential loss, or any damages arising from loss of use, data, or profits, whether in contract, tort or otherwise, arising out of or in connection with the use of this Website. MoverMater.com has tried to ensure that all the Content provided on the Website is correct at the time of publication. The Content is provided on an information basis only and should not be relied upon. No responsibility is accepted by or on behalf of MoverMater.com for any errors, omissions, or misleading Content on the Website or on any websites to which the Website connects. MoverMater.com does not warrant that the Website or Content will be uninterrupted or error free, that any defects will be corrected, or that this Website or the server that makes it available are free of viruses or bugs.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Changes to the Terms",
        "desc": "MoverMater.com reserves the right, at its discretion, to make changes to any parts of the Website or these Terms. When these Terms are amended, MoverMater.com will publish details of the amendments on the Website. Your continued use of the Website is taken as your agreement to be bound by these Terms as amended.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Jurisdiction",
        "desc": "These Terms shall be governed by and construed in accordance with United States Law and subject to the exclusive jurisdiction of the State of Nevada.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Severability",
        "desc": "If these Terms or any part of them should be determined to be illegal, invalid or otherwise unenforceable under the laws of any state or country in which these Terms are intended to be effective, then to the extent that they are so illegal, invalid or unenforceable, they shall in that state or country be treated as severed and deleted from these Terms and the remaining Terms shall survive and remain in full force and effect and continue to be binding and enforceable in that state or country.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Events Beyond Our Control",
        "desc": "MoverMater.com will not be responsible for any breach of these Terms caused by circumstances beyond its reasonable control.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Links",
        "desc": "MoverMater.com may make available third-party links but is not responsible for the availability or content of any third-party websites or material you access through this Website.<br /><div style='padding: 5px;'></div>",
    },
    {
        "title": "Conflict",
        "desc": "Should there arise any conflict between these Terms and any other written agreement between you and MoverMater.com then the latter shall prevail.<br /><div style='padding: 5px;'></div>",
    },
]

const Footer = () => {
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    const location = useLocation();
    const [openPrivacy, setOpenPrivacy] = React.useState(false);
    const [openTerm, setOpenTerm] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const handleClickOpenPrivacy = (scrollType: DialogProps['scroll']) => () => {
        setOpenPrivacy(true);
        setScroll(scrollType);
    };
    const handleClickOpenTerm = (scrollType: DialogProps['scroll']) => () => {
        setOpenTerm(true);
        setScroll(scrollType);
    };
    const handleClosePrivacy = () => {
        setOpenPrivacy(false);
    };
    const handleCloseTerm = () => {
        setOpenTerm(false);
    };
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (openPrivacy) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openPrivacy]);
    React.useEffect(() => {
        if (openTerm) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openTerm]);

    let content;
    if (isDesktop) {
        content = 
        !invisiblePathList.includes(location.pathname) ? (
            <div className="w-full bg-white border-t border-grey-600">
                <div className="bg-grey-100 px-30 px-[165px] relative">
                    <div className="absolute right-[215px] top-[85px]">
                        <span className='pr-[14px]'><FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'facebook-f', style: 'brands'})} /></span>
                        <span className='pr-[9px]'><FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'twitter', style: 'brands'})} /> </span>
                        <span><FontAwesomeIcon className="w-[30px] h-[30px] rounded-full p-[10px] bg-blue-100 text-white" icon={icon({name: 'linkedin-in', style: 'brands'})} /></span>
                    </div>
                    <div className="pt-[80px]">
                        <Link to="/">
                            <img src={logo} alt="logo-png" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex pt-[5px]">
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">Our Works</li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">Careers</li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">About Us</li>
                            <li className="py-[26px] pr-[32px] cursor-pointer text-black-300">FAQ's</li>
                        </ul>
                    </div>
                    <div className="w-full border-t flex justify-between pb-[11px]">
                        <div>
                            <ul className="flex pt-[5px]">
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">Privacy Policy</li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">Terms and Conditions</li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">Contact</li>
                                <li className="py-[22px] pr-[27px] cursor-pointer text-black-300 text-[12px]">Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className="py-[22px] pr-[27px] text-black-300 text-[12px]">
                            Copyright © PTRoster All rights reserved
                        </div>
                    </div>
                    
                    {/* <div className="text-base text-grey-300">
                        <p className="text-right text-[12px] font-bold">© 2023 MoveMater</p>
                        <p className="text-right text-[12px] font-bold">
                            <span className="cursor-pointer hover:underline">
                                <Link target='_blank' to={'https://app.contact.liveswitch.com/form#639a39aa-dc02-4277-966a-76cc23a9cabf'}>
                                Self Video Walkthrough
                                </Link>
                            </span>
                            <span>
                                &nbsp;|&nbsp; 
                            </span>
                            <span className="cursor-pointer hover:underline" onClick={handleClickOpenPrivacy("paper")}>
                                Privacy Policy
                            </span>
                            <span>
                                &nbsp;|&nbsp; 
                            </span>
                            <span className="cursor-pointer hover:underline" onClick={handleClickOpenTerm("paper")}>
                                Terms And Conditions
                            </span>
                        </p>
                    </div> */}
                </div>
                <div>
                    <Dialog
                        open={openPrivacy}
                        onClose={handleClosePrivacy}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Privacy Policy</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {
                                privacyItems.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className="font-semibold mb-1">{item.title}</p>
                                            <p className="" dangerouslySetInnerHTML={{__html: item.desc}} />
                                        </div>
                                    )
                                })
                            }
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClosePrivacy}>Close</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={openTerm}
                        onClose={handleCloseTerm}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Terms and Conditions</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {
                                termItems.map((item: any, index) => {
                                    return (
                                        <div key={index}>
                                            <p className="font-semibold mb-1">{item.title}</p>
                                            <p className="" dangerouslySetInnerHTML={{__html: item.desc}} />
                                        </div>
                                    )
                                })
                            }
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseTerm}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        ) : <div></div>
    } else if (isTablet) {
        content = 
        <div></div>
    } else if (isMobile) {
        content = 
        <div></div>
    }
    return (
        <>
           { content }
        </>
    )
}

export default Footer;