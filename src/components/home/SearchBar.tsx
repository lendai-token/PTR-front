import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import './style.scss';

const SearchBar = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [visibleJob, setVisibleJob] = useState(false);
    const [visibleLocation, setVisibleLocation] = useState(false);


    // click away listener
    useEffect(() => {
        document.addEventListener("mousedown", handleClickJob, false);
        document.addEventListener("mousedown", handleClickLocation, false);
        return () => {
            document.removeEventListener("mousedown", handleClickJob, false);
            document.removeEventListener("mousedown", handleClickLocation, false);
        }
    }, []);

    const handleClickJob = (e: any) => {
        if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
            return;
        }
        setVisibleJob(false);
    };

    const selectItemJob = (item: any) => {
        setVisibleJob(false);
    };

    const handleClickLocation = (e: any) => {
        if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
            return;
        }
        setVisibleLocation(false);
    };

    const selectItemLocation = (item: any) => {
        setVisibleLocation(false);
    };

    const jobList = [
        {
            id: 1,
            name: 'Aqua Fitness Instructor',
        }, 
        {
            id: 2,
            name: 'Barre Instructor',
        },
        {
            id: 3,
            name: 'Bootcamp Instructor',
        },
        {
            id: 4,
            name: 'CrossFit Coach',
        },
        {
            id: 5,
            name: 'Dance Instructor',
        },
        {
            id: 6,
            name: 'Functional Training Coach',
        },
        {
            id: 7,
            name: 'Group Fitness Instructor',
        },
        {
            id: 8,
            name: 'Martial Arts Instructor',
        },
        {
            id: 9,
            name: 'Mindfulness/Meditation Instructor',
        },
        {
            id: 10,
            name: 'Nutritionist/Dietitian',
        },
    ];

    const locationList = [
        {
            id: 1,
            name: 'Alabama',
        }, 
        {
            id: 2,
            name: 'Alaska',
        },
        {
            id: 3,
            name: 'Arizona',
        },
        {
            id: 4,
            name: 'Arkansas',
        },
        {
            id: 5,
            name: 'California',
        },
        {
            id: 6,
            name: 'Colorado',
        },
        {
            id: 7,
            name: 'Connecticut',
        },
        {
            id: 8,
            name: 'Delaware',
        }
    ];

    return (
        <div className="mx-[200px]">
            <div className="grid grid-cols-5">
                <div className="col-span-4 grid grid-cols-4 bg-white border-[1px] rounded-[3px] h-[54px]">
                    <div tabIndex={0} className="col-span-1 flex items-center h-[40px] pl-4 border-r-[1px] border-grey-300 mt-[6px]">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.89419 3.49884L10.5881 3.49852C10.5969 3.49873 10.6057 3.49884 10.6145 3.49884L10.6425 3.4965L17.3353 3.49884L10.6138 16.9697L3.89419 3.49884Z" fill="#B5B5B5"/>
                            </svg>
                        </div>
                        <button 
                            className="text-[20px] text-grey-300 p-4 font-normal"
                            onClick={() => {
                                setVisibleJob(true);
                            }}
                        >
                            Job title
                        </button>
                    </div>
                    <div className="col-span-3 relative">
                        <input type="text" className="absolute top-2/4 search-input-bar text-[20px] font-normal" placeholder="Search all job" />
                        <span className="enlarger-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.65063 0C13.4205 0 17.3004 3.87986 17.3004 8.64974C17.3004 10.9002 16.4367 12.9527 15.0235 14.4931L17.8044 17.2681C18.0646 17.5284 18.0655 17.9494 17.8053 18.2097C17.6756 18.3411 17.5041 18.406 17.3336 18.406C17.1639 18.406 16.9934 18.3411 16.8628 18.2114L14.0484 15.4049C12.5679 16.5905 10.6906 17.3004 8.65063 17.3004C3.88075 17.3004 0 13.4196 0 8.64974C0 3.87986 3.88075 0 8.65063 0ZM8.65063 1.33237C4.61533 1.33237 1.33237 4.61444 1.33237 8.64974C1.33237 12.685 4.61533 15.968 8.65063 15.968C12.685 15.968 15.968 12.685 15.968 8.64974C15.968 4.61444 12.685 1.33237 8.65063 1.33237Z" fill="black"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="col-span-1 pl-4 text-[20px] text-black relative">
                    <div className="h-full">
                        <button 
                            className="text-[20px] text-grey-300 font-normal p-4 bg-white w-full rounded-[3px] h-[54px] flex justify-center items-center"
                            onClick={() => {
                                setVisibleLocation(true);
                            }}
                        >
                            <span className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12.5961 11.596L9.06108 15.132C8.92178 15.2714 8.75638 15.3819 8.57433 15.4574C8.39228 15.5328 8.19714 15.5716 8.00008 15.5716C7.80302 15.5716 7.60788 15.5328 7.42583 15.4574C7.24378 15.3819 7.07838 15.2714 6.93908 15.132L3.40408 11.596C2.80046 10.9924 2.32163 10.2759 1.99492 9.48727C1.66822 8.69866 1.50005 7.85343 1.5 6.99982C1.49995 6.14622 1.66804 5.30097 1.99465 4.51232C2.32127 3.72368 2.80002 3.00709 3.40358 2.40347C4.00713 1.79985 4.72367 1.32102 5.51228 0.994314C6.30089 0.667612 7.14612 0.499436 7.99973 0.49939C8.85333 0.499343 9.69858 0.667427 10.4872 0.994043C11.2759 1.32066 11.9925 1.79941 12.5961 2.40297C13.1998 3.00656 13.6786 3.72315 14.0053 4.51183C14.332 5.3005 14.5002 6.1458 14.5002 6.99947C14.5002 7.85313 14.332 8.69844 14.0053 9.48711C13.6786 10.2758 13.1998 10.9924 12.5961 11.596ZM11.5361 3.46397C10.5983 2.52616 9.32634 1.99831 8.00008 1.99831C6.67382 1.99831 5.40189 2.52516 4.46408 3.46297C3.52627 4.40077 2.99942 5.67271 2.99942 6.99897C2.99942 8.32523 3.52627 9.59716 4.46408 10.535L8.00008 14.07L11.5361 10.536C12.0005 10.0717 12.3689 9.5204 12.6203 8.91369C12.8716 8.30698 13.001 7.65669 13.001 6.99997C13.001 6.34325 12.8716 5.69296 12.6203 5.08625C12.3689 4.47953 12.0005 3.92828 11.5361 3.46397ZM8.00008 8.99997C7.73374 9.00599 7.46888 8.95874 7.22105 8.861C6.97323 8.76325 6.74743 8.61698 6.55691 8.43077C6.36639 8.24455 6.21499 8.02215 6.11161 7.77662C6.00822 7.5311 5.95493 7.26739 5.95486 7.00098C5.9548 6.73457 6.00796 6.47084 6.11122 6.22526C6.21448 5.97968 6.36577 5.7572 6.55619 5.57089C6.74662 5.38459 6.97235 5.2382 7.22012 5.14033C7.4679 5.04246 7.73274 4.99508 7.99908 5.00097C8.52164 5.01252 9.01891 5.22819 9.38445 5.60181C9.74998 5.97542 9.95473 6.47729 9.95486 6.99998C9.95499 7.52267 9.7505 8.02464 9.38515 8.39844C9.0198 8.77223 8.52263 8.98815 8.00008 8.99997Z" fill="black"/>
                                </svg>
                            </span>
                            <span>State Locations</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <div ref={dropdownRef} className={`rounded-[3px] dropdown ${visibleJob ? "v" : ""}`}>
                        {visibleJob && (
                        <ul>
                            {jobList.length === 0 && (
                                <li key="zxc" className="dropdown_item">
                                    no result
                                </li>
                            )}
                            {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
                            {jobList && jobList.map((x: any) => (
                                <li
                                key={x.id}
                                onClick={() => selectItemJob(x)}
                                className="dropdown_item"
                                >
                                <div className="item_text1">{x.name}</div>
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>
                <div className="col-span-3"></div>
                <div className="col-span-1 pl-4">
                    <div ref={dropdownRef} className={`rounded-[3px] location_dropdown ${visibleLocation ? "v" : ""}`}>
                        {visibleLocation && (
                        <ul className="location_list">
                            {locationList.length === 0 && (
                                <li key="zxc" className="dropdown_item">
                                    no result
                                </li>
                            )}
                            {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
                            {locationList && locationList.map((x: any) => (
                                <li
                                key={x.id}
                                onClick={() => selectItemJob(x)}
                                className="dropdown_item"
                                >
                                <div className="item_text2">{x.name}</div>
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="absolute left-2/4 top-[50px] -translate-x-2/4 w-full">
                <span className="text-[30px] font-normal no-italic">Capture the attention of your future employer - </span>
                <span>
                    <Link to="/signup" className="underline hover:no-underline text-[30px] font-bold no-italic">
                        CREATE YOUR PROFILE
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SearchBar;